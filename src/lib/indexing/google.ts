/**
 * Google Indexing API v3 — Instant URL Submission Service
 *
 * Uses a Google Service Account with the Indexing API enabled.
 * JWT authentication (no OAuth consent screen required).
 *
 * Setup:
 * 1. Create a Service Account in Google Cloud Console
 * 2. Enable the "Web Search Indexing API"
 * 3. Download the JSON key file
 * 4. Add the service account email as a site owner in Google Search Console
 * 5. Set env vars: GOOGLE_INDEXING_CLIENT_EMAIL, GOOGLE_INDEXING_PRIVATE_KEY
 *
 * Reference: https://developers.google.com/search/apis/indexing-api/v3/using-api
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type IndexingAction = "URL_UPDATED" | "URL_DELETED";

export interface IndexingResult {
  url: string;
  action: IndexingAction;
  success: boolean;
  notifyTime?: string;
  error?: string;
}

export interface IndexingBatchResult {
  results: IndexingResult[];
  totalSuccess: number;
  totalFailed: number;
}

// ─── JWT Builder (Service Account) ───────────────────────────────────────────

async function createJWT(
  clientEmail: string,
  privateKey: string,
): Promise<string> {
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const encode = (obj: object) =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64url");

  const signingInput = `${encode(header)}.${encode(payload)}`;

  // Import PEM private key and sign
  const pemContents = privateKey
    .replace(/-----BEGIN PRIVATE KEY-----/g, "")
    .replace(/-----END PRIVATE KEY-----/g, "")
    .replace(/\s/g, "");

  const keyBuffer = Buffer.from(pemContents, "base64");

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    keyBuffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(signingInput),
  );

  const sig = Buffer.from(signature).toString("base64url");
  return `${signingInput}.${sig}`;
}

// ─── Access Token Exchange ───────────────────────────────────────────────────

async function getAccessToken(
  clientEmail: string,
  privateKey: string,
): Promise<string> {
  const jwt = await createJWT(clientEmail, privateKey);

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Google OAuth token exchange failed (${res.status}): ${err}`);
  }

  const data = await res.json();
  return data.access_token;
}

// ─── Submit Single URL ───────────────────────────────────────────────────────

export async function submitUrl(
  url: string,
  action: IndexingAction = "URL_UPDATED",
): Promise<IndexingResult> {
  const clientEmail = process.env.GOOGLE_INDEXING_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_INDEXING_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  if (!clientEmail || !privateKey) {
    return {
      url,
      action,
      success: false,
      error: "Google Indexing API credentials not configured",
    };
  }

  try {
    const accessToken = await getAccessToken(clientEmail, privateKey);

    const res = await fetch(
      "https://indexing.googleapis.com/v3/urlNotifications:publish",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ url, type: action }),
      },
    );

    if (!res.ok) {
      const err = await res.text();
      return {
        url,
        action,
        success: false,
        error: `Indexing API error (${res.status}): ${err}`,
      };
    }

    const data = await res.json();
    return {
      url,
      action,
      success: true,
      notifyTime: data.urlNotificationMetadata?.latestUpdate?.notifyTime,
    };
  } catch (err) {
    return {
      url,
      action,
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

// ─── Submit Batch URLs ───────────────────────────────────────────────────────

export async function submitBatch(
  urls: string[],
  action: IndexingAction = "URL_UPDATED",
): Promise<IndexingBatchResult> {
  // Google Indexing API allows up to 200 requests per day
  const capped = urls.slice(0, 200);
  const results = await Promise.allSettled(
    capped.map((url) => submitUrl(url, action)),
  );

  const indexingResults: IndexingResult[] = results.map((r, i) =>
    r.status === "fulfilled"
      ? r.value
      : {
          url: capped[i],
          action,
          success: false,
          error: r.reason?.message ?? "Unknown error",
        },
  );

  return {
    results: indexingResults,
    totalSuccess: indexingResults.filter((r) => r.success).length,
    totalFailed: indexingResults.filter((r) => !r.success).length,
  };
}

// ─── Get URL Status ──────────────────────────────────────────────────────────

export async function getUrlStatus(
  url: string,
): Promise<{ notifyTime?: string; type?: string; error?: string }> {
  const clientEmail = process.env.GOOGLE_INDEXING_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_INDEXING_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  if (!clientEmail || !privateKey) {
    return { error: "Google Indexing API credentials not configured" };
  }

  try {
    const accessToken = await getAccessToken(clientEmail, privateKey);

    const res = await fetch(
      `https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${encodeURIComponent(url)}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    if (!res.ok) {
      const err = await res.text();
      return { error: `Status check failed (${res.status}): ${err}` };
    }

    const data = await res.json();
    return {
      notifyTime: data.latestUpdate?.notifyTime,
      type: data.latestUpdate?.type,
    };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Unknown error" };
  }
}
