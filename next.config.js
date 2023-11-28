/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'aafstaycation2023.s3.me-south-1.amazonaws.com',
        ]
    },
    output: 'standalone',
}

module.exports = nextConfig
