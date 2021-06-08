import React, {useState} from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

export default function ProjectGallery(props) {

   
const {imge} = props

const [cimg, setCimg] = useState(null)

const handleClick = (e, item) => {
  e.preventDefault();

setCimg(item)

}


    return (
        <ImgGalleryWrap className="container"  style={{position:"relative"}}>

          <div className="row">
            {

imge.map((item, i)=>{

return <div key={i} onClick={(e)=>handleClick(e, item.childImageSharp.fluid)} className="col-sm-6 p-1">
    <Image
className="img"
fluid={item.childImageSharp.fluid}
alt="gallery_image"
style={{width:"100%", height:"400px"}}
/>


 </div>
})

}

               


           
           
           
          </div>

{/* <ImgView data={cimg}/> */}

        </ImgGalleryWrap>
    )
}



// const ImgView = (props)=>{

// console.log(props);

//   return (props.data === null)? null   : 
  

//   <ImgViewWrap className="p-0 m-0">
  
//    <Image
//   className="img"
//   fluid={props.data }
//   alt="gallery_image"
//   style={{width:"100%", height:"500px"}}
//   />
//   </ImgViewWrap>
 
  
// }

// const ImgViewWrap = styled.div`


// position:relative;
// top:50%;
// left:50%;
// transform:translate(-50%, -50%);
// z-index:22;


// `


const ImgGalleryWrap = styled.div`
img{

  transition:0.5s !important;
}

img:hover{

transform:scale(1.2);
}


`