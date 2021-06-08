import React from 'react'
import styled from 'styled-components'
import sustainImg from '../../../images/sustain.png'
import {Link} from 'gatsby'

export default function Sustainable() {
    return (
        <SustanWrap className="container">

        <div className="row">
            <div className="col-sm-4 pt-md-5 pt-2 col-md-6">

                <img src={sustainImg} alt="sustain" width="100%"/>
            </div>
            <div className="col-sm-6 py-5">
                <div className="sustainContent">


      <h2>SUSTAINABLE CONSTRUCTIONS IS THE <span>FUTURE</span></h2>
       <p className="text-white">Constructions has a major impact on the environment in its consumption of energy, both directly and embodied in the materials that it uses.</p>
          

      <Link to="/feature" className="btn">
          Read More
      </Link>

          </div>
            </div>

        </div>
            
        </SustanWrap>
    )
}


const SustanWrap = styled.div`

.sustainContent{

margin-top:2rem;

p{

    font-size:1rem;
  
}

.btn{

    color:#FBA927;
    background-color:#2d2d2d;
    text-transform:uppercase;
   font-weight:bold;
    letter-spacing:0.1rem;
}
    h2{

        color:grey;
        font-weight:bold;
        font-size:2rem;

        span{

            color:#F58C03;
        }
    }
}


`