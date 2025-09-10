import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // Configuration for Replit environment
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    // Allow all hosts for Replit proxy
    experimental: {
        allowedRevalidateHeaderKeys: ['*'],
    },
    // Configure server options for Replit
    async rewrites() {
        return []
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                ],
            },
        ]
    },
}

export default nextConfig
