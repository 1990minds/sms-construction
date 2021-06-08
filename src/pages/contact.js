import React from "react"
import ContactSec from '../components/contact/contact'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../global/header'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Header text=""/> 
  <ContactSec/>
  
  </Layout>
)

export default Contact
