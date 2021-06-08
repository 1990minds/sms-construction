import React from 'react'
import styled from 'styled-components'
import borderImg from '../../../images/225839-P1NYIK-242-02.png'
import smswork3 from '../../../images/qualityImages/Safety.jpg'
import smswork4 from '../../../images/qualityImages/QUALITY (2).jpg'
import smswork1 from '../../../images/qualityImages/INTEGRITY.jpg'
import smswork2 from '../../../images/qualityImages/Client Satisfaction.jpg'

export default function videoSec() {

    let data = [
        {
            title:"SAFETY",
            imge:smswork3,
            text:"We ensure every safety measure in the workplace  "

        },
        {
            title:"QUALITY",
            imge:smswork4,
            text:"Maximum Quality standards of materials and craftmenship is maintained "
        
        },
        {
            title:"INTEGRITY",
            imge:smswork1,
            text:"we are built upon a rock-solid foundation of truth & honest. "
        },
        {
            title:"CLIENT SATISFACTION",
            imge:smswork2,
            text:"Quality is imbibed into our culture to ensure that we satisfy our clients."
        }
    ]
    return (
        <AboutWrap className="container-fluid p-0">

       
          <div className="container py-3 py-sm-5">
          <h1 >ABOUT <br/>
          SMS CONSTRUCTIONS</h1>

          <p>
          SMS CONSTRUCTIONS are a client-focused Design+Build+Manage construction service provider.
We at SMS CONSTRUCTIONS believe in delivering world-class engineering & construction services. Continuing our legacy of innovation, we achieve new milestones with every Endeavour. Surging ahead with our presence in multiple sectors and involvement in revolutionary projects, we are creating opportunities for everyone.
We strive to provide project management, engineering solutions and construction services that are innovative, efficient, practical and on time.Our mission at SMS CONSTRUCTIONS is to deliver outstanding service as we design, build, and manage construction projects.
          </p>

          <h2>OUR CORE VALUES</h2>
<hr/>
    <div className="row py-5">



        {
data.map((item, i)=>{
return(<>
<div className="col-xl-3 col-md-6 my-2 viewc" key={i} >

       <h5 className="text-center" >{item.title}</h5>

  <div className="textContent" style={{backgroundImage:`url('${item.imge}')`}}>
      <div className="cardContent">
        <p>{item.text}</p>
        </div>
</div>
  
</div>

</>)

})
        }
        
    </div>
</div>
<img src={borderImg} alt="border" width="100%" />

        </AboutWrap>
    )
}

const AboutWrap = styled.div`

padding-top:6rem;
color:white;
text-align:center;
background-color:#333232;

img{

    z-index:2;
    position: relative;
}
.viewc{

    border-radius:20px;
   
}

.textContent{
width:255px;
height:280px;
background-size:cover;
position:relative;
border-radius:4px;
box-shadow:0px 2px 5px 3px rgba(0,0,0,0.4);
transition:0.4s ease-in-out;
margin: auto;
&:hover{


transform:translateY(-1px);
box-shadow:2px 2px 20px 5px rgba(0,0,0,0.6);
.cardContent{


transition:0.6s ease-in-out;
top:40%;
font-size:2rem;
p{

font-size:16px;
padding:0 1rem;
opacity:0.8;

transition:0.4s ease-in-out;
}
}

} 
&:before{

    position:absolute;
    top:50%;
left:50%;
transform:translate(-50%, -50%);
width:100%;  
height:100%;
background-color:rgba(0,0,0,0.5);

content:"";


    
}
.cardContent{
transition:0.5s ease-in-out;

position:absolute;
top:40%;
left:50%;
transform:translate(-50%, -50%);
width:100%; 
p{

    font-size:16px;
    opacity:0;

    padding:0.1rem;
    transition:0.3s ease-in-out;
 
}

   
}


}

h1{

    font-weight:bold;
    font-size:3.5rem;
    margin-bottom:2rem;
    padding-top:2.5rem;
    opacity:0.6;
    font-family: 'Montserrat', sans-serif;

    
}
p{
    font-size:1rem;
    opacity:0.6;
    letter-spacing:0.05rem;
    line-height:1.8;
}

@media(max-width:1500px){
    h1{

padding-top:10rem;

    }}

@media(max-width:960px){
    h1{

        font-size:1.3rem !important;
        padding-top:1rem;
    }
    
    p{
font-size:1rem !important;
        
    }
    
    }


    h2{

        color:grey;
        font-weight:800;
        margin-top:1.5rem;
    }
    hr{

        border:none;
        height:3px;
        background-color:grey;
        width:40%;
        margin:auto;
    }


    h5{

        color:grey;
        font-weight:bold;
    }
`