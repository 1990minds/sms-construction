import React from 'react'
import styled from 'styled-components'
import Cform from './cform'
export default function Career() {

    const jobdata = [{

        title:"Construction Project Engineer",
        location:"Bangalore",
        type:"Full Time",
        link:`https://www.facebook.com/102184223499953/posts/1088616731523359/`,
        content:`As a Construction Project Engineer, take ownership of Managing the project, end to
        end Directly or indirectly through project/construction manager. Accountable for money, material & manpower at site.`
    },
    {

        title:"Quantity Surveyor",
        location:"Bangalore",
        type:"Full Time",
        link:`https://www.facebook.com/102184223499953/posts/1094856477566051/`,
        content:` Study the drawings and calculate the quantities of materials to be procured.
        Prepare a Reconciliation statement based on the quantity of materials received, quantity of materials used, balance material on site and then calculate the material wastage.`
    }]


    return (
        <CareerWrap>
            

<div className="container ">
    <p className="sheading">WORK WITH US AND YOURSELF !!</p>
    <h1 style={{color:"#F1EEE7"}} className=" mb-sm-5 mb-3">CURRENT JOBS AVAILABLE</h1>
    <div className="row">
        <div className="col-sm-8">

<div className="row">
    {

        jobdata.map((item, i)=>{

return <div className="col-sm-6 my-4 my-sm-1 text-white">

<div className="jobcard p-4" style={{backgroundColor:"#2C2A2B"}}>

<button className="mb-4 ongoing">on going</button>
        <h6>{item.title}</h6>
        <p>Location: {item.location}</p>
        <p>Type: {item.type}</p>
        <p style={{fontSize:"15px", textAlign:"left"}}>{item.content}</p>

        <a href={item.link} target="new_tab" className="btn applay">Apply  Now</a>
</div>

</div>

        })
    }
    
</div>
        </div>

        
        <div className="col-sm-4 mt-5  my-sm-4 my-sm-1">


            <Cform/>
        </div>

    </div>
</div>
<hr/>
        </CareerWrap>
    )
}

const CareerWrap = styled.div`

margin-top:10rem;
font-size:16px;

h6{
    font-size:20px;
}
    color:white;
    @media(max-width:960px){

margin-top:7rem;
        
    }





.sheading{

    color:#E4B03A;
    font-size:16px;
}
    .jobcard{

        border-radius:0.7rem;
    }
img{

    border-radius:5px;
    box-shadow:2px 3px 18px 10px black;
}

.ongoing{

    border:none;
    background-color:#353333;
    border-radius:2rem;
    color:white;
    padding:5px 2rem;

}

.applay{
 border:none;
    background-color:#F36E08;
    border-radius:0.2rem;
    color:white;
    text-decoration:none;
}

hr{

    height:3rem;
    background-color:#F36E08;
    border:none;
}
`