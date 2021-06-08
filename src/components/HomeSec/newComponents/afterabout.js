import React from 'react'
import styled from 'styled-components'
import imgbg from '../../../images/231-02.png'
import cl from '../../../images/clientLogo/c (1).png'
import c2 from '../../../images/clientLogo/c (2).png'
import c3 from '../../../images/clientLogo/c (3).png'
import c4 from '../../../images/clientLogo/c (4).png'
import c5 from '../../../images/clientLogo/c (5).png'
import c6 from '../../../images/clientLogo/c (6).png'
import c7 from '../../../images/clientLogo/c (7).png'
import c8 from '../../../images/clientLogo/c (8).png'

import SustainSec from './sustainable'
import img2 from '../../../images/60026 [Converted]-02.png'


export default function VideoSec() {

let clientdata = [
    {
        imge:cl,
        id:"imge"

    },
    {
        imge:c2,
        id:"imge"


    }, {
        imge:c3,
        id:"imge"


    }, {
        imge:c4,
        id:"mainimge"

    }, {
        imge:c5,
        id:"imge"


    }, {
        imge:c6,
        id:"imge"

    }, {
        imge:c7,
        id:"imge"


    }, {
        imge:c8,
        id:"imge"


    }
]


const clienttextdata = [{
    text:`THE NEW COLLEGE, CHENNAI
    PVT. LTD.`,
    id:"1"
    
},{
    text:`ABDUL HAKEEM COLLEGE, MELVISHARAM – TAMIL NADU`,
    id:"1"
    
},{
    text:`P. D. PLASTICISERS & CHEMICALS
    PVT. LTD.`,
    id:"1"
    
},{
    text:`JFP AGRO
    PVT. LTD.`,
    id:"1"
    
},{
    text:`PRIMUS KABSONS
    PVT. LTD.`,
    id:""
    
},{
    text:`TRAKOLLY ENGINEERING
    PVT. LTD.`,
    id:""
    
},{
    text:`POLY POLYMERS
    PVT. LTD.`,
    id:""
    
},{
    text:`EXCEL WADDING
    PVT. LTD.`,
    id:""
    
},{
    text:`LAKSHMI FORGING
    PVT. LTD.`,
    id:""
    
},{
    text:`ESTATE CLUB
    PVT. LTD.`,
    id:""
    
}]


    return (
        <AfterA classname="container-fluid bar" style={{backgroundImage:`url('${imgbg}')`}}>
            
<div className=" container" style={{position:'relative'}}>
<div className="row " >
    {
clientdata.map((item, i)=>{

return <div className="col-sm-2 col-6 p-1" key={i} >

<img src={item.imge} alt={item.imge} width="100%" />
</div>

})
    }

{
clienttextdata.map((item, i)=>{

return <div  className="col-sm-2 col-6 p-1" key={i} >
<div style={{ height:"145px"}} className="bg-white w-100   d-flex align-items-center justify-content-center"  >
<h6 className="px-2 text-secondary"    style={{fontSize:"0.8rem", fontWeight:"bold",  textAlign:"center"}}>{item.text}</h6>
</div>
</div>

})
    }
</div>
   
</div>

 <SustainSec/>
        </AfterA>
    )
}

const AfterA = styled.div`
background-attachment:fixed;
.bar{

    background-color:rgba(0, 0, 0, 0.5);
    padding:2rem;
    position:relative;
    
}
padding-top:7rem;
background-size:cover;
height:100%;
background-size: 120%;
    background-repeat: no-repeat;
  
    background-position: right;
    position:relative;

    &::before{

position:absolute;
top:0;
left:0;
width:100%;
height:100%;
content:"";
background: linear-gradient(52deg,rgba(8, 0, 0, 0.6895133053221288) 0%,rgba(47, 37, 37, 0.9023984593837535) 100%);
}

ul{


li{

    list-style:none;
}

    display:flex;
    align-items:center;

    #mainimge{

 display:block;
        margin:auto;
        width:100%;
        transform:scale(1.3) translateY(-5.2rem);

    }

    #imge{

        display:block;
        margin:auto;
        width:60%;
        opacity:0.9;
    }

}

@media(max-width:1500px){
    height:100%;  
    ul{


li{

    list-style:none;
}
    display:flex;
    align-items:center;

    #mainimge{

 display:block;
        margin:auto;
        width:100%;
        transform:scale(1.8) translateY(-3.2rem);

    }

    #imge{

        display:block;
        margin:auto;
        width:40%;
        opacity:0.4;
    }

}
   
   }

   @media(max-width:960px){
    padding-top:2rem;
ul{

    display:block;
    padding-left:0;

    #imge{

display:block;
margin:auto;
width:80%;
padding:2rem;
opacity:0.4;
}
}


#mainimge{

display:none !important;
     

   }

   }

`