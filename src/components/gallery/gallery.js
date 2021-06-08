import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import styled from 'styled-components'
import Image from 'gatsby-image'


export default function Gallery() {

 

    
        const data = useStaticQuery(graphql`
          query {
            allFile(filter: {
              extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
              sourceInstanceName: {eq: "gallery"}}) 
            {
              edges {
                node {
                  childImageSharp {
                    fluid {
                    originalName
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }`);
      
   
      
    
console.log(data.allFile.edges);

      return (
        <Gwrap className="container my-5">
            <div className="row">
        {

data.allFile.edges.map((item, i)=>{


    return(<>
    <div className="col-sm-4  p-2"  style={{overflow:"hidden", boxSizing:"border-box"}}>

    <Image
className="img"
fluid={item.node.childImageSharp.fluid}
alt="gallery_image"
style={{height:"340px"}}
/>
    </div>
    
    </>)
})
        }
        </div>
        </Gwrap>
    )
}


const Gwrap = styled.div`

.img{
transition:0.2s ease-in-out;
&:hover{

transform:scale(1.35); 

}
}



`