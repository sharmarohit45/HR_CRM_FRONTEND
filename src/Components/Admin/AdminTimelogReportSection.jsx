import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const AdminTimelogReportSection = () => {
  return (
    <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Timelog Report</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Timelog Report</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '590px' }}>
                                <DataGrid
                                    columns={[
                                        // { field: 'id', headerName: 'Id', hideable: false, width: 150 },
                                        { field: 'code', headerName: 'Code', hideable: true, width: 180 },
                                        { field: 'task', headerName: 'Task', hideable: true, width: 200 },
                                        { field: 'employee', headerName: 'Employee', hideable: true, width: 250 },
                                        { field: 'startTime', headerName: 'Start Time', hideable: true, width: 180 },
                                        { field: 'endTime', headerName: 'End Time', hideable: true, width: 130 },
                                        { field: 'totalTime', headerName: 'Total Time', hideable: true, width: 130 },
                                        { field: 'earning', headerName: 'Earning', hideable: true, width: 130 },
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

export default AdminTimelogReportSection