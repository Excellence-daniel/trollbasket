import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="login-page-00">
      <div className="container-fluid">
        <div className="row">
          <div className="col-7 pic-col"></div>
          <div className="col-5">
            <h3 className="logo-text">
              <Link to="/">Troll Basket</Link>{' '}
            </h3>
            <div className="login-form">
              <h4>Login</h4>
              <h5>Login to your account</h5>
              <p className="small">
                Thank you for coming back to TrollBasket. Let us begin shopping.
              </p>
              <div className="form">
                <p>
                  <label>Email</label>
                  <input className="form-control" />
                </p>
                <p>
                  <label>Password</label>
                  <input className="form-control" />
                </p>
                <p className="reset-password">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Remember Me
                    </label>
                  </div>
                  <Link>Forgot Password ?</Link>
                </p>
                <button className="login-button">Sign In</button>
                <p className="dont-have-an-account">
                  Don't have an account?{' '}
                  <Link to="/register">Join Troll Basket!</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
