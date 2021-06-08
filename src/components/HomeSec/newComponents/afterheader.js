import React from 'react'
import styled from 'styled-components'

import afterimg from '../../../images/after.jpg'
export default function Afterheader() {
    return (
        <AfterHWrap className="container-fluid " style={{backgroundImage:`url('${afterimg}')`}}>
            <div className="container ">
                <img src={afterimg} alt="after" width="90%"/>
                <h2>WE BUILD WITH PASSION</h2>
                </div>

           

        </AfterHWrap>
    )
}

const AfterHWrap = styled.div`

background-size:cover;
padding:3rem 9rem;
position:relative;
height:100vh;



h2{

    padding:4rem;
    color:white;
    background-color:rgba(19, 0, 0, 0.8);
    text-align:center; 
    z-index:24 !important;
    position:relative;
    width:50%;
    display:block;
    margin:auto;
    transform:translateY(-6rem);
    font-size:3rem;
}
img{

    z-index:24 !important;
    position:relative;
    margin:auto;
    display:block;
}
&::before{

position:absolute;
top:0;
left:0;
width:100%;
height:100%;
content:"";
background: linear-gradient(52deg,rgba(19, 0, 0, 0.6895133053221288) 0%,rgba(47, 37, 37, 0.9023984593837535) 100%);
}

@media(max-width:960px){
padding:3rem 0rem;
height:45vh;
h2{


    font-size: 1.5rem;
    padding: 1.7rem;
    text-align: center;
    width: 80%;
    margin-top: 1rem;
}
#hr{

    display:none;
}

}



`