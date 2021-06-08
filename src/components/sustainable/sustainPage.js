import React from 'react'
import styled from 'styled-components'
export default function SustainPage() {
    return (
       <FeatureWrap className="container py-5">

           <div className="row">
               <div className="col-xl-6">


                 <img src="https://emottawablog.com/wp-content/uploads/2020/01/shutterstock_1140754952.jpg" alt="sidepage" width="100%"/>

               </div>
               <div className="col-xl-6">

<h4 className="pl-3 text-white my-5 my-xl-1">Green Buildings – The Future of Indian Construction </h4>
               <p className="text-white">

    

               Around half of all non-renewable resources mankind consumes are used in construction, making it one of the least sustainable industries in the world.
Construction has a major impact on the environment in its consumption of energy, both directly and embodied in the materials that it uses.
Globally, voluntary systems have played a major role in raising awareness and in popularizing green design however, most of them have been specifically tailored to suit the building industry of the country where they were developed.

</p>



               </div>

           </div>



<div className="row stataCircle py-5">
    <div className="col-sm-3 col-6 ">

        <div className="content">
            <h3 className="text-white text-center  py-2 ">1</h3> 
        </div>
       
    </div>
    <div className="col-sm-3 col-6 py-2 py-sm-0 ">
    <div className="content">
            <h3 className="text-white text-center  py-2 py-sm-0 ">2</h3> 
        </div>    </div>
    <div className="col-sm-3  col-6 py-2">
    <div className="content">
            <h3 className="text-white text-center  py-2 py-sm-0">3</h3> 
        </div>    </div>
    <div className="col-sm-3 col-6 py-2">
    <div className="content">
            <h3 className="text-white text-center  py-2 py-sm-0">4</h3> 
        </div>    </div>

</div>

<div className="row">
    <div className="col-xl-6">


<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtcllFXu9oIzteJVgYLtvTrXjDBpk4OTQGF2h4ykFGrzjAGfem&usqp=CAU" alt="i" width="100%"/>

    </div>
    <div className="col-xl-6">


<p className="text-white  text">


There are numerous other rating systems used in countries around the world, each with its pros and cons depending on the type of certification targeted for a specific building.
With a view to India’s agro-climatic conditions—especially the preponderance of non-air-conditioned buildings—it was decided to set up a national rating system, the Green Rating for Integrated Habitat Assessment (GRIHA), applicable to all types of building in India’s different climatic zone.
GRIHA is a rating system for green buildings developed by The Energy and Resources Institute (TERI) of India, which plays a key role in developing green building awareness and strategies in the country.
</p>



    </div>

    <div className="col-xl-6">

<p className="text-white  text">

GRIHA was adopted and endorsed by the government of India as the national green building rating system for the country and measures are being taken to spread awareness about this rating system, and TERI signed a memorandum of understanding with the Union Ministry of New and Renewable Energy to this effect.
One of the strengths of GRIHA is that it puts great emphasis on local and traditional construction knowledge 
GRIHA uses 32 criterial to evaluate and rate buildings, totalling a maximum of 100 points
A building must score at least 50 to apply for certification
The Confederation of Indian Industry (CII) is also playing an active role in promoting sustainability in the Indian construction sector.
Green building rating brings together a host of sustainable practices and solutions to reduce the environmental impact.
</p>
    </div>
    <div className="col-xl-6">


    <img src="https://static.theceomagazine.net/wp-content/uploads/2019/07/29105028/20190715_Jan-Pacas_-sustainability_GS-subbed-1100x733.jpg" alt="i" width="100%"/>

        
    </div>

</div>



       </FeatureWrap>
    )
}

const FeatureWrap = styled.div`
h4{

    border-left:0.2rem solid #ea5200f5;

}
p{

    opacity:0.5;
    font-size:1.2rem;
    letter-spacing:0.01rem;
    line-height:1.7;
    text-align:justify;
}
.text{
margin-top:1.6rem;
    opacity:0.5;
    font-size:0.9rem;
    letter-spacing:0.01rem;
    line-height:1.7;
    text-align:justify;
}
.stataCircle{

    .content{

        border-radius:50%;
        background-color:gray;
        width:150px;
        margin:auto;
        height:150px;

    }
}
`