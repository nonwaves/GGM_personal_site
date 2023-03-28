import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
 // Home / Splash Page
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>My name is Gabriel Márquez, welcome to my site!</p>
      <p>I'm a web developer located in South Florida, you can find out more about me using the links above.</p>

      <StaticImage
        alt="a pictuure of myself in front of Snoqualmie Falls"
        src="../images/gabe_snoqualmie.jpeg"
      />
    </Layout>
  )
}

export default IndexPage