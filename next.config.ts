import type { NextConfig } from 'next';
import { withPayload } from '@payloadcms/next/withPayload';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Disable static optimization for pages that need database access
  // This ensures pages are rendered at request time, not build time
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default withPayload(nextConfig);
