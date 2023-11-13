import React from "react"
import Layout from "../components/layout/Layout"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from '../styles/home.module.css'


export default function Home({data}) {
//we destructure the data from the graphql query (in this case stored inside the gatsby-config file).
  // const {title, description} = data.site.siteMetadata;

  const image = getImage(data.file.childImageSharp.fluid)
  //In the above, we're accessing "fluid" or non static image. Done following the docs about the gatsby image plugin

  return <Layout>
    <section className={styles.header}>
    <div>
      <h2>Design</h2>
      <h3>Develop & Deploy</h3>
      <p>Ux Designer & Web Developer based in Oslo</p>
      <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
    </div>
    <GatsbyImage image={image} alt="banner-img"/>
    {/* <img src="/banner.png" alt="site.banner" style={{maxWidth: '100%'}}></img> */}
    {/* since it's destructured, we can use it directly as a js object */}
    {/* <p>{title} - {description}</p> */}
  </section>
    </Layout>
}

// with the below we access the data from the graphql query (in this case stored inside the gatsby-config.js file). This info is stored
//as "data", that we pass as a prop to the component. Then, we destructure the data, and that way we can use it directly in the component.
// This way of asking a query is only possible from a page. To do this from a component, we'll do it a bit different.
// export const query = graphql `
// query SiteInfo {
//   site {
//     siteMetadata {
//       title
//       description
//     }
//   }
// }

// `

export const query = graphql`
query BannerPic {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid(traceSVG: {}) {
        sizes
        src
      }
      gatsbyImageData
    }
  }
}
`