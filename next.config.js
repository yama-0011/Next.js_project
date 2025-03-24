/** @type {import('next').NextConfig} */
 
module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://stunning-eureka-g4x7v6vq6ww93v997-3000.app.github.dev",
        "http://localhost:3000"
      ],
    },
  },
}