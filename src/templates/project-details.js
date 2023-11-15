import React from 'react'
import Layout from '../components/layout/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import * as styles from '../styles/project-details.module.css'

export default function projectDetails({data}){
  const {html} = data.markdownRemark 
  const {title, stack, featuredImg} = data.markdownRemark.frontmatter

  //above, we destructure the information we'll receive from the query (with the parameter data)

  return (
    <Layout>
    <div className={styles.details}>
    <h2>{title}</h2>
    <h3>{stack}</h3>
    <div className={styles.featured}>
      <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData}/>
    </div>
         <div className={styles.html} dangerouslySetInnerHTML={{__html: html}}/>

     {/*Here will go the html that we'll map from each markdown */}
    </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        stack
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`;
