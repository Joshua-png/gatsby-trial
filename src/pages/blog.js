import React from 'react';
import Layout from '../components/Layout';
import { graphql,useStaticQuery } from "gatsby";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query MyBlog {
            site {
            siteMetadata {
                blog {
                    paragraph
                    title
                }
            }
            }
        }
      
    `)
    return(
        <div>
            <Layout>
            <h1>{data.site.siteMetadata.blog.title}</h1>
            <p>{data.site.siteMetadata.blog.paragraph}</p>
            </Layout>
        </div>
    );
}

export default BlogPage;