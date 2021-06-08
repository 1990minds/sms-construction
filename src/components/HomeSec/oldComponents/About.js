import React from 'react';
import styled from 'styled-components'
import Button from '../../../global/button'
const About = () => {
    return (
        <AboutWrap className="container my-5 p-5">

            <div className="row" >
                <div className="col-sm-6" id="z" >

            <div id="atext" >
              
              <h2 className="text-light">
              WE’RE THE DESIGN-BUILD PEOPLE
              </h2>
              <p className="text-light">
              90% of our work is Design-Build, the delivery method that keeps everyone under the same roof. Single-source responsibility means you work with a skilled team that brings innovative solutions and added value to every phase of the job.
              </p>
    <Button text="Lear More"/>
            </div>

                </div>
                <div className="col-sm-6">

                    <img src="https://www.korteco.com/wp-content/uploads/2018/02/design-build-home.jpg" alt="gf" width="100%"/>
                </div>

            </div>
            
        </AboutWrap>
    );
};

const AboutWrap = styled.div`

background-color:#171A1F;

#atext{

    transform:translateX(3rem);
}
img{

    z-index:-1;
}
#z{
background-color:#171A1F;
   z-index:24 !important; 
   padding:2rem 0;
}

h2{

    font-size:5.5rem;
    width:700px;
  
}
p{
    font-size:20px;
}
`
export default About;