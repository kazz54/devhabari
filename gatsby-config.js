/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})



module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: 'Revista',
    titleTemplate: '',
    // titleTemplate: "%s - Curated List of Free Education Resources",
    description:
      'Revista is an open source blog/magazine template. Simply write articles in Markdown, place in the content folder, and Revista will automatically create categories and articles!',
    url: 'https://revista.mesmerdesign.ca', // No trailing slash allowed!
    image: '/logo.png', // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: '',
    defaultTitle: 'Revista',
  },

  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-read-time-estimate`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [ `gatsby-remark-responsive-iframe`,
          {
            resolve: 'gatsby-remark-embedded-codesandbox',
            options: {
              // Required:
    
              // Example code folders are relative to this dir.
              // eg src/_examples/some-example-folder
              directory: `${__dirname}/src/_examples/`,
    
              // Optional:
    
              // Custom protocol for parsing the embedding link
              // default:
              protocol: 'embedded-codesandbox://',
    
              // Customise CodeSandbox embedding options:
              // https://codesandbox.io/docs/embedding#embed-options
              // default:
              embedOptions: {
                view: 'preview',
                hidenavigation: 1,
              },
    
              // Customise the embedding iframe given the generated url
              // default:
              getIframe: url => `<iframe src="${url}" class="embedded-codesandbox" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`
            }
          }
        ]
      }
    },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://mysite.com',
    //     sitemap: 'https://mysite.com/sitemap.xml',
    //     policy: [{ userAgent: '*', allow: '/' }],
    //   },
    // },
//},
    
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://mysite.com',
    //     sitemap: 'https://mysite.com/sitemap.xml',
    //     policy: [{ userAgent: '*', allow: '/' }],
    //   },
    // },
    // {
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        content: [
          path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}'),
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },

  ],
}
