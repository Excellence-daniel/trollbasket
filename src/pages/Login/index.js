import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import selectors from '../Register/redux/selectors'
import { loginUser } from '../Register/redux/action'
import { validateObjectBody } from '../../utils'

const Login = (props) => {
  const [user, setuser] = useState({ email: '', password: '' })
  const [rememberme, setrememberme] = useState(false)
  const [hasUser, sethasUser] = useState(false)

  useEffect(() => {
    props.errorMessage &&
      props.enqueueSnackbar(props.errorMessage, { variant: 'error' })
    // eslint-disable-next-line
  }, [props.errorMessage])

  useEffect(() => {
    Object.keys(props.user).length && sethasUser(true)
    // eslint-disable-next-line
  }, [props.user && props.loading])

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e
    setuser({ ...user, [name]: value })
  }

  const login = () => {
    const valid = validateObjectBody(user, props)
    if (valid) {
      props.loginUser(user)
      if (rememberme) {
        localStorage.setItem('rememberMe', true)
        localStorage.setItem('loginEmail', user.email)
      }
    }
  }

  if (hasUser) return <Redirect to="/shop" />

  return (
    <div className="login-page-00">
      <div className="container-fluid">
        <div className="row">
          <div className="col-7 pic-col"></div>
          <div className="col-5">
            <h3 className="logo-text">
              <Link to="/">Troll Basket</Link>
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
                  <input
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <label>Password</label>
                  <input
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                  />
                </p>
                <p className="reset-password">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={rememberme}
                      id="flexCheckDefault"
                      onClick={() => setrememberme(!rememberme)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember Me
                    </label>
                  </div>
                  <Link to="#">Forgot Password ?</Link>
                </p>
                <button className="login-button" onClick={() => login()}>
                  Sign In
                </button>
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

const mapToDispatchProps = { loginUser }

export default connect(selectors, mapToDispatchProps)(Login)
