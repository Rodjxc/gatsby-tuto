import { Link, graphql, useStaticQuery } from 'gatsby'
// we're importing graphql and the useStaticQuery if we need to ask a query to the graphql server.
import React from 'react'

const Navbar = () => {

const data = useStaticQuery(graphql`
query SiteInfo {
  site {
    siteMetadata {
      title
    }
  }
}

`)

const {title} = data.site.siteMetadata;

  return (
    <nav>
      <h1>{title}</h1>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio projects</Link>

      </div>
    </nav>
  )
}

export default Navbar