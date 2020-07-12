import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Dashboard extends Component {


  render() {
    const { user } = this.props.auth;

    return (
      <div className="container">
      <div style={{justifyContent:'center',marginTop:'2rem',marginBottom:'2rem'}}>
      <h2>Welcome back!👏 {user.name} <br/> Continue Learning...</h2>
      </div>
      <hr/>
      <div>
          <h3>Completed Courses</h3>
          <br/>
          <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXfRJCQuqc6Flpm8E2FfEmPznwOCItg-rAkA&usqp=CAU" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Machine Learning</h5>
                  <p className="card-text">Points Earned: 90/100</p>
                  <p className="card-text">Completed on : 25/05/2020</p>
                  <a href="#" className="btn btn-primary">Go to Course</a>
                </div>
              </div>
              <div className="col-12 col-md m-1">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXfRJCQuqc6Flpm8E2FfEmPznwOCItg-rAkA&usqp=CAU" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Machine Learning</h5>
                  <p className="card-text">Points Earned: 90/100</p>
                  <p className="card-text">Completed on : 25/05/2020</p>
                  <a href="#" className="btn btn-primary">Go to Course</a>
                </div>
              </div>
              <div className="col-12 col-md m-1">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXfRJCQuqc6Flpm8E2FfEmPznwOCItg-rAkA&usqp=CAU" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Machine Learning</h5>
                  <p className="card-text">Points Earned: 90/100</p>
                  <p className="card-text">Completed on : 25/05/2020</p>
                  <a href="#" className="btn btn-primary">Go to Course</a>
                </div>
              </div>
          </div>
      </div>
      <hr/>
      <br/>
      <div>
          <h3>On Going Courses</h3>
          <br/>
          <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXfRJCQuqc6Flpm8E2FfEmPznwOCItg-rAkA&usqp=CAU" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Machine Learning</h5>
                  <p className="card-text">Finish Before : 25/08/2020</p>
                  <a href="#" className="btn btn-primary">Go to Course</a>
                </div>
              </div>
              <div className="col-12 col-md m-1">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXfRJCQuqc6Flpm8E2FfEmPznwOCItg-rAkA&usqp=CAU" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Machine Learning</h5>
                  <p className="card-text">Finish Before : 25/08/2020</p>
                  <a href="#" className="btn btn-primary">Go to Course</a>
                </div>
              </div>
              <div className="col-12 col-md m-1">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXfRJCQuqc6Flpm8E2FfEmPznwOCItg-rAkA&usqp=CAU" alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Machine Learning</h5>
                  <p className="card-text">Finish Before : 25/08/2020</p>
                  <a href="#" className="btn btn-primary">Go to Course</a>
                </div>
              </div>
          </div>
      </div>
      <hr/>
      <br/>
      <div style={{marginBottom:'5rem'}}>
          <h3>To Do</h3>
          <br/>
          <ul>
            <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a href="#" style={{textDecoration:'underline', marginLeft:'0.5rem'}}>Finish now</a>
            </li>
            <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a href="#" style={{textDecoration:'underline', marginLeft:'0.5rem'}}>Finish now</a>
            </li>
            <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a href="#" style={{textDecoration:'underline', marginLeft:'0.5rem'}}>Finish now</a>
            </li>
            <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <a href="#" style={{textDecoration:'underline', marginLeft:'0.5rem'}}>Finish now</a>
            </li>
          </ul>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  
)(Dashboard);
