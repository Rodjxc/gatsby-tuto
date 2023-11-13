/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      //plugin to give us a better interface to our markdown files
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {

      //plugin to give us a way to access our files
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `img`,
        // Path to the directory
        path: `${__dirname}/src/img/`,
      },
    },
    {

      //plugin to give us a way to access our files
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `projects`,
        // Path to the directory
        path: `${__dirname}/src/projects/`,
      },
    }, 
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  
  ],
  //not a plugin, we just put here some info that we can then retrieve with JS
  siteMetadata: {
    title: 'Web Warrior',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2023 Rod J Dev',
  },
};