import React from 'react'
import './index.scss'
import { Header } from '../../components/header/header'
import Shopper from '../../assets/svgs/shopper.svg'

const LandingPage = () => {
  return (
    <div className="landing-page-00">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="body-text">
              <h2>Each purchase will be made with pleasure!</h2>
              <h6>
                We work with global brands and have created an application for
                you to do your shipping.
              </h6>
              <button className="start-button">Start Now</button>
            </div>
          </div>
          <div className="col-4">
            <img
              src={Shopper}
              alt="lady-svg"
              className="img-fluid shopper-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
