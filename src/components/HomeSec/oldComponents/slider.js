import React from 'react';
import {Carousel} from 'react-bootstrap'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const slider = () => {
    return (
        <SlideWrap>
        <Carousel fade={true}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://livedemo00-joomla.template-help.com/joomla_prod-24688/images/slider/slide-1.jpg"
      alt="First slide"
    />

    <Carousel.Caption>
    <Fade top distance="60px" duration={1500} delay={400}>

      <h3>Renovating</h3>
      <h4>Interior And Exterior design</h4>
      <p>We provide overall planning, coordination and control of a project, <br/> so you don’t have to worry about anything.</p>
      <button className="btn ml-0  sbtn">Read More</button>
 </Fade>
    </Carousel.Caption>
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://livedemo00-joomla.template-help.com/joomla_prod-24688/images/slider/slide-2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <Fade bottom distance="60px" duration={1500} delay={400} >

    <h3>Renovating</h3>
      <h4>Interior And Exterior design</h4>
      <p>We provide overall planning, coordination and control of a project, <br/>so you don’t have to worry about anything.</p>
      <button className="btn ml-0  sbtn">Read More</button>
      </Fade>

    </Carousel.Caption>
  </Carousel.Item>

</Carousel>    
        </SlideWrap>
    );
};


const SlideWrap = styled.div`

height:85vh;
overflow:hidden;
position: relative;
.carousel-caption{
width:50%;
    position:absolute;
    top:50%;
    left:40%;
    transform:translate(-50%, -50%);

    h3{

        text-align:left;
        font-family:var(--HeadingFont);
        color:var(--HeadingColor);
        font-size: 48px;
        line-height: 1.2;
        font-weight: 700;
        font-style: normal;
        letter-spacing: 1.5px;
        margin-bottom: 15px;
        text-transform: uppercase;
    }

    h4 {
    font-size: 24px;
    line-height: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #151515;
    font-style: normal;
    letter-spacing: 1px;
    margin-bottom: 1em;
    text-transform: uppercase;
    text-align:left;

}


    p{
        text-align:left;

        color:var(--HeadingColor);
        border-left: 7px solid #fb8957;
  
        font-style: normal;
        margin-bottom: 44px;
        padding-left: 14px;
    }

    .sbtn{

        display:block;
        background-color:var(--AccentColor1);
        border:none;
        padding:10px 40px;
        color:white;
        border-radius:0;
        transition:0.2s ease-in-out;
        text-transform: uppercase;
        font-family:var(--TextFont);
        font-weight:700;

        &:hover{

            background-color:var(--BrandColor);
            color:var(--AccentColor3);
 
        }
    }

 

}

`
export default slider;