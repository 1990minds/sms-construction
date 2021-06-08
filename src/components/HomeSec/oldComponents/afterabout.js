import React from 'react'
import Button from '../../../global/button'
import styled from 'styled-components'

export default function afterabout() {

let data = [{

    img:"https://www.korteco.com/wp-content/uploads/2018/04/US-Army-Corps-of-Engineers.png",
    text:"lorem text one"
},
{

    img:"https://www.korteco.com/wp-content/uploads/2018/04/US-Army-Corps-of-Engineers.png",
    text:"lorem text one"
},
{

    img:"https://www.korteco.com/wp-content/uploads/2018/04/US-Army-Corps-of-Engineers.png",
    text:"lorem text one"
},{

    img:"https://www.korteco.com/wp-content/uploads/2018/04/US-Army-Corps-of-Engineers.png",
    text:"lorem text one"
},{

    img:"https://www.korteco.com/wp-content/uploads/2018/04/US-Army-Corps-of-Engineers.png",
    text:"lorem text one"
},{

    img:"https://www.korteco.com/wp-content/uploads/2018/04/US-Army-Corps-of-Engineers.png",
    text:"lorem text one"
}]


    return (
        <AfterAWrap className="container-fluid " >
            
            <div className="container">

                <div className="row ">
                    <div className="col-sm-5 py-5" id="za">

                        <div id="txt" >
                    <h2 >We’ve built for the best.</h2>
                    <Button text="See More"/>
                    </div>

                    </div>
                    <div className="col-sm-7 py-5" id="za">

                        <div className="row">

                            {

data.map((item, i)=>{

return <>


<div className="col-sm-4">

    <img className="d-block m-auto" src={item.img} alt="al" width="70%"/>
  
</div>

</>

})
                            }
                            
                        </div>


                    </div>

                </div>

            </div>
        </AfterAWrap>
    )
}

const AfterAWrap = styled.div`

background-color:#23272D;
box-shadow:0 5px 30px -5px rgba(0,0,0,.91);
#txt{

    transform:translateX(3rem);
  

}
h2{

    font-size:4rem;
    color:#FFDD00;
}
#za{
    background-color:#23272D;
   z-index:24 !important; 
   padding:2rem 0;
}

img{

    filter: grayscale(100%);
}



`