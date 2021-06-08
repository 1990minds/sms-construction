import React from 'react';
import styled from 'styled-components'
const Heading = (props) => {
    return (
        <HeadingWrap className={`${props.className}`}>
            {props.title}
        </HeadingWrap>
    );
};

const Text = (props) => {
    return (
        <TextWrap className={`${props.className}`}>
            {props.title}
        </TextWrap>
    );
};
const HeadingWrap = styled.h1`

font-size: 48px;
line-height: 1.2;
font-family: var(--HeadingFont);
font-weight: 700;
color: #151515;
font-style: normal;
letter-spacing: 1.5px;
margin-bottom: 15px;
text-transform: uppercase;


`

const TextWrap = styled.h1`

    color: #9b9b9b;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    font-family: var(--TextFont);



`
export  {Heading, Text};