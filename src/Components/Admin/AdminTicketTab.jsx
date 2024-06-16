import React from 'react'
import { Link } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ConfirmationNumberSharpIcon from '@mui/icons-material/ConfirmationNumberSharp';
function AdminTicketTab() {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Ticket Dashboard</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Ticket Dashboard</li>
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
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/hr-tab">HR</Link>
                                                </li>
                                                <li className="nav-item" style={{borderBottom:'2px solid orange'}}>
                                                    <Link className="nav-link active" to="/admin/ticket-tab">Ticket</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/finance-tab" >Finance</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Tickets</b></h4>
                                            <p>0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <ConfirmationNumberSharpIcon style={{ fontSize: '35px', color: 'gray' }} />
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
                                            <h4 className='text-dark'><b>Total Unassigned Ticket </b></h4>
                                            <p>0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <ConfirmationNumberSharpIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="">
                                <div className="card" style={{height:'350px'}}>
                                    <div className="row">
                                        <div className="col-sm-12 p-3">
                                            <h4 className='text-dark'><b>Type Wise Ticket</b></h4>
                                           
                                        </div>
                                        
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                            <div className="card" style={{height:'350px'}}>
                                    <div className="row">
                                        <div className="col-sm-12 p-3">
                                            <h4 className='text-dark'><b>Status Wise Ticket</b></h4>
                                           
                                        </div>
                                        
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="">
                                <div className="card" style={{height:'350px'}}>
                                    <div className="row">
                                        <div className="col-sm-12 p-3">
                                            <h4 className='text-dark'><b>Channel Wise Ticket</b></h4>
                                           
                                        </div>
                                        
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                            <div className="card" style={{height:'350px'}}>
                                    <div className="row">
                                        <div className="col-sm-12 p-3">
                                            <h4 className='text-dark'><b>Open Tickets</b></h4>
                                           
                                        </div>
                                        
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
                {/* <!-- /Page Content --> */}
            </div>
        </>
    )
}

export default AdminTicketTab