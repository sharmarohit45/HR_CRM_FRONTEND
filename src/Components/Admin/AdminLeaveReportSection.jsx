import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const AdminLeaveReportSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Leave Report</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">LEave Report</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '590px',fontSize:'smaller' }}>
                                <DataGrid
                                    columns={[
                                        // { field: 'id', headerName: 'Id', hideable: false, width: 150 },
                                        { field: 'employee', headerName: 'Employee', hideable: true, width: 350 },
                                        { field: 'approves', headerName: 'Approves', hideable: true, width: 350 },
                                        { field: 'pending', headerName: 'Pending', hideable: true, width: 380 },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div>
                                                    <button className='btn btn-white'>View</button>
                                                </div>
                                            )
                                        },
                                    ]}
                                    // rows={rows}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLeaveReportSection