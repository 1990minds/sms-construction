import React from 'react'
import styled from 'styled-components'
import bgheader from '../data/images/bgheader.jpg'
export default function Header(props) {
    return (
        <HeaderWrap className="container-fluid" style={{paddingTop:"6rem", backgroundImage:`url('${bgheader}')`}}>
            
        <div className="container">

            <h1>{props.text}</h1>
        </div>

        </HeaderWrap>
    )
}

const HeaderWrap = styled.div`

height:400px;

background-attachment:fixed;
background-size:cover;
background-position:center;
color:white;
text-transform:uppercase;
position: relative;
h1{
    z-index:1;
    position: relative;
    font-weight:800;
}

display:flex;
align-items:center;
&::before{

content:"";
position:absolute;
background-color:rgba(0,0,0,0.4);
width:100%;
height:100%;
top:0;
left:0;
}

`
