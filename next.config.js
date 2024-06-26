/** @type {import('next').NextConfig} */

const withNextra = require('nextra') (
  {
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    latex: true,
    i18n: {
      locales: ['en-US', 'id-ID'],
      defaultLocale: 'en-US',
    },
  }
)

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

module.exports = withNextra(nextConfig)