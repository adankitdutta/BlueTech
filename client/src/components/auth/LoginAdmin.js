import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginAdmin } from "../../actions/authActions";
import classnames from "classnames";

class LoginAdmin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and admin navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboardAdmin");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboardAdmin");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const adminData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginAdmin(adminData);
  };

  render() {
    const { errors } = this.state;

    return (

      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
          <Link to="/" style={{fontSize:'1.2rem'}}>
              <i className="material-icons left">←</i> Back to
              home
         </Link>
          <h1 className="h2 mb-3 font-weight-bold">Please sign in as Admin</h1>
              <p style={{color:'grey'}}>
                Don't have an admin account? <Link to="/registerAdmin">Register as Admin</Link>
             </p>
            <form noValidate onSubmit={this.onSubmit}>
              
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  placeholder="Enter your email"
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("form-control", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                 />
                 
                 <span className="text-danger">
                   {errors.email}
                {errors.emailnotfound}
              </span>
              </div>
              <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                  className={classnames("form-control", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <span className="text-danger">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

LoginAdmin.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginAdmin }
)(LoginAdmin);
