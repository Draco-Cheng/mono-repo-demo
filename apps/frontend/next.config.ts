import type { NextConfig } from "next";

// Enable API proxy rewrites when backend host/port is available
const backendHost = process.env.BACKEND_HOST || "localhost";
const backendPort = process.env.BACKEND_PORT || "8000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://${backendHost}:${backendPort}/api/:path*`,
      },
    ];
  },
  // Ensure consistent builds and fix Next.js 15.4.x nft.json issues
  generateBuildId: async () => {
    return process.env.BUILD_ID || 'build-' + Date.now().toString()
  },
  // Disable telemetry and problematic optimizations
  telemetry: false,
  poweredByHeader: false,
  // Force clean output
  cleanDistDir: true,
};

export default nextConfig;
