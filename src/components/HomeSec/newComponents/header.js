import React from 'react'
import styled from 'styled-components'
import img1 from '../../../images/header.jpg'
export default function videoSec() {
    return (
        <VideoWrap className="container-fluid" style={{backgroundImage:`url('${img1}')`}}>
            <div className="container header"  >

                <h1> Building Your Dreams</h1>
               
            </div>

            <div id="hr"/>
            
        </VideoWrap>
    )
}

const VideoWrap = styled.div`
position:relative;

height:100vh;
&::before{

    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    content:"";   
    background-color:rgba(0,0,0,0.7);
}
h1{

    font-size:4rem;
    padding:4rem 2rem;
    border:5px solid #F58C03;
    color:#F58C03;
    text-align:center;
   transform:translateY(18rem);
   border-radius:10px;
   text-transform:uppercase;
 
}

#hr{

    width: 0.25rem;
    color: white;
    height: 550px;
    background-color: white;
    border: none;
    z-index: 24 !important;
    position: relative;
    transform: translateY(35rem);
    margin:auto;
    &::before{
        width: 24px;
    height: 24px;
    position: absolute;
    top: 0%;
    left: -250%;
    background-color: #F58C03;
    border-radius: 50%;
    content: "";
    }

    &::after{
        width: 24px;
    height: 24px;
    position: absolute;
    bottom: 0%;
    left: -250%;
    background-color: #F58C03;
    border-radius: 50%;
    content: "";
    }

}

@media(max-width:1500px){
    #hr{

transform: translateY(25rem);

    }
    


}

@media(max-width:960px){


h1{

  font-size:2rem; 

}



  #hr{

display:none;

    }
    
}

`