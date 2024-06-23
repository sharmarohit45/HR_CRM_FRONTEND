import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddVendorForm from './AdminAddVendorForm';
const AdminVendorSection = () => {
    const [rows, setRows] = useState([]);
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Vendors</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Vendor</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col">
                            <button type="button" className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
                                <i className='fa fa-plus f-s'></i> Add Vendor
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '520px' }}>
                                <DataGrid
                                    columns={[
                                        // { field: 'id', headerName: 'Id', hideable: false, width: 50 },
                                        { field: 'primaryName', headerName: 'Primary Name', hideable: true, width: 200 },
                                        { field: 'companyName', headerName: 'Company Name', hideable: true, width: 200 },
                                        { field: 'email', headerName: 'Email', hideable: true, width: 300 },
                                        { field: 'phone', headerName: 'Phone', hideable: true, width: 300 },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-edit"></i> Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-trash"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    rows={rows}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Vendor</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                           <AdminAddVendorForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminVendorSection