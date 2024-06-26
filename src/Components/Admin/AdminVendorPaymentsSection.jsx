import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminvendorPaymentForm from './AdminvendorPaymentForm';
const AdminVendorPaymentsSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Vendor Payments</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Vendor Payments</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="row pb-4">
                        <div className="col">
                            <button type="button" className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className='fa fa-plus f-s'></i> Add Vendor Payment
                            </button> &nbsp;
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '520px',fontSize:'smaller' }}>
                                <DataGrid
                                    columns={[
                                        //  { field: 'id', headerName: 'Id', hideable: false, width: 100 },
                                        {
                                            field: 'vendorName', headerName: 'Vendor Name', hideable: false, width: 430, renderCell: (params) => (
                                                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} >
                                                </div>
                                            ),
                                        },
                                        { field: 'paidOn', headerName: 'Paid On', hideable: false, width: 300 },
                                        { field: 'amount', headerName: 'Amount', width: 300 },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    // rows={rows.map(row => ({
                                    //     id: row.id,
                                    //     name: row.name,
                                    //     companyName: row.companyName,
                                    //     email: row.email,
                                    //     addedBy: row.addedBy,
                                    //     savedAt: row.savedAt,
                                    //     action: row.action
                                    // }))}
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
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Payment</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminvendorPaymentForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminVendorPaymentsSection