import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class DashboardAdmin extends Component {


  render() {
    const { admin } = this.props.auth;

    return (
      <div className="container">
      <div style={{justifyContent:'center',marginTop:'2rem',marginBottom:'2rem'}}>
      <h2>Welcome back {admin.name}!</h2>
      <p>List of users enrolled in our programs:</p>
      </div>
      
      </div>
    );
  }
}

DashboardAdmin.propTypes = {
  logoutAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  
)(DashboardAdmin);
