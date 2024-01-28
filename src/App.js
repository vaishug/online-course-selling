import React, { useState } from 'react';
import  './App.css';
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

//import Badge from "@material-ui/core/Badge";
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


function CourseCard({ course }) {
 const handleAddProduct = () =>{
  window.alert("Added to the cart")
 }

  return (
    <div className="card" >
       <Link to="/productDetailComponent">
            <img src={course.image} className="card-img-top" alt={course.title} />
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.description}</p>
          
          <button className="btn btn-primary">Enroll Now</button>
          
        </div>
      </Link>
        <div className="card__inner">
              <h6>The Complete Python Bootcamp From Zero to Hero in Python</h6> 
            <p>
              Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games
                 <ul>
                    <li>
                      You will learn how to leverage the power of Python to solve tasks.
                    </li>
                    
                  </ul> 
                  <button className="btn btn-primary" onClick={handleAddProduct}> Add to Cart</button>

              </p>
  
        </div>
    </div>
  );
}

function CourseList() {
  const [courses] = useState([
    { id: 1, title: 'The complete python Bootcamp ', description: 'Description of course 1.', image: '/images/python.jpg' },
    { id: 2, title: 'Data Science', description: 'Description of course 1.', image: '/images/datascience.jpeg' },
    { id: 3, title: 'Azure cloud aritech', description: 'Description of course 1.', image: '/images/azure.jpeg' },
    { id: 4, title: 'Bussiness Analyst', description: 'Description of course 1.', image: '/images/business-analyst-training.png' },
    // Add more course objects as needed
  ]);

  return (
    <div className="container mt-5">
      <h2>Available Courses</h2>
      <div className="row">
        {courses.map(course => (
          <div className="col-md-3" key={course.id}>
            <p></p>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <href className="navbar-brand" href="#">Online Course Sales</href>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <href className="nav-link" href="#">Home</href>
                  </li>
                  <li className="nav-item">
                    <href className="nav-link" href="#">Courses</href>
                  </li>
                  <li className="nav-item">
                    <href className="nav-link" href="#">Login</href>
                  </li>
                  <li className="nav-item">
                    <href className="nav-link" href="#">Sign Up</href>
                  </li>
                  <li className="nav-item">
                    <href className="nav-link" href=""><Link to="/cart"><FaShoppingCart/></Link></href>
                  </li>
                  <li className="nav-item">
                  
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="firstContainer">
           
            <img src="images/selling.png" className="firstContainer-image"  alt=""/>
            
          </div>    
      </div>
  );
}

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">© 2024 Online Course Sales</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <CourseList />
      <Footer />
    </div>
  );
}

export default App;
