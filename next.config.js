/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "https://image.tmdb.org/t/p/original",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  