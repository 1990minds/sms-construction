import React from 'react'
import styled from 'styled-components'
export default function videoHeader() {
    return (
        <VideoHeader className="container">
            <div className="header">

            <h1 className="text-white ">
            THE JOB IS THE BOSS®</h1>
            <p>The Design-Build firm where Build Smart® isn’t just a tagline, it’s our compass.</p>
            <button className="c_btn">View Projects</button>
            </div>
        </VideoHeader>
    )
}

const VideoHeader = styled.div`




.header{

    z-index:22;
position:absolute;
top:40%;
left:50%;
transform:translate(-50%, -50%);
padding:2rem;
border-left:1.5rem solid #FFDD00;

h1{

    border:4px solid #FFDD00;
    font-size:71px;
    padding:8px 25px;
    display:inline-block;
    

}

    p{

color:white;
font-size:24px;
}

.c_btn{

padding:10px 20px;
background-color:#FFDD00;
color:black;
border:none;
font-size:18px;
transition:0.5s;
&:hover{

background-color:rgba(0,0,0,0.2);
color:white;

}
}

}



`