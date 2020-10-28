import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby'
const AboutPage = ({data}) => {
    
    return(
       
        <div>
            <Layout >
            <h1>{data.allFile.edges[0].node.childMarkdownRemark.frontmatter.title}</h1>
            <p>We are a firm company and you can contact us via our social media handle @joshua</p>
            </Layout>
        </div>
    );
}

export default AboutPage;

export const query = graphql`
        query AboutPage {
            allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "about"}}) {
            edges {
                node {
                childMarkdownRemark {
                    frontmatter {
                    intro
                    title
                    }
                }
                }
            }
            }
        }
      
    `