/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    loader: "akamai",
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "imgur.com",
      "i.imgur.com",
      "github.com",
      "user-images.githubusercontent.com",
    ],
    path: "",
  },
  exportPathMap: "",
  assetPrefix: "./",
};

export default nextConfig;
