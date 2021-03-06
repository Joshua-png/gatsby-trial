/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata : {
    index:{
      title : "Joshua first site",
      author: "Joshua Aryee"
    },
    blog:{
      title:'Drink',
      paragraph:'Always eat a balance diet in order to be healthy',
    }
    
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    'gatsby-transformer-remark',
  ],

}
