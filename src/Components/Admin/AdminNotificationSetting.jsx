import React from 'react'

const AdminNotificationSetting = () => {
  return (
    <>
     <div className="row">
      <div className="card">
        <div className="col">
          <div className="card tab-box mt-3">
            <div className="row user-tabs">
              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                  <li className="nav-item"><a href="#Email" data-bs-toggle="tab" className="nav-link active">Email</a></li>
                  <li className="nav-item"><a href="#Slack" data-bs-toggle="tab" className="nav-link">Slack</a></li>
                  <li className="nav-item"><a href="#PushNotification" data-bs-toggle="tab" className="nav-link">Push Notification</a></li>
                  <li className="nav-item"><a href="#Pusher" data-bs-toggle="tab" className="nav-link">Pusher</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            {/* <!-- Email Info Tab --> */}
            <div id="Email" className="pro-overview tab-pane fade show active">

            </div>
            {/* <!-- /Email Info Tab --> */}

            {/* <!-- Projects Tab --> */}
            <div className="tab-pane fade" id="Slack">
              <div className="row">
                <h1>LEAVE DATA</h1>
              </div>
            </div>
            {/* <!-- /Projects Tab --> */}

            {/* <!-- Bank Statutory Tab --> */}
            <div className="tab-pane fade" id="PushNotification">
              <h1>Leave Quota</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminNotificationSetting