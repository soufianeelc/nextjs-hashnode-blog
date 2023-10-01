/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        pathname: "/res/hashnode/image/upload/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
