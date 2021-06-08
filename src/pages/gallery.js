import React from "react"
import Gallery from '../components/gallery/gallery'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../global/header'
const Career = () => (
  <Layout>
    <SEO title="Gallery" />
    <Header text="Gallery"/> 
  <Gallery/>
  </Layout>
)

export default Career