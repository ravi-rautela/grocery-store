/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: "127.0.0.1"
            }
        ]
    }
};

export default nextConfig;
