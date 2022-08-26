/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "villazzo-backend.herokuapp.com"],
  },
}

module.exports = nextConfig
