import React from 'react'
import { Link } from 'react-router-dom'
const EmployeeSecuritySetting = () => {
  return (
    <>
      <div className="col settings-cont">
        <div className="card p-4">
          <h3>Two-Factor Authentication </h3>
          <hr style={{ color: '#FF7849', width: '40%' }} />
          <div className="card">
            <div className="row d-flex align-items-center">
              <div className="col-1">
                <i className="fa fa-envelope p-1" style={{ fontSize: '35px' }}></i></div>
              <div className="col-11">
                <h4><b>Setup Using Email</b></h4>
                <p> Enabling this feature will send code on your email account employee@example.com for log in.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row d-flex align-items-center">
              <div className="col-1 p-3">
                <i className="fab fa-google" style={{ fontSize: '35px' }}></i></div>
              <div className="col-11 p-1">
                <h4><b>Setup Using Google Authenticator</b></h4>
                <p>Use the Authenticator app to get free verification codes, even when your phone is offline. Available for Android and iPhone.</p>
                <button className='btn btn-primary'>Enable</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default EmployeeSecuritySetting