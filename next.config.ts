import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.stripe.com',
                port: '',
                pathname: '/links/*',
            },
        ],
    },
};

export default nextConfig;
