import React, { useEffect, useState } from 'react';
import { Link, useNavigate , Outlet } from 'react-router-dom';
import axios from 'axios';
function EmployeeHome() {
	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('email');
	}
	const navigate = useNavigate();
	const email = localStorage.getItem('email');
	const [user, setUser] = useState({});
	const [imageUrl, setImageUrl] = useState(null);
	// const profileOnchange = (email) => {
	//   navigate('/admin/employee-profile/:empId', { state: { email: email } });
	// };
	async function getData() {
	  try {
		const response = await axios.get('http://localhost:8080/allEmployee', {
		  headers: {
			'Content-Type': 'application/json',
		  },
		});
  
		if (!response.data) {
		  throw new Error('Failed to fetch data');
		}
  
		const item = response.data.find((item) => item.email === email);
  
		if (item) {
		  setUser(item);
		  if (item.imageData) {
			if (item.imageData.startsWith('data:image')) {
			  setImageUrl(item.imageData);
			}
		  }
		   else {
			console.error('No imageData found');
		  }
		} else {
		  navigate('/');
		}
	  } catch (error) {
		console.error('Error fetching data:', error);
	  }
	}
  
	useEffect(() => {
	  if (!email) {
		navigate('/');
	  } else {
		getData();
	  }
	}, [email, navigate]);
	return (

		<>
			<div className="main-wrapper">
				<div className="header">
					<div className="header-left">
						<Link href="/employee" className="logo">
							<img src="/assets/img/logo.png" width="40" height="40" alt="" />
						</Link>
					</div>

					<div className="header-center">
						<h1>Smarthr</h1>
					</div>
					<a id="toggle_btn" href="">
						<span className="bar-icon">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</a>
					<a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars"></i></a>
					<ul className="nav user-menu">
						<li className="nav-item dropdown">
							<a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
								<i className="far fa-bell"></i> <span className="badge rounded-pill">3</span>
							</a>
							<div className="dropdown-menu notifications">
								<div className="topnav-dropdown-header">
									<span className="notification-title">Notifications</span>
									<a href="" className="clear-noti"> Clear All </a>
								</div>
								<div className="noti-content">
									<ul className="notification-list">
										<li className="notification-message">
											<a href="activities">
												<div className="media d-flex">
													<span className="avatar flex-shrink-0">
														<img alt="" src="/assets/img/profiles/avatar-02.jpg" />
													</span>
													<div className="media-body flex-grow-1">
														<p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
														<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="activities">
												<div className="media d-flex">
													<span className="avatar flex-shrink-0">
														<img alt="" src="/assets/img/profiles/avatar-03.jpg" />
													</span>
													<div className="media-body flex-grow-1">
														<p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
														<p className="noti-time"><span className="notification-time">6 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="activities">
												<div className="media d-flex">
													<span className="avatar flex-shrink-0">
														<img alt="" src="/assets/img/profiles/avatar-06.jpg" />
													</span>
													<div className="media-body flex-grow-1">
														<p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
														<p className="noti-time"><span className="notification-time">8 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="activities">
												<div className="media d-flex">
													<span className="avatar flex-shrink-0">
														<img alt="" src="/assets/img/profiles/avatar-17.jpg" />
													</span>
													<div className="media-body flex-grow-1">
														<p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
														<p className="noti-time"><span className="notification-time">12 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="activities">
												<div className="media d-flex">
													<span className="avatar flex-shrink-0">
														<img alt="" src="/assets/img/profiles/avatar-13.jpg" />
													</span>
													<div className="media-body flex-grow-1">
														<p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
														<p className="noti-time"><span className="notification-time">2 days ago</span></p>
													</div>
												</div>
											</a>
										</li>
									</ul>
								</div>
								<div className="topnav-dropdown-footer">
									<a href="activities">View all Notifications</a>
								</div>
							</div>
						</li>


						<li className="nav-item dropdown has-arrow main-drop">
							<a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
								<span className="user-img"><img src={`data:image/png;base64,${user.imageData}`} style={{borderRadius:'50%'}} alt="" /></span>
								<span>{user.empName}</span>
							</a>
							<div className="dropdown-menu">
								<Link className="dropdown-item" to="/employee/profile">My Profile</Link>
								<Link className="dropdown-item" to="/employee/settings">Settings</Link>
								<Link className="dropdown-item"  onClick={handleLogout} to="/" >Log Out</Link>
							</div>
						</li>
					</ul>

					<div className="dropdown mobile-user-menu">
						<a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
						<div className="dropdown-menu dropdown-menu-right">
							<a className="dropdown-item" href="profile">My Profile</a>
							<a className="dropdown-item" href="settings">Settings</a>
							<a className="dropdown-item" href="index">Logout</a>
						</div>
					</div>


				</div>

				<div className="sidebar" id="sidebar">
					<div className="sidebar-left slimscroll">
						<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
							<a className="nav-link active" id="v-pills-dashboard-tab" data-bs-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">
								<span className="material-icons-outlined">
									home
								</span>
							</a>
							<a className="nav-link" id="v-pills-leads-tab" title="Leads" data-bs-toggle="pill" href="#v-pills-leads" role="tab" aria-controls="v-pills-leads" aria-selected="false">
								<span className="material-icons-outlined">
									leaderboard
								</span>
							</a>
							<a className="nav-link" id="v-pills-employees-tab" title="Employees" data-bs-toggle="pill" href="#v-pills-employees" role="tab" aria-controls="v-pills-employees" aria-selected="false">
								<span className="material-icons-outlined">
									people
								</span>
							</a>
							<a className="nav-link" id="v-pills-jobs-tab" title="Jobs" data-bs-toggle="pill" href="#v-pills-jobs" role="tab" aria-controls="v-pills-jobs" aria-selected="false">
								<span className="material-icons-outlined">
									work_outline
								</span>
							</a>
							<a className="nav-link" id="v-pills-payroll-tab" title="Payroll" data-bs-toggle="pill" href="#v-pills-payroll" role="tab" aria-controls="v-pills-payroll" aria-selected="false">
								<span className="material-icons-outlined">
									request_quote
								</span>
							</a>
							<a className="nav-link" id="v-pills-tickets-tab" title="Tickets" data-bs-toggle="pill" href="#v-pills-tickets" role="tab" aria-controls="v-pills-tickets" aria-selected="false">
								<span className="material-icons-outlined">
									confirmation_number
								</span>
							</a>
							<a className="nav-link" id="v-pills-events-tab" title="Events" data-bs-toggle="pill" href="#v-pills-events" role="tab" aria-controls="v-pills-events" aria-selected="false">
								<span className="material-icons-outlined">
									calendar_today
								</span>
							</a>
							<a className="nav-link" id="v-pills-chat-tab" title="Chat" data-bs-toggle="pill" href="#v-pills-chat" role="tab" aria-controls="v-pills-chat" aria-selected="false">
								<span className="material-icons-outlined">
									chat
								</span>
							</a>
							<a className="nav-link" id="v-pills-noticeboard-tab" title="Notice Board" data-bs-toggle="pill" href="#v-pills-noticeboard" role="tab" aria-controls="v-pills-noticeboard" aria-selected="false">
								<span className="material-icons-outlined">
									content_paste
								</span>
							</a>
							<a className="nav-link" id="v-pills-authentication-tab" title="Authentication" data-bs-toggle="pill" href="#v-pills-authentication" role="tab" aria-controls="v-pills-authentication" aria-selected="false">
								<span className="material-icons-outlined">
									perm_contact_calendar
								</span>
							</a>
							<a className="nav-link" id="v-pills-settings-tab" title="Settings" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
								<span className="material-icons-outlined">
									settings
								</span>
							</a>
						</div>
					</div>

					<div className="sidebar-right">
						<div className="tab-content" id="v-pills-tabContent">
							<div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
								<p>Dashboard</p>
								<ul>
									<li>
										<Link to="/employee" className="active">Dashboard</Link>
									</li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-leads" role="tabpanel" aria-labelledby="v-pills-leads-tab">
								<p>Leads</p>
								<ul>
									<li><Link to="/employee/lead-contacts">Leads Contact</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-employees" role="tabpanel" aria-labelledby="v-pills-employees-tab">
								<p>Hr</p>
								<ul>
									<li><Link to="/employee/leaves">Leaves </Link></li>
									<li><Link to="/employee/attendance">Attendance</Link></li>
									<li><Link to="/employee/holiday">Holiday</Link></li>
									<li><Link to="/employee/appreciation">Appreciation</Link></li>

								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-jobs" role="tabpanel" aria-labelledby="v-pills-jobs-tab">
								<p>Work</p>
								<ul>
									<li><Link to="/employee/projects">Projects</Link></li>
									<li><Link to="/employee/tasks">Tasks</Link></li>
									<li><Link to="/employee/timesheet">TimeSheet</Link></li>
									<li><Link to="/employee/project-roadmap">Project Roadmap</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-payroll" role="tabpanel" aria-labelledby="v-pills-payroll-tab">
								<p>Finance</p>
								<ul>
									<li><Link to="/employee/expenses">Expenses</Link></li>
								</ul>
							</div>

							<div className="tab-pane fade" id="v-pills-tickets" role="tabpanel" aria-labelledby="v-pills-tickets-tab">
								<p>Tickets</p>
								<ul>
									<li><Link to="/employee/tickets">Tickets</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-events" role="tabpanel" aria-labelledby="v-pills-events-tab">
								<p>Events</p>
								<ul>
									<li><Link to="/employee/events">Events</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-chat" role="tabpanel" aria-labelledby="v-pills-chat-tab">
								<p>Messages</p>
								<ul>
									<li><Link to="/employee/messages">Messages</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-noticeboard" role="tabpanel" aria-labelledby="v-pills-noticeboard-tab">
								<p>Notice Board</p>
								<ul>
									<li><Link to="/employee/notice-board"> Notice Board </Link></li>

								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-authentication" role="tabpanel" aria-labelledby="v-pills-authentication-tab">
								<p>Recruit</p>
								<ul>
									<li><Link to="/employee/carrer-sites"> Career Sites</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
								<p>Settings</p>
								<ul>
									<li><Link to="/employee/settings"> Settings </Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<Outlet />
			</div>

		</>

	)
}

export default EmployeeHome