import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser ,logoutAdmin } from "../../actions/authActions";

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.logoutAdmin();
  }
  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Admin
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/registerAdmin" className="dropdown-item">
            Register as Admin
          </Link>
          <div className="dropdown-divider"></div>
          <Link to="/loginAdmin" className="dropdown-item">
            Login as Admin
          </Link>
        </div>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
      <img src="logo.jpg" height="30px" alt=""/>

      </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarsExample10"
        >
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.jwtToken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}


Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser,logoutAdmin }
)(Navbar);