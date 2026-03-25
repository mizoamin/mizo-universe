import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * Allow images served from Hostinger CDN domains.
     * Add additional patterns if the asset URLs span multiple subdomains.
     */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.hostinger.com",
        pathname: "/mizo-universe/**",
      },
      {
        protocol: "https",
        hostname: "**.hostinger.com",
        pathname: "/**",
      },
    ],

    /**
     * Serve images in the most efficient format the browser supports.
     * `image/avif` is tried first; `image/webp` is the fallback.
     * JPEG/PNG are used for clients that support neither (rare).
     */
    formats: ["image/avif", "image/webp"],

    /**
     * Pre-defined device widths used by Next.js to generate the srcSet.
     * Chosen to cover mobile (375, 640), tablet (768, 1024) and desktop
     * (1280, 1920, 2560) breakpoints used in the gallery grid.
     */
    deviceSizes: [375, 640, 768, 1024, 1280, 1920, 2560],

    /**
     * Additional image sizes generated for fixed-width components.
     * These complement `deviceSizes` for smaller thumbnails.
     */
    imageSizes: [16, 32, 64, 128, 256, 384, 512],

    /**
     * Cache optimised images for 30 days (2 592 000 seconds) on the CDN edge.
     * The Hostinger CDN respects Cache-Control headers from the origin.
     */
    minimumCacheTTL: 2_592_000,
  },
};

export default nextConfig;
