import React from 'react'
import Layout from '../components/layout/Layout'
import * as styles from '../styles/projects.module.css'
import { Link, graphql } from 'gatsby'

export default function Projects ({data}) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
      <h3> Projects and websites I've created</h3>  
      <div className={styles.projects}>
        {projects.map(project => (
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
<div> 
  <h3> {project.frontmatter.title}</h3>
  <p> {project.frontmatter.stack}</p>
</div>

          </Link>))
          }
      </div>
      </div>
  
    </Layout>
  )
}

//export page query. We pass as always the {data} to the component and then destructure what we receive, and use it in the component  

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
      id
    }
  }
}
`