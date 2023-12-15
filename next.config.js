/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xsgames.co",
        port: "",
        pathname: "/randomusers/**",
      },
    ],
  },
}

module.exports = nextConfig
