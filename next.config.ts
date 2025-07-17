import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // ... autres options de config ...
    eslint: {
        ignoreDuringBuilds: true,
    },
}

export default nextConfig
