import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import CareerImag from '../../data/images/career.jpg'
import Image from 'gatsby-image'

export default function Project() {


    const data = useStaticQuery(graphql`
    {
        allPdataJson {
    edges {
      node {
          id
        title
        src{
      childImageSharp{
        
        fluid{
          
          ...GatsbyImageSharpFluid
        }
      }
    }
       
      }
    }
  }
  }
    
  `)



    return (
        <ProjectWrap className="container-fluid " style={{paddingTop:"2rem"}}>

        <div className="row">

            {

             data.allPdataJson.edges.map((item, i)=>{


                return <div className="col-sm-3 my-4" key={i}>
        <Link to={`/projects/${item.node.id}`}>
        <div className="pcard" >
        <Image

    fluid={item.node.src.childImageSharp.fluid}
    alt={item.node.title}
    style={{height:"100%"}}
/>
         <div className="card-text">
             <h4 className="card-title px-3">{item.node.title}</h4>
        
         </div>

        </div>

</Link>
                </div>
             })
               
            }
            
        </div>

        </ProjectWrap>
    )
}

const ProjectWrap = styled.div`

.pcard{

color:white;
height:300px;
border-radius:0.5rem;
position: relative;
overflow:hidden;
background-size:cover;
cursor: pointer;
transition:0.2s ease-in-out;
&:hover{

    box-shadow:0px 5px 15px 2px #000000;
 background-position:left;
    transform:translateY(-8px);
   
}

&::before{

    background-color:black;
    content:"";
    position:absolute;
    width:100%;
    height:100%;
     z-index:1;
    background-color: rgba(0,0,0,0.6);

}
}
.card-title{
/* 
    border-left:0.2rem solid #ea5200f5;
        border-right:0.2rem solid #ea5200f5; */
        text-align:center;
        text-transform:uppercase;
        letter-spacing:0.1rem;
      

}
.card-text{

  width:100%;
    position:absolute;
    padding:1rem;
   top:50%;
   left:50%;
   transform:translate(-50%, -50%);
    transition:0.3s ease-in-out;
    z-index:2;

}


.btn{

    background-color:#ea5200f5;
    color:white;
}



`