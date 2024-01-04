/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
