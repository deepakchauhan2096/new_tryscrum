module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `@debiki/gatsby-plugin-talkyard`,
      options: {
        talkyardServerUrl: 'https://comments.tryscrum.com'
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        
        // Enable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: 
      //{  url: `https://tryscrum.vervebot.io/graphql`, },
      {
        //url: "https://tryscrumtest.vervebot.io/graphql",
        url: "https://tryscrumlive.vervebot.io/graphql",
        //url: "https://tryscrumcontent.vervebot.io/graphql",
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 50,
            },
          },
        },
        // protocol: "https",
        // hostingWPCOM: false,
        // // We will be using some advanced custom fields
        // useACF: true,
        // acfOptionPageIds: [],
        // verboseOutput: false,
        // perPage: 100,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://tryscrum.vervebot.io/graphql",
        //   replacementUrl: "https://localhost:8000",
        // },
        // concurrentRequests: 10,
        // includedRoutes: [
        //   "**/categories",
        //   "**/posts",
        //   "**/pages",
        //   "**/media",
        //   "**/tags",
        //   "**/taxonomies",
        //   "**/users",
        // ],
        // excludedRoutes: [],
        // normalizer: function ({ entities }) {
        //   return entities
        // },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-143505900-1", 
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-tidio-chat',
      options: {
        tidioKey: 'pbzbewb3asra5xsnf82odlboexsbj64x',
        enableDuringDevelop: true, // Optional. Disables Tidio chat widget when running Gatsby dev server. Defaults to true.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.tryscrum.com',
        sitemap: 'https://www.tryscrum.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          // shortname: `tryscrum-com`
          shortname: `tryscrum`
      }
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/eb_widgets.js', 
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
          rule: {
              include: `${__dirname}/src/svg/`,
          },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-modal-routing`  
  ]
};
