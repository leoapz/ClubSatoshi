/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/ClubSatoshi',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
