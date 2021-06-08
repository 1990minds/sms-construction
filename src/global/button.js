import React from 'react'
import styled from 'styled-components'
export default function Button(props) {
    return (
        <ButtonWrap>
           {props.text} 
        </ButtonWrap>
    )
}

const ButtonWrap = styled.button`



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






`