import React from 'react'
import styled from 'styled-components'
import video from '../../images/homepage-5.webm'
import Header from './header'
export default function videoSec() {
    return (
        <VideoWrap>
            
            <video className="container-fluid m-0 p-0" autoPlay controls={false}>
  {/* <source src="https://www.korteco.com/wp-content/themes/korte/videos/homepage-5.webm" type="video/mp4"/> */}
  <source src={video} type="video/ogg"/>
  Your browser does not support the video tag.
         </video>

            <Header/>  
   
         

        </VideoWrap>
    )
}

const VideoWrap = styled.div`


height:80vh;
background-color:#373B3F;

video{

    width:100%;
    height:100%;
}




`