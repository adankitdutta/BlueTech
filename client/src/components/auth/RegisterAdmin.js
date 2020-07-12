import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerAdmin } from "../../actions/authActions";
import classnames from "classnames";

class RegisterAdmin extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboardAdmin");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newAdmin = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerAdmin(newAdmin, this.props.history);
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
          <h1 className="h2 mb-3 font-weight-bold">Please Register Here as Admin</h1>
              <p style={{color:'grey'}}>
                Already have an admin account? <Link to="/LoginAdmin">Log in as Admin</Link>
             </p>
            
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  autoComplete='off'
                  className={classnames("form-control", {
                    invalid: errors.name
                  })}
                />
                <span className="text-danger">{errors.name}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("form-control", {
                    invalid: errors.email
                  })}
                />
                <span className="text-danger">{errors.email}</span>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("form-control", {
                    invalid: errors.password
                  })}
                />
                <span className="text-danger">{errors.password}</span>
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("form-control", {
                    invalid: errors.password2
                  })}
                />
                <span className="text-danger">{errors.password2}</span>
              </div>
              
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register
              </button>
              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

RegisterAdmin.propTypes = {
  registerAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerAdmin }
)(withRouter(RegisterAdmin));
