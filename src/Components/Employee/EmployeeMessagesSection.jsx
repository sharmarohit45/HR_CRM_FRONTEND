import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeMessagesSection = () => {
  return (
    <>
    <div className="page-wrapper">
        <div className="content container-fluid pb-0">
            {/* <!-- Page Header --> */}
            <div className="row">
                <div className="col-md-12">
                    <div className="page-head-box">
                        <h3>Messages</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Messages</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- /Page Header --> */}
            {/* Page Content */}

            {/*End Page Content*/}
        </div>
    </div>
    </>
  )
}

export default EmployeeMessagesSection