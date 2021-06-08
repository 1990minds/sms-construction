import React from 'react'
import {graphql} from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Header from '../../global/header'
import Pgallery from './projectGallery'
import PStats from './OProjectStats'
import Interweave from 'interweave'

export const query = graphql`

query($slug:String!){
  odataJson(id:{eq:$slug}){
    
    title
    content
    client
    Area
    location
    src{
      childImageSharp{
        
        fluid{
          
          ...GatsbyImageSharpFluid
        }
      }
    }

    gallery {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
  }
}




`;

const  OProjectTemplate = ({data}) => {

    const project = data.odataJson
   
    console.log(project);
    return (
        <Layout>
        <SEO title={project.title} />
        <Header text={project.title}/>
    <PPageWrap className="container my-5">
        <div className="row">
            <div className="col-sm-6">
                <Image

                fluid={project.src.childImageSharp.fluid}
                alt={project.title}
                />
            </div>
            <div className="col-sm-6">

                <div className="pcontent mt-3">

                <h4 className="card-title pl-3">SCOPE OF WORK</h4>
<p className="card-text"> 
<Interweave content={project.content} />

</p>


                </div>
            </div>

        </div>
<div className="my-5">
  <PStats stats={project}/>
</div>

        <div className="mt-5">

        <Pgallery imge={project.gallery}/>
        </div>
    </PPageWrap>
    </Layout>
    )
}


const PPageWrap = styled.div`

color:white;
.card-text{


    opacity:0.7;
    font-size:1.2rem;
}

.card-title{

border-left:0.2rem solid #ea5200f5;

}

`


export default OProjectTemplate
