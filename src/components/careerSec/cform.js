import React, { Component } from 'react'
import styled from 'styled-components'

export default class Cform extends Component {


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
            <CformWrap className="container-fluid my-sm-4 my-sm-1">
<h2>DROP YOUR QUERY !</h2>

            <form
            autoComplete="off"
            onSubmit={this.submitForm}
            action="https://formspree.io/myynjkog"
            method="POST"
            
            >
 

 <div class="form-group">
    <input type="text" className="form-control" id="exampleInputEmail1" name="name" required placeholder="NAME" aria-describedby="emailHelp"/>
  </div>

  <div class="form-group">
    <input type="email" className="form-control" name="email" required id="exampleInputEmail1" placeholder="EMAIL" aria-describedby="emailHelp"/>
  </div>
  <div class="form-group">
    <input type="text" className="form-control" name="phone"  required placeholder="PHONE" id="exampleInputPassword1"/>
  </div>



  <div class="input-group">

  <textarea class="form-control" name="message" required placeholder="YOUR QUERY" aria-label="With textarea"></textarea>
</div>

  
  {status === "SUCCESS" ? <div className="text-center alert alert-success mt-4" role="alert">
  Thanks, we will get in touch with you.
</div> :<button type="submit" disabled={loading? true: false} className=" my-3 submits" required>{loading ? "Sending":"Sumbit"}</button>}
        {status === "ERROR" && <div className="text-center alert alert-danger mt-4" role="alert">
ooops Somthing Error !
</div>}

</form>

        </CformWrap>
        )
    }
}

const CformWrap = styled.div`

padding:3rem 1rem;




@media(max-width:960px){
  transform:translateY(0rem);
  padding:0rem;
}
transform:translateY(-6rem);
.submits{

  background-color:#F36E08;
border:none;
padding:0.5rem 3rem;
border-radius:0.4rem;
color:white;


}
h2{

  color:#E4B03A;
  font-size:21px;
  margin-bottom:30px;
}
input{

  background-color:#2C2A2B;
  border:none;
  
}
.btn{

    padding:10px 55px;
    background-color:#F58C03;
    color:white;
}

textarea{
  background-color:#2C2A2B;
  border:none;
  
}


select, input, textarea{
background-color:#3F3A3A;
box-shadow:0 1px 3px 1px #000000b8;
border:none;

letter-spacing:0.05rem;

caret-color: #F24E13;
&:focus{
background-color:#3F3A3A;
box-shadow:0 1px 3px 1px #000000b8;
border:none;
color:grey;
font-size:1rem;
letter-spacing:0.05rem;

    
}
}

`
