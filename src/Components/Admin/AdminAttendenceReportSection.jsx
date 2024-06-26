import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';

const AdminAttendenceReportSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Attendence Report</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Attendence Report</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '590px' }}>
                                <DataGrid
                                    columns={[
                                        // { field: 'id', headerName: 'Id', hideable: false, width: 50 },
                                        { field: 'employee', headerName: 'Employee', hideable: true, width: 180 },
                                        { field: 'present', headerName: 'Present', hideable: true, width: 190 },
                                        { field: 'absent', headerName: 'Absent', hideable: true, width: 160 },
                                        { field: 'extraWorkingDays', headerName: 'Extra Working Days', hideable: true, width: 160 },
                                        { field: 'hoursClocked', headerName: 'Hours Clocked', hideable: true, width: 160 },
                                        { field: 'daysLate', headerName: 'Days Late', hideable: true, width: 160 },
                                        { field: 'halfDay', headerName: 'Half Day', hideable: true, width: 160 },
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

export default AdminAttendenceReportSection