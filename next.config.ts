import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // ... autres options de config ...
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

export default nextConfig
