require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Robin Mitra`,
    description: `Robin's personal website`,
    author: `@robinmitra`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-J40JDMPBB6", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type.
        typeName: "GitHub",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query.
        fieldName: "github",
        // Url to query from.
        url: "https://api.github.com/graphql",
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    {
      resolve: "gatsby-source-steam",
      options: {
        api_key: process.env.STEAM_KEY,
        user_id: process.env.STEAM_USER_ID,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
