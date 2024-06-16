import React from 'react'
import { Link } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
function AdminDashboard() {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Dashboard</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    <div className="card">
                        <div className="row">
                            <div className="col">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <div className="container-fluid">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <MoreVertIcon />
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav">
                                                <li className="nav-item" style={{borderBottom:'2px solid orange'}}>
                                                    <Link className="nav-link active" aria-current="page" to="/admin">Overview</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/project-tab">Project</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/client-tab">Client</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/hr-tab">HR</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/ticket-tab">Ticket</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/finance-tab">Finance</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Total Clients</b></h4>
                                            <p>11</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <GroupsIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Total Employees</b></h4>
                                            <p>11</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <PersonIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Total Projects</b></h4>
                                            <p>11</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <LayersIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row fs-6">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Due Invoices</b></h4>
                                            <p>11</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <DescriptionIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Hours Logged</b></h4>
                                            <p>58 Hrs</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <WatchLaterIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Pending Tasks</b></h4>
                                            <p>37</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <FormatListBulletedIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Today Attendence</b></h4>
                                            <p>0/11</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <EventAvailableIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Unresolves Tickets</b></h4>
                                            <p>2</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <ConfirmationNumberIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Income</b></h4>
                                <div className="row">
                                    {/* DATA Section */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>TimeSheet</b></h4>
                                <div className="row">
                                    {/* DATA Section */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Pending Leaves</b></h4>
                                <div className="row">
                                    {/* DATA Section */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Open Tickets</b></h4>
                                <div className="row">
                                    {/* DATA Section */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Pending Tasks</b></h4>
                                <div className="row">
                                    {/* DATA Section */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Pending FollowUp</b></h4>
                                <div className="row">
                                    {/* DATA Section */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Project Activity Timeline</b></h4>
                                <div className="row">
                                    {/* DATA Section */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>User Activity Timeline</b></h4>
                                <div className="row">
                                    {/* DATA Section */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- /Page Content --> */}
            </div>
        </>
    )
}

export default AdminDashboard