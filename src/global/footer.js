import React from 'react'
import styled from 'styled-components'
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {

const fdata = [
    {
    link:"#",
    icon:<FaFacebookSquare/>,
    color:"#f5f5f5"
},
{
    link:"#",
    icon:<FaInstagram/>,
    color:"#f5f5f5 "
},
{
    link:"#",
    icon:<FaLinkedinIn/>,
    color:"#f5f5f5"
}

]

    return (
        <FooterWrap className="container-fluid p-0">

            <div className="container">
               <div className="row">

                   <div className="col-sm-12">
                       <div className="social">
                   {
                    fdata.map((item, i)=>{

                        return <a key={i} style={{color:item.color}} href={item.link}>{item.icon}</a>
                    })

                   }
                   </div>
                   </div>
               </div>
            </div>
           <div className="credits  py-3">
               <p>Website Designed by brewmybrand.com</p></div> 
        </FooterWrap>
    )
}

const FooterWrap = styled.div`

background-color:#101010;

.social{
height:200px;
    display:flex;
    align-items:center;
    justify-content:center;

    a{

        margin:1rem ;
      
        font-size:2rem;
        display:block;

    }
}
.credits{

background-color:rgb(10, 10, 10);
   p{

color:grey;
text-align:center;
margin:0;

} 
} 
`
