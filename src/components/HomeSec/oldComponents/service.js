import React from 'react';
import styled from 'styled-components';
const Service = () => {

let servicedata = [{
    title:"Remodeling",
    imge:"https://livedemo00-joomla.template-help.com/joomla_prod-24688/images/icons/icon1.png",
    text:"Our team of experts has years of experience in remodeling homes including kitchens, basements etc.",
    bg:"#373737"
},
{
    title:"Interior Design",
    imge:"https://livedemo00-joomla.template-help.com/joomla_prod-24688/images/icons/icon2.png",
    text:"Our interior design services are the best way to get a home design that completely fits you and your lifestyle.",
    bg:"#2D2D2D"
},{
    title:"Construction",
    imge:"https://livedemo00-joomla.template-help.com/joomla_prod-24688/images/icons/icon3.png",
    text:"We provide high-quality construction services to the energy, water and telecommunications markets.",
    bg:"#373737"

},{
    title:"Other Services",
    imge:"https://livedemo00-joomla.template-help.com/joomla_prod-24688/images/icons/icon4.png",
    text:"We offer more services than any other construction company. The full list of services is available on our website.",
    bg:"#2D2D2D"

}]

    return (
        <ServiceWrap>


            <div className="row">

                {

                    servicedata.map((item, index)=>{

return (<>


                <div key={index} className="service col-sm-3 px-5 py-4 " style={{backgroundColor:item.bg}}>
                    <img src={item.imge} alt="imge" className="text-center d-block p-3  mx-auto"/>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                </div>


</>)


                    })
                }
               
            </div>
            
        </ServiceWrap>
    );
};

const ServiceWrap = styled.div`

overflow:hidden;
.service{

    h4{

        font-family:var(--HeadingFont);
        text-align:center;
        color:white;
        font-weight:700;
        opacity:0.8;
    }
    p{
        color:var(--TextColor);
        text-align:center;
                font-family:var(--TextFont);
                opacity:0.7;

    }
}

`
export default Service;