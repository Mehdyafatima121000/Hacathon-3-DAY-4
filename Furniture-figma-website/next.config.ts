import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add this line to allow images from Sanity
  },
  /* other config options here */
};

export default nextConfig;
