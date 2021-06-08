import React from "react"
import ProjectSec from '../components/ProjectSec/ongoingproject'
import Header from '../global/header'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Project = () => (
  <Layout>
    <SEO title="Ongoing Project" />
  <Header text="Ongoing Projects"/> 
  <ProjectSec/> 
  
  </Layout>
)

export default Project