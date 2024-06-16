import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminCreateEstimateForm from './AdminCreateEstimateForm';
import { Link } from 'react-router-dom';
const AdminEstimatesSection = () => {
    const [rows, setRows] = useState([]);
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Estimates</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Estimates</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-sm-4">
                            <button type="button" className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
                                <i className='fa fa-plus f-s'></i> Create Estimate
                            </button>
                        </div>
                        <div className="col-sm-8">
                            <button type="button" className='btn btn-white'>
                                <Link to="/admin/estimates-invoice"><i className='fa fa-eye'></i></Link>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '520px' }}>
                                <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'Id', hideable: false, width: 150 },
                                        { field: 'estimate', headerName: 'Estimate', hideable: true, width: 250 },
                                        { field: 'client', headerName: 'Client', hideable: true, width: 130 },
                                        { field: 'total', headerName: 'Total', hideable: true, width: 130 },
                                        { field: 'validTill', headerName: 'Valid Till', hideable: true, width: 130 },
                                        { field: 'created', headerName: 'Created', hideable: true, width: 130 },
                                        { field: 'status', headerName: 'Status', hideable: true, width: 130 },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-copy"></i> Copy Public link</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-external-link-alt"></i> View Public link</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-send"></i> send</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-plus"></i> Create Invoice</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-close"></i> Cancel Invoice</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-download"></i> Download</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-trash" ></i> Delete</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-copy"></i> Create Duplicate</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    rows={rows}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Create Estimate</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminCreateEstimateForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminEstimatesSection