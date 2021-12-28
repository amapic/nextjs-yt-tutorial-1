const withImages = import ('next-images')
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!a
    ignoreBuildErrors: false,
  },
  images: {
    disableStaticImages: true
  },
  ...withImages()
  
}