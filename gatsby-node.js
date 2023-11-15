// in this file we'll try to create pages for each markdown file, instead of creating pages for each individual markdown file.
// To do so, we'll "export" the page created, and we do so in an async function that will "fetch" the data from the markdown file and
// then will return a page with a result based on the query
const { graphql } = require('gatsby');

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  // The exports.createPages is a function exported from your gatsby-node.js file, and it's a special function that Gatsby recognizes.
  // When Gatsby runs the Node API methods like createPages, it provides an object containing various tools and utilities that you
  // can use within that method. This object includes the graphql function for querying data and the actions object for creating pages.
  // So, by using the destructuring syntax, you're extracting graphql and actions directly from the provided object, making it more 
  // convenient to use these tools within your createPages function. It's a concise way of saying "I only want these specific properties
  // from the object, and I want to use them in my function."
  const { createPage } = actions;

  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // in the above case, we only fetch the name of the slug from the markdown file.

  // now, we want to generate a page, for each of those items in the data. So we cycle through all the items in the data with a forEach

  data.allMarkdownRemark.nodes.forEach(node => {
    // the forEach method lets us "do something, for each". In this case what we want is:

    createPage({
      path: '/projects/' + node.frontmatter.slug, // that will be the route/path of the page
      component: path.resolve('./src/templates/project-details.js'), // the template page. Has to be an absolute path. We have to require it at the top with a const
      context: { slug: node.frontmatter.slug } // what variable we want to pass to the template when creating the page
    });
  });
};
