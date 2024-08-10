module.exports = {
  siteMetadata: {
    title: "::Live Alchemy::",
    description:
      "Live Alchemy: A blog for modern seekers and adventurers, students of tarot, technology innovators and contemporary spiritual warriors.",
    tagLine: "A space for Alex on the web",
    author: "live-alchemy",
    url: `https://livealchemy.xyz`,
    keywords: [
      "alchemy",
      "blog",
      "archery",
      "adventure",
      "hiking",
      "trip",
      "report",
      "tarot",
      "esoteric",
      "wisdom",
      "warrior",
      "school",
      "spiritual",
      "scientist",
      "recipes",
      "knowledge",
      "mantra",
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Live Alchemy",
        short_name: "live-alchemy",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/crescent-sun.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 720, quality: 100 },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tracks`,
        path: `${__dirname}/src/music`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lyrics`,
        path: `${__dirname}/src/music/lyrics/`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layout": "src/components/layout",
          "@css": "src/css",
          "@images": "src/images",
          "@templates": "src/templates",
          "@pages": "src/pages",
        },
        extensions: ["js", "scss", "css"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
