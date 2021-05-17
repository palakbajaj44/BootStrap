import logo from './logo.svg';
import './App.css';
import './Login.css';
import Login from './Login.js';
import Registration from './Registration.js';
import facebooklogo from './facebooklogo.png';
import instalogo from './instalogo.jpg';
import twitterlogo from './twitterlogo.png';

function App() {
  return (
    <div className="App">
      <header>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Full Stack Dev Courses</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#course">Popular Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contactus">Contact Us</a>
        </li>
        <li class="nav-item dropdown nav-item">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Registration
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/Registration">Sign Up</a>
          <a class="dropdown-item" href="/Login">Login</a>
        </div>
      </li>
      </ul>
    </div>
  </div>
</nav>
     
      </header>
      {/*<nav className="Nav">
		
       
		<ul>
			<li><a href="index.html">Home</a></li>

			<li><a href="forms.html">Registration</a></li>
			<li><a href="Services">Services</a></li>
			<li><a href="Contactus">Contact Us</a></li>
			

		</ul>
	</nav> */}
  <section className="sec"> 
  <div class="jumbotron text-center">
  
  <h1 id="txt" style={{fontFamily: "fantasy",fontWeight:"bolder"}}>Full Stack Dev Courses</h1>
  <p id="txt1"> Carve Your Own Future In The Technology World</p>
</div>
      </section>

      <section id="sec2">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 ">
            <img src="/Icon1.png"  />
            <h3>Gain expertise in the latest skills</h3>
            <p >with courses and Specializations in computer science, humanities, and more</p>
          </div>    
          <div class="col-lg-3 ">
            <img src="/Icon2.png"  />
            <h3 >Learn job-ready career skills</h3>
            <p >in artificial intelligence, machine learning, data science, cloud engineering, and more</p>
          </div>
          <div class="col-lg-3 ">
            <img src="/Icon3.png"  />
            <h3 >Earn a degree</h3>
            <p >from the world's leading universities in business, computer science, and more</p>
          </div>    
          <div class="col-lg-3 ">
            <img src="/Icon4.png"  />
            <h3 >Upskill your organization</h3>
            <p >with on-demand training and development programs</p>
          </div>           
        </div>
      </div>
      </section>

      <section className="sec1">
       <div id="course"> 
       <h1 class="text-center">Popular Courses</h1>
        <div class="card-group">
        <div class="card" style={{width: "18rem"}}>
          <img src="/mean.jpeg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title" style={{fontWeight: "bolder"}}>MEAN STACK</h5>
          <p class="card-text">Become a MEAN Stack Developer: MongoDB; Express;Angular;Node
<br></br>Create a MEAN Stack Application step by step from scratch</p>
          <a href="#" class="btn btn-primary">Register</a>
          </div>
        </div>
        <div class="card" style={{width: "18rem"}}>
          <img src="/mern.jpeg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title" style={{fontWeight: "bolder"}}>MERN STACK</h5>
          <p class="card-text">MERN Stack Web Development with Ultimate Authentication
<br></br>Build Ultimate Authentication Project with MERN Stack from Scratch </p>
          <a href="#" class="btn btn-primary">Register</a>
          </div>
        </div>
        <div class="card" style={{width: "18rem"}}>
          <img src="/lamp.jpeg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title"style={{fontWeight: "bolder"}}>LAMP STACK</h5>
          <p class="card-text">High Availability for the LAMP Stack, 
          <br></br>Step-by-Step to eliminate single POF & increase uptime for your Linux, Apache, MySQL, & PHP Based Web Sites & Apps.</p>
          <a href="#" class="btn btn-primary">Register</a>
          </div>
        </div>
        <div class="card" style={{width: "18rem"}}>
          <img src="/lemp.jpeg" class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title"style={{fontWeight: "bolder"}}>LEMP STACK</h5>
          <p class="card-text">Learn how Linux, NGINX, MariaDB, and PHP form the LEMP stack.
            Set up high-performance architecture with NGINX, the industry-standard, open-source web server.</p>
          <a href="#" class="btn btn-primary">Register</a>
          </div>
        </div>
        </div>
        </div>
        </section>
      
      <footer className="foot1">
        <div id="contactus">
   
      <div class="container-fluid bg-grey">
  <h2 class="text-center">CONTACT US</h2>
  <br/>
  <div class="row">
    <div class="col-sm-5">
      <p>Contact us and we'll get back to you within 24 hours.</p>
      <p><i class="fa fa-map-marker" aria-hidden="true"></i> New Delhi, India</p>
      <p><i class="fa fa-phone-square" aria-hidden="true"></i> +22 204154688</p>
      <p><i class="fa fa-envelope" aria-hidden="true"></i> support@something.com</p>
    </div>
    <div class="col-sm-7">
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required />
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
      <div class="row">
        <div class="col-sm-12 form-group">
          <button class="btn btn-info pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
    <pre className="pret">
    <p>
       &copy; 2021  All rights reserved.
    </p>
    <br/>
    <p>Designed and Developed by Group A (Harsh, Palak, Fritha, Arjit)  </p>
    </pre>
  </div>
</div>
    </div>                                            
	</footer>
  
      
    </div>
   
  );
}

export default App;
