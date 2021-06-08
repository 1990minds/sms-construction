import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import styled from 'styled-components'
import logo from '../../images/logo2.png'
import {Link} from 'gatsby'
const Navbars = () => {
    return (
        <NavbarWrap className="container-fluid" style={{backgroundColor:"#171A1F"}}>
         <Navbar className="container"  expand="lg">
         <Navbar.Brand href="#home" className="brand"><img src={logo} alt="logo" width="50px" /></Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto text-white">
      <Link className="nav-link" activeClassName="active" to="/">
      
        Home
      
        </Link>
        <li class="nav-item dropdown">
      <Link to='#' className="nav-link dropdown-toggle" id="navbarDropdown"    > Projects  </Link>

      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        
          <Link className="dropdown-item" activeClassName="active"  to="/project">Completed Projects  </Link>
<Link className="dropdown-item" activeClassName="active"  to="/ongoingproject">Ongoing Projects  </Link>
        </div>          

     </li>

      <Link className="nav-link" activeClassName="active"  to="/feature">Future</Link>
      <Navbar.Brand href="#home" activeClassName="active" className="text-white dbrand">

<img className="d-block m-auto"  src={logo} alt="logo" width="90px" />

  </Navbar.Brand>
      <Link className="nav-link" activeClassName="active"  to="/gallery">Gallery</Link>
       <Link className="nav-link" activeClassName="active"  to="/career">Careers</Link>
      <Link className="nav-link" activeClassName="active" to="/contact">Contact</Link>
   
    </Nav>

  </Navbar.Collapse>
</Navbar>   
        </NavbarWrap>
    );
};

const NavbarWrap = styled.div`
.navbar-toggler{

  background-color:white;
}


.nav-link.active{
    color: white !important;
}

.dropdown-menu{

background-color:#171A1F;
  
  border-top:0.5px solid #F58C03;

transition:0.3s ease-in-out;


&:hover{
display:block;
  
}
  .dropdown-item{

    background-color:#171A1F;
    color:#F58C03;
  text-transform:uppercase;
 font-size:0.9rem;
 letter-spacing:0.01rem;
 padding:0.6rem;
  

  }
}

.dropdown-toggle:hover ~ .dropdown-menu {

display:block;

}
@media(max-width:960px){

  .brand{

    display:block !important;
    position:absolute;
    right:-8%;
    top:50%;
    transform:translate(-50%, -50%)
  }

  .dbrand{
display:none !important;
    
  }
}

.navbar-nav{

  align-items:center;
}
.dbrand{
display:block;
    
  }
  .brand{

    display:none;
  }
z-index:222 !important;
position:fixed;
top:0;
left:0;
width:100%;
background-color:rgba(40,40,40,.52);
color:white;

.nav-link {
    font-size: 22px;
    display: block;
    padding: .5rem 2rem;
  
    color:#F58C03 !important;
    width:8rem;
    
    text-align: center;
    text-transform:uppercase;
  
font-family: 'Montserrat', sans-serif;
    font-size:1rem;
    font-weight:500;
    letter-spacing:0.05;
&:hover{

  color:white;
}


}

`
export default Navbars;