import React from 'react'
import { Link } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupsIcon from '@mui/icons-material/Groups';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import FingerprintSharpIcon from '@mui/icons-material/FingerprintSharp';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
function AdminHrTab() {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>HR Dashboard</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">HR Dashboard</li>
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
                                                <li className="nav-item">
                                                    <Link className="nav-link" aria-current="page" to="/admin">Overview</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/project-tab">Project</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/client-tab">Client</Link>
                                                </li>
                                                <li className="nav-item" style={{borderBottom:'2px solid orange'}}>
                                                    <Link className="nav-link active" to="/admin/hr-tab">HR</Link>
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
                                            <h4 className='text-dark'><b>Leaves Approved </b></h4>
                                            <p>0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <FlightTakeoffIcon style={{ fontSize: '35px', color: 'gray' }} />
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
                                            <h4 className='text-dark'><b>Employees</b></h4>
                                            <p>0</p>
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
                                    <div className="row fs-6">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Employee Exits </b></h4>
                                            <p>0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <ExitToAppIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Today Attendance</b></h4>
                                            <p>0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <EventAvailableSharpIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-4">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Average Attendance</b></h4>
                                            <p>0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <FingerprintSharpIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2"></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Department Wise Employee</b></h4>
                                <div className="row">
                                    {/* DATA Section */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Designation Wise Employee </b></h4>
                                <div className="row">
                                    {/* DATA SECTION */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Gender Wise Employee </b></h4>
                                <div className="row">
                                    {/* DATA Section */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Role Wise Employee</b></h4>
                                <div className="row">
                                    {/* DATA SECTION */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Headcount</b></h4>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Joining Vs Attrition</b></h4>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Leaves Taken</b></h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Birthdays</b></h4>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Late Attendance</b></h4>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default AdminHrTab