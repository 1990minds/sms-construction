import React from "react"
import ProjectSec from '../components/sustainable/sustainPage'
import Header from '../global/header'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SustainPage = () => (
  <Layout>
    <SEO title="Sustain" />
  <Header text="Sustain"/> 
  <ProjectSec/> 
  
  </Layout>
)

export default SustainPage