import React, { Component } from 'react'
import './Login.css';
import './App.css';

export class Login extends Component {
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
    </ul>
    
    </div>
   </nav>
      </section>

      

<body>
<section className="sec">
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                <label for="inputPassword">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
            </form>
            <div class="row">
			<h6 style={{padding:15}}>Don't have an account? <a href="Registration">Click Here to Register</a></h6>
			</div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  </section>
</body>




            </div>
        )
    }
}

export default Login
