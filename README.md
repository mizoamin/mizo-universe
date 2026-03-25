# Mizo Universe

The official digital ecosystem of **Captain Mizo Amin** — a hyper-realistic 3D solar system portfolio blending sports, business, and technology.

Built with [Next.js 16](https://nextjs.org) · [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) · [Tailwind CSS v4](https://tailwindcss.com) · TypeScript.

## Getting Started

```bash
# 1. Copy the env template and fill in any real values
cp .env.example .env.local

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the 3D solar system.

## Security

This project is hardened with multiple defence-in-depth layers:

| Layer | Implementation |
|-------|----------------|
| Security Headers | `next.config.ts` – CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| HTTPS Enforcement | `proxy.ts` – HTTP→HTTPS redirect on the Edge in production |
| Image Safety | `next/image` with `remotePatterns` allowlist; `dangerouslyAllowSVG: false` |
| Environment Secrets | Never prefixed with `NEXT_PUBLIC_`; `.env*.local` is git-ignored |
| XSS Prevention | No `dangerouslySetInnerHTML`; all content is code-defined |
| Fingerprinting | `poweredByHeader: false` hides Next.js version |

## Project Structure

```
app/
  layout.tsx          Root layout with metadata
  page.tsx            Home page (Server Component)
components/
  scene/
    Planet.tsx        Orbiting planet mesh (R3F)
    Stars.tsx         Star particle field (R3F)
    Sun.tsx           Self-illuminating sun mesh (R3F)
    SolarSystem.tsx   R3F Canvas + scene composition
    SolarSystemClient.tsx  Client Component wrapper for dynamic import
next.config.ts        Security headers + image config
proxy.ts              HTTPS enforcement (Next.js Edge Proxy)
.env.example          Environment variable template
```

## Scripts

```bash
npm run dev    # Start development server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```
