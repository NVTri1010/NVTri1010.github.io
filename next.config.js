const withMDX = require('@next/mdx')()

module.exports = withMDX({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/
      },
      use: ['@svgr/webpack']
    })

    return config
  }
})
