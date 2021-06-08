import React, { Component } from 'react'
import styled from 'styled-components'

export default class homeform2 extends Component {


    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: "",
          loading:false
        };
      }


      submitForm(ev) {
        ev.preventDefault();
        this.setState({loading:true})
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
            this.setState({loading:false})

          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }




    render() {


        const { status, loading } = this.state;


        return (
            <HomeForm className="container-fluid py-5">
            <h2>GET FREE ESTIMATE</h2>
            <form
            autoComplete="off"
            onSubmit={this.submitForm}
            action="https://formspree.io/myynjkog"
            method="POST"
            
            className="container py-5">
  <div className="form-row">
    <div className="col-sm-2 mb-3 mb-sm-0">
      <input type="text" className="form-control" name="name" placeholder="NAME" required/>
    </div>
    <div className="col-sm-3">
    <div class="form-group">
    <select className="form-control" name="construction_type" id="exampleFormControlSelect1" required>
      <option value="" disabled selected hidden>CONSTRUCTION TYPE</option>
      <option value="Industrial">Industrial</option>
      <option value="Commercial">Commercial</option>
      <option value="Residential">Residential</option>
     
    </select>
  </div>
    </div>
    <div className="col-sm-3">
    <div class="form-group">
    <select className="form-control" name="structure_type" id="exampleFormControlSelect1" required>
    
      <option value="" disabled selected hidden>STRUCTURE TYPE</option>
      <option value="RCC">RCC</option>
      <option value="Steel Structure">Steel Structure</option>
 
    </select>
  </div>
    </div>
    <div className="col-sm-2 ">
        <input type="text" className="form-control" name="location" placeholder="LOCATION" required/>

    </div>

    <div className="col-sm-2 mt-3 mt-sm-0">
      <input type="text" className="form-control" name="area" placeholder="AREA(Sqft)" required/>
    </div>
  </div>

  
  {status === "SUCCESS" ? <div className="text-center alert alert-success" role="alert">
  Thanks, we will get in touch with you.
</div> :<button type="submit" disabled={loading? true: false} className="btn d-block mx-auto my-4 " required>{loading ? "SENDING":"REQUEST"}</button>}
        {status === "ERROR" && <div className="text-center alert alert-danger" role="alert">
ooops Somthing Error !
</div>}

</form>

        </HomeForm>
        )
    }
}

const HomeForm = styled.div`

background-color:#201F1F;
h2{

    color:#707070;
    font-weight:800;
    text-align:center;
    font-size:3rem;
}


select, input{
background-color:#3F3A3A;
box-shadow:0 1px 3px 1px #000000b8;
border:none;
padding:0.2rem 0.5rem;
color:grey;
font-size:14px;
letter-spacing:0.02rem;
height:50px;
caret-color: #F24E13;
&:focus{
background-color:#3F3A3A;
box-shadow:0 1px 3px 1px #000000b8;
border:none;
color:grey;
font-size:1rem;
letter-spacing:0.05rem;
height:50px;
    
}

option {
color:white;
 background-color:grey;
  border:none; 
    &:hover{

  color:white;
  background-color:grey !important;
  border:none; 

    }


} 


 
}

.btn{

    background-color:#F24E13;
    padding:0.5rem 2rem;
box-shadow:0 1px 3px 1px #000000b8;
font-weight:bold;
    color:white;
}




`