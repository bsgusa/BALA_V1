/**
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
    // Enable React Strict Mode
    reactStrictMode: true,
    // Optimize images for Vercel
    images: {
        domains: ['your-allowed-domain.com'], // Replace with your allowed domains
    },
    // Additional configurations can be added here
};

module.exports = nextConfig;