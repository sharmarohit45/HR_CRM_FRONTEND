import React from 'react'

const AdminProfileDashboard = () => {
  return (
    <>
    <div className="page-wrapper">
			
            {/* <!-- Page Content --> */}
            <div className="content container-fluid pb-0">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-head-box">
                            <h3>Dashboard</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Employee Dashboard</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xl-3 d-flex">
                        <div className="card user-card flex-fill">
                            <div className="user-img-sec">
                                <img src="assets/img/profiles/avatar-02.jpg" alt="User Image" />
                                <h4>John Doe</h4>
                                <h5>Sr.UI / UX Designer</h5>

                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4>Joining Date <span>20 May 2020</span></h4>
                                <h4>Experience <span>20 years</span></h4>
                                <h4>Employee Number <span>645658</span></h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-8 col-xl-6 d-flex">
                        <div className="card project-card flex-fill">
                            <h4><i className="fas fa-cube"></i> Projects</h4>
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center">
                                    <div id="radialBarChart"></div>
                                </div>

                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <div className="task-box color-one">
                                                <div className="task-media">
                                                    <div className="task-icon">
                                                        <img src="assets/img/icons/icon-01.png" alt="Icons" />
                                                    </div>
                                                    <div className="task-info">
                                                        <h5>Pending Tasks</h5>
                                                        <h2>55</h2>
                                                    </div>
                                                </div>
                                                
                                                <div className="task-redirect">
                                                    <div className="redirect-icon">
                                                        <i className="fas fa-long-arrow-alt-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <div className="task-box color-two">
                                                <div className="task-media">
                                                    <div className="task-icon">
                                                        <img src="assets/img/icons/icon-02.png" alt="Icons" />
                                                    </div>
                                                    <div className="task-info">
                                                        <h5>Completed Tasks</h5>
                                                        <h2>55</h2>
                                                    </div>
                                                </div>
                                                
                                                <div className="task-redirect">
                                                    <div className="redirect-icon">
                                                        <i className="fas fa-long-arrow-alt-right"></i>
                                                    </div>									
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="task-box color-three">
                                                <div className="task-media">
                                                    <div className="task-icon">
                                                        <img src="assets/img/icons/icon-03.png" alt="Icons" />
                                                    </div>
                                                    <div className="task-info">
                                                        <h5>Total Projects</h5>
                                                        <h2>55</h2>
                                                    </div>
                                                </div>
                                                
                                                <div className="task-redirect">
                                                    <div className="redirect-icon">
                                                        <i className="fas fa-long-arrow-alt-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-4 col-xl-3 d-flex">
                        <div className="card project-card flex-fill">
                            <h4><i className="fab fa-dropbox"></i> Recent Projects</h4>
                            <div className="row">
                                <div className="col-md-12 first-box">
                                    <div className="recent-project-box">
                                        <div className="circle">
                                            <i className="far fa-image"></i>
                                        </div>
                                        <h3>DreamsHRMS</h3>
                                    </div>

                                    <div className="task-progress">
                                        <h4>Task Done 50/96</h4>
                                        <div className="progress">
                                            <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div className="task-avatar mt-2">
                                        <div className="avatar-group">
                                            <div className="avatar">
                                                <img className="avatar-img rounded-circle border border-white" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
                                            </div>
                                            <div className="avatar">
                                                <img className="avatar-img rounded-circle border border-white" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
                                            </div>
                                            <div className="avatar">
                                                <img className="avatar-img rounded-circle border border-white" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
                                            </div>
                                        </div>
                                        <a href="#">View More</a>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="recent-project-box">
                                        <div className="circle">
                                            <i className="far fa-image"></i>
                                        </div>
                                        <h3>Booking template</h3>
                                    </div>

                                    <div className="task-progress">
                                        <h4>Task Done 50/96</h4>
                                        <div className="progress">
                                            <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div className="task-avatar mt-2">
                                        <div className="avatar-group">
                                            <div className="avatar">
                                                <img className="avatar-img rounded-circle border border-white" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
                                            </div>
                                            <div className="avatar">
                                                <img className="avatar-img rounded-circle border border-white" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
                                            </div>
                                            <div className="avatar">
                                                <img className="avatar-img rounded-circle border border-white" alt="User Image" src="assets/img/profiles/avatar-02.jpg" />
                                            </div>
                                        </div>
                                        <a href="#">View More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-4 d-flex">
                        <div className="card att-card flex-fill">
                            <div className="card-header">
                                <h3><i className="fas fa-user-clock"></i> Attendance</h3>
                                <h4>10:40 AM  Jan 2 2021</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Add a note" />
                                            <button className="btn btn-outline-secondary" type="button">Check in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-4 d-flex">
                        <div className="card att-card flex-fill">
                            <div className="card-header">
                                <h3><i className="fas fa-user-times"></i> Your Leave</h3>
                                <a href="#">Apply Leave</a>
                            </div>
                            <div className="card-body leave-ln">
                                <ul>
                                    <li>
                                        <h3>25</h3>
                                        <h4>Total Leaves</h4>
                                    </li>
                                    <li>
                                        <h3>5</h3>
                                        <h4>Remaining Leaves</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-4 d-flex">
                        <div className="card att-card flex-fill">
                            <div className="card-header">
                                <h3><i className="fas fa-clock"></i> Time of allowance</h3>
                                <a href="#">Apply Time off</a>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <h3>5.0 Hours</h3>
                                        <h4>APPROVED</h4>
                                    </li>
                                    <li>
                                        <h3>3 hours</h3>
                                        <h4>REMAINING</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xl-5 d-flex">
                        <div className="card att-card flex-fill">
                            <div className="card-header">
                                <h3><i className="fas fa-calendar-alt"></i> Schedule</h3>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                          <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Today</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                          <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tomorow</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                          <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Next 7 Days</a>
                                    </li>
                                </ul>
                                  
                            </div>
                            <div className="card-body pt-0 pb-0">
                                <div className="tab-content p-0" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <ul className="leave-list">
                                            <li>
                                                <img src="assets/img/profiles/avatar-02.jpg" alt="User" />
                                                <p>Richard Miles is off sick today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-02.jpg" alt="User" />
                                                <p>You are away today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-02.jpg" alt="User" />
                                                <p>You are working from home today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-02.jpg" alt="User" />
                                                <p>Richard Miles is off sick today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-02.jpg" alt="User" />
                                                <p>You are away today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-02.jpg" alt="User" />
                                                <p>You are working from home today</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <ul className="leave-list">
                                            <li>
                                                <img src="assets/img/profiles/avatar-03.jpg" alt="User" />
                                                <p>Richard Miles is off sick today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-03.jpg" alt="User" />
                                                <p>You are away today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-03.jpg" alt="User" />
                                                <p>You are working from home today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-03.jpg" alt="User" />
                                                <p>Richard Miles is off sick today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-03.jpg" alt="User" />
                                                <p>You are away today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-03.jpg" alt="User" />
                                                <p>You are working from home today</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <ul className="leave-list">
                                            <li>
                                                <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                                <p>Richard Miles is off sick today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                                <p>You are away today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                                <p>You are working from home today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                                <p>Richard Miles is off sick today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                                <p>You are away today</p>
                                            </li>
                                            <li>
                                                <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                                <p>You are working from home today</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-xl-3 d-flex">
                        <div className="card att-card flex-fill">
                            <div className="card-header">
                                <h3><i className="fas fa-birthday-cake"></i> Birthdays</h3>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0 pb-0">
                                <ul className="leave-list bday-list">
                                    <li>
                                        <div className="wish-info">
                                            <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                            <p>Joh Doe</p>
                                        </div>
                                        <a href="#" className="wish-btn">Wish Now</a>
                                    </li>
                                    <li>
                                        <div className="wish-info">
                                            <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                            <p>Nick Harry</p>
                                        </div>
                                        <a href="#">Jan 20</a>
                                    </li>
                                    <li>
                                        <div className="wish-info">
                                            <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                            <p>Juliene</p>
                                        </div>
                                        <a href="#">Jan 20</a>
                                    </li>
                                    <li>
                                        <div className="wish-info">
                                            <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                            <p>Richard</p>
                                        </div>
                                        <a href="#">Jan 20</a>
                                    </li>
                                    <li>
                                        <div className="wish-info">
                                            <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                            <p>Harry Len</p>
                                        </div>
                                        <a href="#">Jan 20</a>
                                    </li>
                                    <li>
                                        <div className="wish-info">
                                            <img src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                            <p>Ken Druv</p>
                                        </div>
                                        <a href="#">Jan 20</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
                        <div className="card uh-card flex-fill">
                            <div className="card att-card h-set-card">
                                <div className="card-header">
                                    <h3><i className="fas fa-home"></i> Upcoming Holidays</h3>
                                </div>
                                <div className="card-body pt-0 pb-0">
                                    <ul className="leave-list upcoming-list">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="circle">
                                                    <i className="far fa-image"></i>
                                                </div>
                                                <h3>DreamsHRMS</h3>
                                            </div>
                                            <h6>Jan 20</h6>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="circle">
                                                    <i className="far fa-image"></i>
                                                </div>
                                                <h3>DreamsHRMS</h3>
                                            </div>
                                            <h6>Jan 20</h6>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="circle">
                                                    <i className="far fa-image"></i>
                                                </div>
                                                <h3>DreamsHRMS</h3>
                                            </div>
                                            <h6>Jan 20</h6>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="circle">
                                                    <i className="far fa-image"></i>
                                                </div>
                                                <h3>DreamsHRMS</h3>
                                            </div>
                                            <h6>Jan 20</h6>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="circle">
                                                    <i className="far fa-image"></i>
                                                </div>
                                                <h3>DreamsHRMS</h3>
                                            </div>
                                            <h6>Jan 20</h6>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="circle">
                                                    <i className="far fa-image"></i>
                                                </div>
                                                <h3>DreamsHRMS</h3>
                                            </div>
                                            <h6>Jan 20</h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="btn-emp-sec">
                                <a href="#" className="btn-emp c1"><i className="far fa-folder-open"></i>
                                    File Manager</a>
                                <a href="#" className="btn-emp c2"><i className="far fa-handshake"></i> Meetings</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            {/* <!-- Page Content --> */}
        </div>
        {/* <!-- Page Wrapper --> */}
    </>
  )
}

export default AdminProfileDashboard