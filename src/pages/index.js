import React from 'react';
import {Link,graphql,useStaticQuery} from 'gatsby';
import Layout from '../components/Layout';

const HomePage = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        index {
          author
          title
        }
      }
    }
  }
  
  `)
  return(
    <div>
      <Layout>
        <h1>{data.site.siteMetadata.index.title}</h1>
        <p>Welcome to the first bootcamp of the season</p>
  <p>Contact us via twitter on <Link to="/contact">@{data.site.siteMetadata.index.author}</Link></p>
      </Layout>
    </div>
    
  );
}

export default HomePage;