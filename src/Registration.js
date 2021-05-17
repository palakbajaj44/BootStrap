//SignUp Page
import React from 'react';
import './App.css';
class Registration extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    username: '',
   
    };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
      
        
        this.setState({[nam]: val});
        }
        render() {
            return (
        <div classname="App">
        <section id="snav">
          <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
             <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
             <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
             <li class="nav-item active">
             <a class="nav-link" href="/App"><b>Back to Home Page</b> </a>
             </li>
      <li class="nav-item">
        <a class="nav-link" href="/Login"><b>Login</b></a>
      </li>
      
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" id="navbut" type="submit">Search</button>
    </form> */}
    </div>
   </nav>
      </section>
                
  <form>
      <section className="sec">
      <div class="container">
     <h1 style={{color: 'blueviolet', textAlign: 'center'}}>REGISTER HERE!!</h1>
     <h5 style={{color: 'lightcoral'}}><b>Welcome {this.state.username} !</b></h5>
     <div class="form-group row">
      <label for="username" class="col-sm-2 col-form-label">Name</label>
     <div class="col-sm-10">
      <input type="text" class="form-control" name="username" id="username" onChange={this.myChangeHandler} placeholder="Enter Name" />
      <div class="invalid-feedback">
          Please provide a name.
        </div>
    </div> 
    </div>
    <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email"  placeholder="Enter Email"/>
    </div>
    </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="pass" placeholder="Enter Password"/> 
    </div>
    </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
      <div class="col-sm-10">
        <div class="form-check" id="gen" >
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
          <label class="form-check-label" for="gridRadios1" style={{paddingLeft:"15px"}}>
                Male
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label class="form-check-label" for="gridRadios2" style={{paddingLeft:"15px"}}>
                Female
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"  />
          <label class="form-check-label" for="gridRadios3" style={{paddingLeft:"15px"}}>
                Others
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1" style={{paddingLeft:"15px"}}>
              Agree to all Terms and Conditions
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary" onClick={jfun} >Sign Up</button>
    </div>
  </div>
  </div>
  </section>
</form>
</div>
            );
            }
            }
            function jfun(){
                if(document.getElementById("username").value.length === 0)
            {
               alert("Please enter Name...")
            }
            else if(document.getElementById("email").value.length === 0)
            {
               alert("Please enter Email...")
            }
            else if(document.getElementById("pass").value.length === 0)
            {
               alert("Please enter Password...")
            }
            else if(document.getElementById("gen").value.length === 0)
            {
               alert("Please choose a Gender...")
            }
            else{
                alert("Details are Submitted....Thankyou for Register.")
            }
        }
            export default Registration
