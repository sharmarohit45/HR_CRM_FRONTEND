import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminCreateTicketForm from './AdminCreateTicketForm';
import AdminAddTicketForm from './AdminAddTicketForm';
const AdminTicketSection = () => {
    const [rows, setRows] = useState();
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-head-box">
                            <h3>Ticket</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Dashboard</li>
                                    <li className="breadcrumb-item active" aria-current="page">Ticket</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ fontSize: 'smaller' }}>
                    <div className="col">
                        <Link to="">
                            <div className="card">
                                <div className="row">
                                    <div className="col-sm-8 col-md-8 p-3">
                                        <h6 className='text-dark'><b>Total Tickets</b></h6>
                                        <p>11</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4 pt-4 text-center">
                                        <i className='fa fa-ticket-alt' style={{ fontSize: '25px', color: 'gray' }} ></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="">
                            <div className="card">
                                <div className="row">
                                    <div className="col-sm-8 col-md-8 p-3">
                                        <h6 className='text-dark'><b>Closed Tickets</b></h6>
                                        <p>11</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4 pt-4 text-center">
                                        <i className='fa fa-ticket-alt' style={{ fontSize: '25px', color: 'gray' }} ></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="">
                            <div className="card">
                                <div className="row">
                                    <div className="col-sm-8 col-md-8 p-3">
                                        <h6 className='text-dark'><b>Open Tickets</b></h6>
                                        <p>11</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4 pt-4 text-center">
                                        <i className='fa fa-ticket-alt' style={{ fontSize: '25px', color: 'gray' }} ></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="">
                            <div className="card">
                                <div className="row">
                                    <div className="col-sm-8 col-md-8 p-3">
                                        <h6 className='text-dark'><b>Pending Tickets</b></h6>
                                        <p>11</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4 pt-4 text-center">
                                        <i className='fa fa-ticket-alt' style={{ fontSize: '25px', color: 'gray' }} ></i>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className="col">
                        <Link to="">
                            <div className="card">
                                <div className="row fs-6">
                                    <div className="col-sm-8 col-md-8 p-3">
                                        <h6 className='text-dark'><b>Resolved Tickets</b></h6>
                                        <p>11</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4 pt-4 text-center">
                                        <i className='fa fa-ticket-alt' style={{ fontSize: '25px', color: 'gray' }} ></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="" className="btn btn-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa fa-plus"></i> Create Ticket</Link> &nbsp;
                        <Link to="" className="btn btn-white" data-bs-toggle="offcanvas" data-bs-target="#TicketForm" aria-controls="offcanvasRight"><i className="fa fa-pen"></i> Ticket Form</Link>
                    </div>

                </div>
                <div className="row mt-3">
                    <div className="col-sm-12">
                        <div className="card" style={{ minHeight: '520px' }}>
                            <DataGrid
                                columns={[
                                    { field: 'ticket', headerName: 'Ticket', hideable: false, width: 185 },
                                    { field: 'ticketSubject', headerName: 'Ticket Subject', hideable: true, width: 170 },
                                    { field: 'requesterName', headerName: 'Requester Name', hideable: true, width: 175 },
                                    { field: 'requestedOn', headerName: 'Requested On', hideable: true, width: 155 },
                                    { field: 'others', headerName: 'Others', hideable: true, width: 155 },
                                    {
                                        field: 'status', headerName: 'Status', hideable: true, width: 155, renderCell: (params) => (
                                            <div>
                                                <select name="" id="" className="form-select">
                                                    <option value="">Open</option>
                                                    <option value="">Resolved</option>
                                                    <option value="">Pending</option>
                                                    <option value="">Closed</option>
                                                </select>
                                            </div>
                                        )
                                    },
                                    {
                                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                            <div>
                                                <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true" />
                                                <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                    <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                                    <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                </ul>
                                            </div>
                                        )
                                    },
                                ]}
                                rows={''}
                                components={{
                                    Toolbar: GridToolbar,
                                }}
                                checkboxSelection
                            />
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                    <div className="offcanvas-header">
                        <h2 id="offcanvasRightLabel" className='text-bold'><b>Create Ticket</b></h2>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <AdminCreateTicketForm />
                    </div>
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="TicketForm" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                    <div className="offcanvas-header">
                        <h2 id="offcanvasRightLabel" className='text-bold'><b>Ticket Form</b></h2>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="card">
                            <AdminAddTicketForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminTicketSection