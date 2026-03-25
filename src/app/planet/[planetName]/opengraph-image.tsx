import { ImageResponse } from "next/og";
import { getPlanetBySlug } from "@/lib/seo/planets";
import { SITE_NAME } from "@/lib/seo/metadata";

export const runtime = "edge";
export const alt = "Mizo Universe Planet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ planetName: string }>;
}

export default async function PlanetOGImage({ params }: Props) {
  const { planetName } = await params;
  const planet = getPlanetBySlug(planetName);

  const planetColor = planet?.color ?? "#4fa3e0";
  const displayName = planet?.name ?? "Unknown Planet";
  const theme = planet?.theme ?? "universe";
  const description = planet?.description ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(ellipse at center, #0d0d2b 0%, #000000 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Starfield background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px, 80px 80px",
          }}
        />

        {/* Planet circle */}
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: `radial-gradient(circle at 35% 35%, ${planetColor}cc, ${planetColor}33)`,
            boxShadow: `0 0 80px ${planetColor}66`,
            marginBottom: "40px",
            display: "flex",
          }}
        />

        {/* Site name */}
        <div
          style={{
            fontSize: "20px",
            color: "#888888",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "16px",
            display: "flex",
          }}
        >
          {SITE_NAME}
        </div>

        {/* Planet name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-2px",
            marginBottom: "16px",
            display: "flex",
          }}
        >
          {displayName}
        </div>

        {/* Theme badge */}
        <div
          style={{
            fontSize: "18px",
            color: planetColor,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          {theme}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "18px",
            color: "#aaaaaa",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: "1.5",
            display: "flex",
          }}
        >
          {description.length > 120
            ? description.substring(0, 120) + "…"
            : description}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
