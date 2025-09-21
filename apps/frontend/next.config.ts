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
  // Ensure consistent builds
  generateBuildId: async () => {
    return process.env.BUILD_ID || 'build-' + Date.now().toString()
  },
};

export default nextConfig;
