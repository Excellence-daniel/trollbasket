import React, { useState, useEffect } from 'react'
import './index.scss'
import { Link, Redirect } from 'react-router-dom'
import { validateObjectBody } from '../../utils'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { connect } from 'react-redux'
import selectors from './redux/selectors'
import { createUser } from './redux/action'

const Register = (props) => {
  const [user, setuser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phonenumber: '',
    confirmpassword: '',
  })
  const [hasUser, sethasUser] = useState(false)
  const [viewpassword, setviewpassword] = useState(false)
  const [viewcpassword, setviewcpassword] = useState(false)
  const [agreeToTerms, setagreeToTerms] = useState(false)
  const [receivenotification, setreceivenotifications] = useState(false)

  useEffect(() => {
    props.errorMessage &&
      props.enqueueSnackbar(props.errorMessage, { variant: 'error' })
    // eslint-disable-next-line
  }, [props.errorMessage && props.loading])

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

  const validate = () => {
    const valid = validateObjectBody(user, props)
    if (valid) {
      if (user.password !== user.confirmpassword) {
        props.enqueueSnackbar(
          'Password are different. Please confirm the correct password',
          { variant: 'warning' },
        )
        return false
      }

      if (!agreeToTerms) {
        props.enqueueSnackbar('You are yet to agree to terms and conditions', {
          variant: 'warning',
        })
        return false
      }

      return true
    }
  }

  const register = async () => {
    const valid = validate()
    if (valid) {
      props.createUser({
        ...user,
        agreeToTerms,
        receivenotification,
      })
    }
  }

  if (hasUser) return <Redirect to="/shop" />

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

              <div className="form g-3 needs-validation">
                <div className="row">
                  <p className="col-6">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      name="firstname"
                      value={user.firstname}
                      onChange={handleChange}
                    />
                  </p>
                  <p className="col-6">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      name="lastname"
                      onChange={handleChange}
                    />
                  </p>
                </div>
                <div className="row">
                  <p className="col-6">
                    <label>Email</label>
                    <input
                      className="form-control"
                      name="email"
                      onChange={handleChange}
                    />
                  </p>
                  <p className="col-6">
                    <label>Phone Number</label>
                    <input
                      className="form-control"
                      name="phonenumber"
                      onChange={handleChange}
                    />
                  </p>
                </div>
                <div className="row">
                  <p className="col-6">
                    <label>Password</label>
                    <div className="input-group mb-3">
                      <input
                        type={viewpassword ? 'text' : 'password'}
                        className="form-control"
                        name="password"
                        onChange={handleChange}
                      />
                      <span className="input-group-text" id="basic-addon2">
                        {viewpassword ? (
                          <VisibilityOffIcon
                            onClick={() => setviewpassword(false)}
                            className="password-eye"
                          />
                        ) : (
                          <VisibilityIcon
                            onClick={() => setviewpassword(true)}
                            className="password-eye"
                          />
                        )}
                      </span>
                    </div>
                  </p>
                  <p className="col-6">
                    <label>Confirm Password</label>
                    <div className="input-group mb-3">
                      <input
                        type={viewcpassword ? 'text' : 'password'}
                        className="form-control"
                        name="confirmpassword"
                        onChange={handleChange}
                      />
                      <span className="input-group-text" id="basic-addon2">
                        {viewcpassword ? (
                          <VisibilityOffIcon
                            onClick={() => setviewcpassword(false)}
                            className="password-eye"
                          />
                        ) : (
                          <VisibilityIcon
                            onClick={() => setviewcpassword(true)}
                            className="password-eye"
                          />
                        )}
                      </span>
                    </div>
                  </p>
                </div>
                <div className="row">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={agreeToTerms}
                      id="flexCheckDefault"
                      onClick={() => setagreeToTerms(!agreeToTerms)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      You agree with the{' '}
                      <Link to="#">Terms and Conditions</Link>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={receivenotification}
                      id="flexCheckDefault"
                      onClick={() =>
                        setreceivenotifications(!receivenotification)
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Yes, I want to receive notifications concerning updates on
                      Troll Basket
                    </label>
                  </div>
                  <button
                    className="signup-button"
                    onClick={() => register()}
                    disabled={props.loading}
                  >
                    {props.loading ? 'Loading...' : 'Create Account'}
                  </button>
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

const mapToDispatchProps = {
  createUser,
}

export default connect(selectors, mapToDispatchProps)(Register)
