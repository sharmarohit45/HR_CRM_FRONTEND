import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddTaskForm from './AdminAddTaskForm';
const AdminProjectRoadmapSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Project Roadmap</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Project Roadmap</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    {/* Page Content */}
                    <div className="row mb-3">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                             { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'code', headerName: 'Code', hideable: true, width: 155 },
                                            {
                                                field: 'projectName', headerName: 'Project Name', hideable: true, width: 155
                                            },
                                            {
                                                field: 'members', headerName: 'Members', hideable: true, width: 155
                                            },
                                           
                                            {
                                                field: 'startDate', headerName: 'Start Date', hideable: true, width: 155
                                            },
                                            {
                                                field: 'deadline', headerName: 'Deadline', hideable: true, width: 155
                                            },
                                            {
                                                field: 'client', headerName: 'Client', hideable: true, width: 155
                                            },
                                            {
                                                field: 'progress', headerName: 'Progress', hideable: true, width: 155
                                            },
                                            {
                                                field: 'status', headerName: 'Status', hideable: true, width: 155
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true" />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                        </ul>
                                                    </div>
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
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Tasks</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <AdminAddTaskForm />
                            </div>
                        </div>
                    </div>
                    {/*End Page Content*/}
                </div>
            </div>
        </>
    )
}

export default AdminProjectRoadmapSection