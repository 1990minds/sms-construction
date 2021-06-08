import React from 'react'
import styled from 'styled-components'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

export default function Contact() {

    const contactdata = [
      
        {
            text:"info@smsconstructions.co.in",
            icon:<MdEmail/>
        },
        {
            text:"SMS construction banglore",
            icon:<MdLocationOn/>
        }
    ]


    return (
        <ContactWrap className="container-fluid p-5 my-sm-4">

            <div className="row">
                <div className="col-sm-8">
                <p>IT WOULD BE</p>
               <h1>NICE TO MEET YOU</h1>

                </div>
                <div className="col-sm-4 pt-5">


                    {
                      
                      contactdata.map((item, i)=>{

                            return <div className="adress" key={i}>
                            <div className="icon">{item.icon}</div>
                            <div className="adtext ml-2 mt-2 p-3">{item.text}</div>

                            </div>

                      })
                      
                    }
                </div>

            </div>
           
        </ContactWrap>
    )
}

const ContactWrap = styled.div`
.adress{

    display:flex;
    align-items:center;
    justify-content:flex-start;

    .icon{

        font-size:2.3rem;
        color:orange;
    }

    .adtext{

        color:#f5f5f5;
        font-size:1.2rem;
        letter-spacing:0.1rem;

    }
}
h1{

    color:#F58C03;
    font-size:10rem;
    font-family: 'Kanit', sans-serif;
    font-weight:800;

}
p{

    color:#F58C03;
    opacity:0.75;
    margin: 0;
    letter-spacing: 1.5rem;
    font-size: 30px;
    font-weight: 300;
}

@media(max-width:960px){
h1{

    color:#F58C03;
    font-size:4rem;
    font-family: 'Kanit', sans-serif;
    font-weight:800;

}

 p{
 letter-spacing: 0.5rem;
     font-size: 14px;
 }   
}
`
