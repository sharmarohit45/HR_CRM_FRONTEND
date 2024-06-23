import React from 'react'

const AdminAppSetting = () => {
  return (
    <div className="row">
      <div className="card">
        <div className="col">
          <div className="card tab-box mt-3">
            <div className="row user-tabs">
              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                  <li className="nav-item"><a href="#app_setting" data-bs-toggle="tab" className="nav-link active">App Settings</a></li>
                  <li className="nav-item"><a href="#sign_up_setting" data-bs-toggle="tab" className="nav-link">Client Sign up Settings</a></li>
                  <li className="nav-item"><a href="#file_upload_setting" data-bs-toggle="tab" className="nav-link">File Upload Settings</a></li>
                  <li className="nav-item"><a href="#google_map_setting" data-bs-toggle="tab" className="nav-link">Google Map Settings</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            {/* <!-- Profile Info Tab --> */}
            <div id="app_setting" className="pro-overview tab-pane fade show active">

            </div>
            {/* <!-- /Profile Info Tab --> */}

            {/* <!-- Projects Tab --> */}
            <div className="tab-pane fade" id="sign_up_setting">
              <div className="row">
                <h1>LEAVE DATA</h1>
              </div>
            </div>
            {/* <!-- /Projects Tab --> */}

            {/* <!-- Bank Statutory Tab --> */}
            <div className="tab-pane fade" id="file_upload_setting">
              <h1>Leave Quota</h1>
            </div>
            {/* <!-- /Bank Statutory Tab --> */}
            <div className='tab-pane fade' id="google_map_setting">
              <h1>google_map_setting DATA</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAppSetting