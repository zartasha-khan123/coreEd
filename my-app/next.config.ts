// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",   // Unsplash
      "randomuser.me",         // RandomUser avatars
      "img.youtube.com"        // ✅ YouTube thumbnails
    ],
  },
};

module.exports = nextConfig;
