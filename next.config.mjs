/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/what-we-do',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/community',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

