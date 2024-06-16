import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmployeeAddProjectForm from './EmployeeAddProjectForm';
const EmployeeProjectsSection = () => {
  return (
    <>
    <div className="page-wrapper">
        <div className="content container-fluid pb-0">
            {/* <!-- Page Header --> */}
            <div className="row">
                <div className="col-md-12">
                    <div className="page-head-box">
                        <h3>Projects</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Projects</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- /Page Header --> */}
            <div className="row mb-3">
                <div className="row mb-3">
                    <div className="col">
                        <button className='btn btn-white'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Projects</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <DataGrid
                                columns={[
                                    { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                    { field: 'shortCode', headerName: 'Short Code', hideable: true, width: 100 },
                                    { field: 'id', headerName: 'id', hideable: true, width: 100 },
                                    { field: 'ProjectName', headerName: 'Project Name', hideable: true, width: 150 },
                                    {
                                        field: 'members', headerName: 'Members', hideable: true, width:150
                                    },
                                    {
                                        field: 'startDate', headerName: 'Start Date', hideable: true, width:150
                                    },
                                    {
                                        field: 'deadline', headerName: 'Deadline', hideable: true, width:150
                                    },
                                    {
                                        field: 'client', headerName: 'Client', hideable: true, width:150
                                    },
                                    {
                                        field: 'status', headerName: 'Status', hideable: true, width:150
                                    },
                                    
                                    {
                                        field: 'action', headerName: 'Action', width: 150, renderCell: (params) => (
                                            <div> <MoreVertIcon className='f-s' /></div>
                                        )
                                    },
                                ]}
                                // rows={rows
                                //          rows.map(row => ({
                                //             id: row.id,
                                //     //     name: row.name,
                                //     //     companyName: row.companyName,
                                //     //     email: row.email,
                                //     //     addedBy: row.addedBy,
                                //     //     savedAt: row.savedAt,
                                //     //     action: row.action
                                //      }))
                                // }
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
                        <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Projects</b></h2>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <EmployeeAddProjectForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default EmployeeProjectsSection