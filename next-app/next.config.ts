import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:8000/api/:path*',
      },
      {
        source: '/sanctum/:path*',
        destination: 'http://127.0.0.1:8000/sanctum/:path*',
      },
    ];
  },
};

export default nextConfig;
