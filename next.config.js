const { withContentlayer } = require('next-contentlayer2')

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co' // Spotify Album Art
    ]
  }
})
