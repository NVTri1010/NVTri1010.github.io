const readingTime = require('reading-time')
const mdxPrism = require('mdx-prism')
const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  defaultLayout: true,
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: mdxContent => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent)
    })
  }
})({
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
