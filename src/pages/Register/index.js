import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className="register-00">
      <div className="container-fluid">
        <div className="row">
          <div className="col-5 pic-col"></div>
          <div className="col-7">
            <h3 className="logo-text"> Troll Basket </h3>
            <div className="register-form">
              <h4>Register</h4>
              <p className="manage-text">Manage all your order efficiently.</p>
              <span className="small">
                Lets get you all set up so that you can login and begin to shop.
              </span>

              <div className="form">
                <div className="row">
                  <p className="col-6">
                    <label>First Name</label>
                    <input className="form-control" />
                  </p>
                  <p className="col-6">
                    <label>Last Name</label>
                    <input className="form-control" />
                  </p>
                </div>
                <div className="row">
                  <p className="col-6">
                    <label>Email</label>
                    <input className="form-control" />
                  </p>
                  <p className="col-6">
                    <label>Phone Number</label>
                    <input className="form-control" />
                  </p>
                </div>
                <div className="row">
                  <p className="col-6">
                    <label>Password</label>
                    <input className="form-control" />
                  </p>
                  <p className="col-6">
                    <label>Confirm Password</label>
                    <input className="form-control" />
                  </p>
                </div>
                <div className="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      You agree with the{' '}
                      <Link to="#">Terms and Conditions</Link>
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Yes, I want to receive notifications concerning updates on
                      Troll Basket
                    </label>
                  </div>
                  <button className="signup-button">Create Account</button>
                  <p className="have-an-account">
                    Already have an account? <Link to="/login">Log in</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
