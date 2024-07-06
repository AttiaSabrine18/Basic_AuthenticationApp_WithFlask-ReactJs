import React from 'react'
import {Link} from 'react-router-dom'
import './stylingPages.css'
const LandingPage = () => {
  return (
    <div>
                <h1 style={{"marginBottom":"12%"}}>Login / Registre Application with Flask & React </h1>

                <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="d-flex gap-4">
              <Link to="/register" className='btn btn-success btn-lg'>Register</Link>
              <Link to="/login" className='btn btn-success btn-lg'>Login</Link>
            </div>
          </div>
        </div>
      </div>
            </div>
  )
}

export default LandingPage