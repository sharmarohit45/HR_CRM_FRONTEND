import React from 'react'
import { Link } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const EmployeeProfileSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Profile</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
                                        <li className="breadcrumb-item active" aria-current="page">Name</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    {/* Page Content */}
                    <div className="card tab-box mt-3">
                        <div className="row user-tabs">
                            <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                                    <li className="nav-item"><a href="#emp_profile" data-bs-toggle="tab" className="nav-link active">Profile</a></li>
                                    <li className="nav-item"><a href="#emp_leaves" data-bs-toggle="tab" className="nav-link">Leaves</a></li>
                                    <li className="nav-item"><a href="#leave_quota" data-bs-toggle="tab" className="nav-link">Leaves Quota</a></li>
                                    <li className="nav-item"><a href="#immegration" data-bs-toggle="tab" className="nav-link">Immegration</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        {/* <!-- Profile Info Tab --> */}
                        <div id="emp_profile" className="pro-overview tab-pane fade show active">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-sm-10">
                                                <div className="row p-3">
                                                    <div className="col-sm-4">
                                                        <div className="profile-img">
                                                            <a href="#"><img alt="" src="https://i.pravatar.cc/300?u=keara45@example.org0" style={{ borderRadius: '15px' }} /></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className='profile-info'>
                                                            <h4><b>Rohit Sharma</b></h4>
                                                            <p>web developer | Trainee Engineer <br />Last logged In: -----------</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card text-center p-3" style={{ fontSize: 'smaller' }}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h5>Reporting To</h5>
                                                <p>--</p>
                                            </div>
                                            <div className="col-sm-6">
                                                <h5>Reporting Team</h5>
                                                <p>--</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="row p-2">
                                            <div className="col">
                                                <h3><b>Profile Info</b></h3>
                                            </div>
                                        </div>
                                        <div className="row  p-3">
                                            <div className="col">
                                                <div className="row">
                                                    <div className="col d-flex justify-content-between">
                                                        <p>EMP ID</p>
                                                        <p>EMP_02</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex justify-content-between">
                                                        <p>Full Name</p>
                                                        <p>jjj</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex justify-content-between">
                                                        <p>Designation</p>
                                                        <p>jjj</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex justify-content-between">
                                                        <p>Department</p>
                                                        <p>jjj</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex justify-content-between">
                                                        <p>Gender</p>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex justify-content-between">
                                                        <p>Work Anniversary</p>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex justify-content-between">
                                                        <p></p>
                                                        <p></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col-sm-6">

                                        </div>
                                        <div className="col-sm-6">

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Profile Info Tab --> */}

                        {/* <!-- Projects Tab --> */}
                        <div className="tab-pane fade" id="emp_leaves">
                            <div className="row">
                                <h1>LEAVE DATA</h1>
                            </div>
                        </div>
                        {/* <!-- /Projects Tab --> */}

                        {/* <!-- Bank Statutory Tab --> */}
                        <div className="tab-pane fade" id="leave_quota">
                            <h1>Leave Quota</h1>
                        </div>
                        {/* <!-- /Bank Statutory Tab --> */}
                        <div className='tab-pane fade' id="immegration">
                            <h1>IMMEGRATION DATA</h1>
                        </div>
                    </div>
                </div>
                {/*End Page Content*/}
            </div>
        </>
    )
}

export default EmployeeProfileSection