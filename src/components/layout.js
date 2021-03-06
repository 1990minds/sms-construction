/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../global/navbar/navbar'
import Footer from '../global/footer';
import PageTransition from 'gatsby-plugin-page-transitions';
import "./layout.css"

const Layout = ({ children }) => {


  return (
    <>
     <Navbar/>
     <PageTransition>
      {children}
       </PageTransition>
       <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
