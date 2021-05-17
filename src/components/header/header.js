import React from 'react'
// import Bunny from '../../assets/svgs/easter-bunny.svg'
import './index.scss'
import AppleIcon from '@material-ui/icons/Apple'
import AndroidIcon from '@material-ui/icons/Android'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="header-component">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Link to="/">
              <h3 className="logo-text"> Troll Basket </h3>
              {/* <img
                src={Bunny}
                className="img-fluid logo-bunny"
                alt="logo here"
              /> */}
            </Link>
          </div>
          <div className="col-6">
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
              <li>FAQ</li>
              <li>
                <Link to="/register">
                  <button className="sign-up-button">Sign Up/ Login</button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <div className="app-download-background">
              <AppleIcon className="app-icon" />
              <AndroidIcon className="app-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
