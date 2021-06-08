import React from 'react'
import styled from 'styled-components'
export default function ProjectStats(props) {

   const { Area, Steel, duration, Concrete} = props.stats
    
    const statdata = [{

      area:Area,
      unit:"SQUARE FEET" 
    },
    
      
    {

        area:duration,
        unit:"MONTHS" 
      },
    {

        area:Steel,
        unit:"TON OF STEEL" 
      },
      {

        area:Concrete,
        unit:"M3 OF CONCRET" 
      },
    ]
    
    return (
        <PStateWrap className="container  ">
            

<div className="row">
           
            {
                statdata.map((item, i)=>{
                return  <div className="col-sm-3 p-sm-3 statCard">
                
                <h4 className="text-center" key={i}>{item.area}</h4>
                <hr/>
                <p className="text-center">{item.unit}</p>
                
                </div>
                

                })
            }  
    
</div>
          
            
        </PStateWrap>
    )
}

const PStateWrap = styled.div`


box-shadow:1px 2px 10px 7px rgba(0,0,0,0.2);
    background-color:rgba(255,255,255,0.05);

.statCard{

h4{

    font-size:4rem;

    color:rgba(255,255,255,0.1);
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
}
p{

    letter-spacing:0.2rem;
    opacity:0.5;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
}

hr{


    border:none;
    height:1px;
    background-color:#F58C03;
    opacity:0.3;
    width:70%;
    margin:5px auto;
}
   
}
`