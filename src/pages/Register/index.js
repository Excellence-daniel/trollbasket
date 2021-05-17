import React, { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
const { REACT_APP_SERVER_URL } = process.env

export const Register = (props) => {
  const [user, setuser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phonenumber: '',
    confirmpassword: '',
  })

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e
    setuser({ ...user, [name]: value })
  }

  const validateBody = (user) => {
    for (const key in user) {
      if (!user[key]) {
        props.enqueueSnackbar(`Please fill in the value for ${key}`, {
          variant: 'warning',
        })
        return false
      }
    }
    return true
  }

  const register = async () => {
    const valid = validateBody(user)
    if (valid) {
      try {
        const url = `${REACT_APP_SERVER_URL}/users/create`
        const response = await axios.post(url, { name: 'Methh' })
        console.log({ response })
      } catch (error) {
        console.log({ error })
      }
    }
  }

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
                    <input
                      className="form-control"
                      name="firstname"
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
                    <input
                      className="form-control"
                      name="password"
                      onChange={handleChange}
                    />
                  </p>
                  <p className="col-6">
                    <label>Confirm Password</label>
                    <input
                      className="form-control"
                      name="confirmpassword"
                      onChange={handleChange}
                    />
                  </p>
                </div>
                <div className="row">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
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
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Yes, I want to receive notifications concerning updates on
                      Troll Basket
                    </label>
                  </div>
                  <button className="signup-button" onClick={() => register()}>
                    Create Account
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
