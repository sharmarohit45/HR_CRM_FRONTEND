import React from 'react'

const AdminProfileSetting = () => {
  return (
    <div className="row">
      <div className="card">
        <div className="col">
          <div className="card tab-box mt-3">
            <div className="row user-tabs">
              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                  <li className="nav-item"><a href="#Profile" data-bs-toggle="tab" className="nav-link active">Profile</a></li>
                  <li className="nav-item"><a href="#Emergency_Contacts" data-bs-toggle="tab" className="nav-link">Emergency Contacts</a></li>
                  <li className="nav-item"><a href="#Documents" data-bs-toggle="tab" className="nav-link">Documents</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            {/* <!-- Profile Info Tab --> */}
            <div id="Profile" className="pro-overview tab-pane fade show active">

            </div>
            {/* <!-- /Profile Info Tab --> */}

            {/* <!-- Projects Tab --> */}
            <div className="tab-pane fade" id="Emergency_Contacts">
              <div className="row">
                <h1>LEAVE DATA</h1>
              </div>
            </div>
            {/* <!-- /Projects Tab --> */}

            {/* <!-- Bank Statutory Tab --> */}
            <div className="tab-pane fade" id="Documents">
              <h1>Leave Quota</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfileSetting