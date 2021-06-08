import React from "react"
import ProjectSec from '../components/ProjectSec/project'
import Header from '../global/header'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Project = () => (
  <Layout>
    <SEO title="Project" />
  <Header text="Projects"/> 
  <ProjectSec/> 
  
  </Layout>
)

export default Project
