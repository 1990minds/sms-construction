import React from 'react'
import styled from 'styled-components'
import Video from './newComponents/header'
 import Afterheader from './newComponents/afterheader'
 import About from './newComponents/about'
 import AfterAbout from './newComponents/afterabout'
 import HomeForm from './newComponents/homeform'

export default function Main() {
    return (
        <MainWrap className="container-fluid p-0">
            

        <Video/>
        <Afterheader/>
        <About/>
        <AfterAbout/>
         <HomeForm/>
        </MainWrap>
    )
}

const MainWrap = styled.div`



`