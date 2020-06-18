const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://mikrasov.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;



module.exports = {
  siteMetadata: {
    title: 'Women in Philosophy',
    twitterUsername: 'PhilosophyData',
    siteUrl
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-react-svg`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Women in Philosophy',
        short_name: 'WIP		',
        start_url: '/',
        background_color: '#0277bd',
        theme_color: '#0277bd',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-430466-1",
        head: true,
      },
    },


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-catch-links',
    `gatsby-plugin-netlify`, //KEEP LAST!
  ],
}
