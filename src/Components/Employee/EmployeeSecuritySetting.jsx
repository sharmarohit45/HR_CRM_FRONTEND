import React from 'react'
import { Link } from 'react-router-dom'
const EmployeeSecuritySetting = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid pb-0">
          <div className="row">
            <div className="col-md-12">
              {/*  Page Header  */}
              <div className="row">
                <div className="col-md-12">
                  <div className="page-head-box">
                    <h3>Security Settings</h3>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/settings">Settings</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Security Settings</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              {/*  /Page Header  */}

              <div className="row">
                <div className="col-md-4 col-lg-3">
                  <div className="card settings-menu">
                    <div className="sidebar-menu">
                      <ul>
                        <li className="menu-title">Settings</li>
                        <li >
                          <Link to="/employee/settings"><i className="la la-building"></i> <span>Profile Settings</span></Link></li>
                        <li className="active">
                          <Link to="/employee/security-settings"><i className="la la-clock-o"></i> <span>Security Setting</span></Link></li>


                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-8 col-lg-9 settings-cont">
                  <div className="card p-4">
                    <h3>Two-Factor Authentication </h3>
                    <hr style={{ color: '#FF7849', width: '40%' }} />
                    <div className="card">
                      <div className="row d-flex align-items-center">
                        <div className="col-1">
                          <i className="fa fa-envelope p-1" style={{fontSize:'35px'}}></i></div>
                        <div className="col-11">
                          <h4><b>Setup Using Email</b></h4>
                          <p> Enabling this feature will send code on your email account employee@example.com for log in.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                    <div className="row d-flex align-items-center">
                        <div className="col-1 p-3">
                          <i className="fab fa-google" style={{fontSize:'35px'}}></i></div>
                        <div className="col-11 p-1">
                          <h4><b>Setup Using Google Authenticator</b></h4>
                          <p>Use the Authenticator app to get free verification codes, even when your phone is offline. Available for Android and iPhone.</p>
                           <button className='btn btn-primary'>Enable</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>         </div>
          </div> </div>
      </div>
    </>
  )
}

export default EmployeeSecuritySetting