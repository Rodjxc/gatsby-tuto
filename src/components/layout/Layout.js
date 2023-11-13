import React from 'react'
import Navbar from '../Navbar'
import "../../styles/global.css"

export default function Layout({children}){
//   This children parameter we're passing, is actually what's inside on the index.js File. We need to tell this component (layout) to render
// what's inside the children parameter, which is what's inside the <Layout> component.
  return (
    <div className='layout'>
      <Navbar/>
      <div className='content'>
        {/* Where the content of our page will go. It changes */}
        {children}
      </div>
      <footer>
        <p>Copyright 2023 RodJ Dev</p>
      </footer>
    </div>
  )
}

