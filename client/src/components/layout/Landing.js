import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

class Landing extends Component {
  
  render() {
    return (
      <div>
      <div className="jumbotron" style={{textAlign:'center'}}>
        <h1 className="display-4">Welcome to BlueTech!</h1>
        <p className="lead">Lets learn together and keep developing our skills.</p>
        <hr className="my-4"/>
        <p>We provide quality courses reviewed by renowned scholars.</p>
        <p className="lead" >
        So join us now and lets Learn together!
        <br/>
        <br/>
          <Link to="/register" className="btn btn-dark btn-lg" style={{marginLeft: "1rem"}} href="#" role="button">
            Register
          </Link>
          <Link to="/login" className="btn btn-dark btn-lg" style={{marginLeft: "1rem"}} href="#" role="button">
            Login
          </Link>
        </p>
        </div>
        <div className="container">
          <h2 style={{textAlign:'center'}}>Featured Courses</h2>
          <hr/>
          <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4oHVkdwnFsFgeL4IePTYmMBVsyjrmtrtT5A&usqp=CAU" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Check Course</a>
                </div>
              </div>
              <div className="col-12 col-md m-1">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4oHVkdwnFsFgeL4IePTYmMBVsyjrmtrtT5A&usqp=CAU" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Check Course</a>
                </div>
              </div>
              <div className="col-12 col-md m-1">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4oHVkdwnFsFgeL4IePTYmMBVsyjrmtrtT5A&usqp=CAU" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Check Course</a>
                </div>
              </div>
          </div>
        </div>
        <Footer/>
    </div>
    
    )
  }
}
export default Landing;
