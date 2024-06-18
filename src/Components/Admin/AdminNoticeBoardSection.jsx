import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddNotice from './AdminAddNotice';

const AdminNoticeBoardSection = () => {
    const [rows,setRows]=useState('');
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* Page Header */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Notice Board</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Notice Board</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    {/* Page Content */}
                    <div className="row mb-3">
                        <div className="row mb-3">
                            <div className="col">
                                <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add New Notice</button> &nbsp;
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                            { field: 'notice', headerName: 'Notice', hideable: false, width: 585 },
                                            { field: 'date', headerName: 'Date', hideable: false, width: 155 },
                                            { field: 'to', headerName: 'To', hideable: false, width: 155 },
                                            {
                                                field: 'action', headerName: 'Action', width: 180, renderCell: (params) => (
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
                                        rows={rows}
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
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Add New notice</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <AdminAddNotice />
                            </div>
                        </div>
                    </div>
                    {/* End Page Content */}
                </div>
            </div>
        </>
    );
}

export default AdminNoticeBoardSection;
