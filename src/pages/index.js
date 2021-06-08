import React, {useState, useEffect} from "react"
// import { Link } from "gatsby"

// import Main from '../components/HomeSec/main'
import HomeSec from '../components/HomeSec/main'
import Loader from '../global/loader'
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Line from '../components/HomeSec/line'

const IndexPage = () => {
// const [load, setload] = useState(0);
// const [loading, setLoading] = useState(true)
//   useEffect(()=>{

  
  


// window.onload = function () {
//   var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;

//   setload(loadTime)

//   setTimeout(() => {
//    setLoading(false)
//  }, loadTime+4000);

// }

//   })



  

 return  <Layout>
    <SEO title="Home" />

    <HomeSec/>

    
  
  </Layout> 
}

 


export default IndexPage
