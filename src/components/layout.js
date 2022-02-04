import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    navbar,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <><div>
      <nav className={navbar}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
          <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
          <li className={navLinkItem}><a href="https://github.com/nonwaves/" target="_blank" className={navLinkText}>GitHub</a></li>
          <li className={navLinkItem}><a href="https://www.linkedin.com/in/gabriel-marquez-98666080/" target="_blank" className={navLinkText}>LinkedIn</a></li>
        </ul>
        
      </nav>
    </div><div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div></>
  )
}

export default Layout