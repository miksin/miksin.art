/* eslint-disable no-undef */
module.exports = {
  pathPrefix: process.env.NODE_ENV === 'production' ? process.env.PUBLIC_PATH || '' : '',
  siteMetadata: {
    siteUrl: `https://miksin.art`,
    title: `Miksin`,
    subtitles: [
      `Hello! I am Miksin`,
      `I'm a Software Engineer`,
      `I'm Painting`,
      `I'm Programming`,
      `I come from TAIWAN`,
    ],
    description: `Software Engineer`,
    author: `Miksin`,
    links: [
      { path: '/', name: 'Home' },
      { path: '/about', name: 'About' },
      { path: '/blog', name: 'Blog' },
      { path: '/gallery', name: 'Gallery' },
    ],
    socialLinks: [
      {
        name: `github`,
        link: `https://github.com/miksin`,
      },
      {
        name: `twitter`,
        link: `https://twitter.com/miksin_`,
      },
      {
        name: `instagram`,
        link: `https://www.instagram.com/miksin_/`,
      },
      {
        name: `pixiv`,
        link: `https://pixiv.me/miksin`,
      },
      {
        name: `youtube`,
        link: `https://www.youtube.com/channel/UCmYleBoaTtNtPVZkaUwFxOw`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#A5CD6C`,
        theme_color: `#A5CD6C`,
        display: `minimal-ui`,
        icon: `src/images/yotsuba.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/pages/gallery`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`, // for markdown
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID || `UA-XXXXXXXXX-X`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.DISQUS_SHORTNAME || ``,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@constants": "src/constants",
          "@models": "src/models",
          "@images": "src/images",
        },
        extensions: [
          "js",
        ],
      },
    },
  ],
}
