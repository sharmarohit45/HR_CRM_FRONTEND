import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AdminEmployeeForm from './AdminEmployeeForm';
import AdminAddProjectForm from './AdminAddProjectForm';
import AdminAddTaskForm from './AdminAddTaskForm';
import AdminAddClient from './AdminAddClient';
import AdminCreateTicketForm from './AdminCreateTicketForm';
import AdminStickyNotesSection from './AdminStickyNotesSection';

function Admin_Home() {
	const [admin, setAdmin] = useState(null);

	const getAdmin = async () => {
		try {
			const response = await axios.get("http://localhost:8080/admin/data");
			if (!response.data || response.data.length === 0) {
				throw new Error('Failed to fetch data');
			}
			setAdmin(response.data[0]);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	// ADminHOME 

	const handleLogout = () => {
		localStorage.removeItem('token');
	};

	useEffect(() => {
		getAdmin();
	}, []);
	return (
		<>
			<div className="main-wrapper">
				<div className="header">
					<div className="header-left">
						<Link to="/admin" className="logo">
							<img src="/assets/img/side-logo.png" width="40" height="40" alt="" />
						</Link>
					</div>
					<div className="header-center">
						<h1>PSSPLHR</h1>
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
						<li className="nav-item">
							<a href="#" data-bs-toggle="offcanvas" data-bs-target="#StickyNotes" aria-controls="offcanvasRight">
								<i className='fa fa-sticky-note'></i>
							</a>
						</li>
						<li className="nav-item">
							<a href="" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Create New">
								<i className='fa fa-plus-circle' type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
								<ul className="dropdown-menu" style={{ fontSize: 'smaller' }}>
									<li style={{height:'60px'}} data-bs-toggle="offcanvas" data-bs-target="#AddProject" aria-controls="offcanvasRight"><a className="dropdown-item" href="#"><i className='fa fa-plus'></i> Add Project</a></li>
									<li style={{height:'60px'}} data-bs-toggle="offcanvas" data-bs-target="#AddTask" aria-controls="offcanvasRight">   <a className="dropdown-item" href="#"><i className='fa fa-plus'></i> Add Task</a></li>
									<li style={{height:'60px'}} data-bs-toggle="offcanvas" data-bs-target="#AddClient" aria-controls="offcanvasRight">  <a className="dropdown-item" href="#"><i className='fa fa-plus'></i> Add Client</a></li>
									<li style={{height:'60px'}} data-bs-toggle="offcanvas" data-bs-target="#AddEmployee" aria-controls="offcanvasRight"><a className="dropdown-item" href="#"><i className='fa fa-plus'></i> Add Employee</a></li>
									<li style={{height:'60px'}} data-bs-toggle="offcanvas" data-bs-target="#AddPayment" aria-controls="offcanvasRight"><a className="dropdown-item" href="#"><i className='fa fa-plus'></i> Add Payment</a></li>
									<li style={{height:'60px'}} data-bs-toggle="offcanvas" data-bs-target="#AddTicket" aria-controls="offcanvasRight"><a className="dropdown-item" href="#"><i className='fa fa-plus'></i> Create Ticket </a></li>
								</ul>
							</a>
						</li>
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
							<a href="#" >
								<span className="user-img"><img src="/assets/img/profiles/avatar-21.jpg" alt="" /></span>
								<span>{admin ? admin.adminName : 'Admin'}</span>
							</a>
						</li>
						<li className='nav-item text-black'><Link to="/" onClick={handleLogout}><i className="fa fa-power-off"></i></Link></li>
					</ul>
					<div className="dropdown mobile-user-menu">
						
						<Link to="/" onClick={handleLogout}><i className="fa fa-power-off"></i></Link>
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
							<a className="nav-link" id="v-pills-clients-tab" title="Clients" data-bs-toggle="pill" href="#v-pills-clients" role="tab" aria-controls="v-pills-clients" aria-selected="false">
								<span className="material-icons-outlined">
									person
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
							<a className="nav-link" id="v-pills-orders-tab" title="Orders" data-bs-toggle="pill" href="#v-pills-orders" role="tab" aria-controls="v-pills-orders" aria-selected="false">
								<span className="material-icons-outlined">
									shopping_cart
								</span>
							</a>
							<a className="nav-link" id="v-pills-events-tab" title="Events" data-bs-toggle="pill" href="#v-pills-events" role="tab" aria-controls="v-pills-events" aria-selected="false">
								<span className="material-icons-outlined">
									calendar_today
								</span>
							</a>
							{/* 
							
							// */}
							<a className="nav-link" id="v-pills-tickets-tab" title="Events" data-bs-toggle="pill" href="#v-pills-tickets" role="tab" aria-controls="v-pills-events" aria-selected="false">
								<span className="material-icons-outlined">
									confirmation_number
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
							<a className="nav-link" id="v-pills-knowledgebase-tab" title="Knowledgebase" data-bs-toggle="pill" href="#v-pills-knowledgebase" role="tab" aria-controls="v-pills-knowledgebase" aria-selected="false">
								<span className="material-icons-outlined">
									school
								</span>
							</a>
							<a className="nav-link" id="v-pills-television-tab" title="Television" data-bs-toggle="pill" href="#v-pills-television" role="tab" aria-controls="v-pills-television" aria-selected="false">
								<span className="material-icons-outlined">
									tv
								</span>
							</a>
							<a className="nav-link" id="v-pills-mail-tab" title="Mail" data-bs-toggle="pill" href="#v-pills-mail" role="tab" aria-controls="v-pills-mail" aria-selected="false">
								<span className="material-icons-outlined">
									mail
								</span>
							</a>
							<a className="nav-link" id="v-pills-accounting-tab" title="Accounting" data-bs-toggle="pill" href="#v-pills-accounting" role="tab" aria-controls="v-pills-accounting" aria-selected="false">
								<span className="material-icons-outlined">
									account_balance_wallet
								</span>
							</a>
							<a className="nav-link" id="v-pills-user-tab" title="User" data-bs-toggle="pill" href="#v-pills-user" role="tab" aria-controls="v-pills-user" aria-selected="false">
								<span className="material-icons-outlined">
									account_box
								</span>
							</a>
							<a className="nav-link" id="v-pills-qrcode-tab" title="QR Code" data-bs-toggle="pill" href="#v-pills-qrcode" role="tab" aria-controls="v-pills-qrcode" aria-selected="false">
								<span className="material-icons-outlined">
									qr_code
								</span>
							</a>
							<a className="nav-link" id="v-pills-recruitment-tab" title="User Recruitment" data-bs-toggle="pill" href="#v-pills-recruitment" role="tab" aria-controls="v-pills-recruitment" aria-selected="false">
								<span className="material-icons-outlined">
									group_add
								</span>
							</a>
							<a className="nav-link" id="v-pills-video-tab" title="Video" data-bs-toggle="pill" href="#v-pills-video" role="tab" aria-controls="v-pills-video" aria-selected="false">
								<span className="material-icons-outlined">
									videocam
								</span>
							</a>
							<a className="nav-link"
								id="v-pills-knowledgebase-tab-2"
								title="Knowledgebase 2"
								data-bs-toggle="pill"
								href="#v-pills-knowledgebase-2"
								role="tab"
								aria-controls="v-pills-knowledgebase-2"
								aria-selected="false">
								<span className="material-icons-outlined">
									data_usage
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
										<Link to="/admin/private-dashboard">Private Dashboard</Link>
									</li>
									<li>
										<Link to="/admin">Advance Dashboard</Link>
									</li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-leads" role="tabpanel" aria-labelledby="v-pills-leads-tab">
								<p>Leads</p>
								<ul>
									<li><Link to="/admin/lead-contacts">Lead Contacts</Link></li>
									<li><Link to="/admin/deals">Deals</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-clients" role="tabpanel" aria-labelledby="v-pills-clients-tab">
								<p>Clients</p>
								<ul>
									<li><Link to="/admin/clients">Clients</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-employees" role="tabpanel" aria-labelledby="v-pills-employees-tab">
								<p>Hr</p>
								<ul>
									<li><Link to="/admin/employee">Employees</Link></li>
									<li><Link to="/admin/leaves">Leaves </Link></li>
									<li><Link to="/admin/shift-roaster">Shift Roster</Link></li>
									<li><Link to="/admin/attendence">Attendance</Link></li>
									<li><Link to="/admin/holiday">Holiday</Link></li>
									<li><Link to="/admin/designation">Designation</Link></li>
									<li><Link to="/admin/department">Departments</Link></li>
									<li><Link to="/admin/appreciation">Appreciation</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-jobs" role="tabpanel" aria-labelledby="v-pills-jobs-tab">
								<p>Work</p>
								<ul>
									<li><Link to="/admin/contracts">Contracts  </Link></li>
									<li><Link to="/admin/projects"> Projects</Link></li>
									<li><Link to="/admin/tasks"> Tasks </Link></li>
									<li><Link to="/admin/timesheet">TimeSheet </Link></li>
									<li><Link to="/admin/project-roadmap">Project Roadmap </Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-payroll" role="tabpanel" aria-labelledby="v-pills-payroll-tab">
								<p>Finance</p>
								<ul>
									<li><Link to="/admin/proposal"> Proposal </Link></li>
									<li><Link to="/admin/estimates"> Estimates </Link></li>
									<li><Link to="/admin/invoices"> Invoices </Link></li>
									<li><Link to="/admin/payments"> Payments </Link></li>
									<li><Link to="/admin/credit-note"> Credit Note </Link></li>
									<li><Link to="/admin/expenses"> Expenses </Link></li>
									<li><Link to="/admin/bank-account"> Bank Account </Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-orders" role="tabpanel" aria-labelledby="v-pills-orders-tab">
								<p>Orders</p>
								<ul>
									<li><Link to="/admin/orders">Orders</Link></li>

								</ul>
							</div>

							<div className="tab-pane fade" id="v-pills-tickets" role="tabpanel" aria-labelledby="v-pills-tickets-tab">
								<p>Tickets</p>
								<ul>
									<li><Link to="/admin/tickets">Tickets</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-events" role="tabpanel" aria-labelledby="v-pills-events-tab">
								<p>Events</p>
								<ul>
									<li><Link to="/admin/events">Events</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-chat" role="tabpanel" aria-labelledby="v-pills-chat-tab">
								<p>Messages </p>
								<ul>
									<li><Link to="/admin/messages">Messages </Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-noticeboard" role="tabpanel" aria-labelledby="v-pills-noticeboard-tab">
								<p>Notice Board</p>
								<ul>
									<li><Link to="/admin/notice-board">Notice Board</Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-knowledgebase" role="tabpanel" aria-labelledby="v-pills-knowledgebase-tab">
								<p>Knowledge Base</p>
								<ul>
									<li><Link to="/admin/knowledge-base"> Knowledge Base </Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-television" role="tabpanel" aria-labelledby="v-pills-television-tab">
								<p>Assets</p>
								<ul>
									<li><Link to="/admin/assets"> Assets </Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-mail" role="tabpanel" aria-labelledby="v-pills-mail-tab">
								<p>Letter</p>
								<ul>
									<li><Link to="/admin/generate">Generate</Link></li>
									<li><Link to="/admin/template">Template</Link></li>
								</ul>
							</div>

							<div className="tab-pane fade" id="v-pills-accounting" role="tabpanel" aria-labelledby="v-pills-accounting-tab">
								<p>Payroll</p>
								<ul>
									<li><Link to="/admin/payroll"> Payroll </Link></li>
									<li><Link to="/admin/employee-salery"> Employee Salery </Link></li>
									<li><Link to="/admin/payroll-reports"> Reports </Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-user" role="tabpanel" aria-labelledby="v-pills-user-tab">
								<p>Purchase</p>
								<ul>
									<li><Link to="/admin/vendor"> Vendor </Link></li>
									<li><Link to="/admin/products"> Products </Link></li>
									<li><Link to="/admin/purchase-order"> Purchase Order </Link></li>
									<li><Link to="/admin/bills"> Bills </Link></li>
									<li><Link to="/admin/vendor-payments"> Vendor Payments </Link></li>
									<li><Link to="/admin/vendor-credits"> Vendor Credits </Link></li>
									<li><Link to="/admin/inventory"> Inventory </Link></li>
									<li><Link to="/admin/purchase-reports"> Reports </Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-qrcode" role="tabpanel" aria-labelledby="v-pills-qrcode-tab">
								<p>QR Code</p>
								<ul>
									<li><Link to="/admin/Qr-code"> QR Code </Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-recruitment" role="tabpanel" aria-labelledby="v-pills-recruitment-tab">
								<p>Recruit</p>
								<ul>
									<li><Link to="/admin/recruit-dashborad"> Dashboard </Link></li>
									<li><Link to="/admin/skills"> Skills </Link></li>
									<li><Link to="/admin/Jobs"> Jobs </Link></li>
									<li><Link to="/admin/job-application"> Job Application </Link></li>
									<li><Link to="/admin/interview-schedule"> Interview Schedule </Link></li>
									<li><Link to="/admin/offer-letters"> Offer Letters </Link></li>
									<li><Link to="/admin/candidate-databases"> Candidate Databases </Link></li>
									<li><Link to="/admin/reports"> Reports </Link></li>
									<li><Link to="/admin/career-site"> Career Site </Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-video" role="tabpanel" aria-labelledby="v-pills-video-tab">
								<p>Zoom Meeting</p>
								<ul>
									<li><Link to="/admin/zoom-meeting"> Zoom Meeting </Link></li>
								</ul>
							</div>

							<div className="tab-pane fade" id="v-pills-knowledgebase-2" role="tabpanel" aria-labelledby="v-pills-knowledgebase-tab-2">
								<p>Reports</p>
								<ul>
									<li><Link to="/admin/task-report"> Task Report </Link></li>
									<li><Link to="/admin/timelog-Report"> Time log Report </Link></li>
									<li><Link to="/admin/finance-report"> Finance Report </Link></li>
									<li><Link to="/admin/income-expenses"> Income vs Expense </Link></li>
									<li><Link to="/admin/leave-report"> Leave Report </Link></li>
									<li><Link to="/admin/attendence-report"> Attendence Report</Link></li>
									<li><Link to="/admin/expense-report">Expense Report </Link></li>
									<li><Link to="/admin/deal-report"> Deal Report </Link></li>
									<li><Link to="/admin/sales-report"> Sales Report </Link></li>
								</ul>
							</div>
							<div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
								<p>Settings</p>
								<ul>
									<li><Link to="/admin/settings"> Settings </Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="AddProject" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
					<div className="offcanvas-header">
						<h2 id="offcanvasRightLabel" className='text-bold'><b>Add Project</b></h2>
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<AdminAddProjectForm />
					</div>
				</div>
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="AddTask" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
					<div className="offcanvas-header">
						<h2 id="offcanvasRightLabel" className='text-bold'><b>Add Task</b></h2>
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<AdminAddTaskForm />
					</div>
				</div>
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="AddClient" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
					<div className="offcanvas-header">
						<h2 id="offcanvasRightLabel" className='text-bold'><b>Add Client</b></h2>
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<AdminAddClient />
					</div>
				</div>
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="AddEmployee" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
					<div className="offcanvas-header">
						<h2 id="offcanvasRightLabel" className='text-bold'><b>Add Employee</b></h2>
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<AdminEmployeeForm />
					</div>
				</div>
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="AddPayment" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
					<div className="offcanvas-header">
						<h2 id="offcanvasRightLabel" className='text-bold'><b>Add Payment</b></h2>
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						{/* Add PAYMENT */}
					</div>
				</div>
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="AddTicket" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
					<div className="offcanvas-header">
						<h2 id="offcanvasRightLabel" className='text-bold'><b>Add Ticket</b></h2>
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<AdminCreateTicketForm />
					</div>
				</div>
				<div className="offcanvas offcanvas-end" tabIndex="-1" id="StickyNotes" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
					<div className="offcanvas-header">
						<h2 id="offcanvasRightLabel" className='text-bold'><b>Sticky Notes</b></h2>
						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<AdminStickyNotesSection />
					</div>
				</div>
				
				<Outlet />
			</div>
		</>
	)
}

export default Admin_Home