import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const EmployeeProjectRoadmapSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Project Roadmap</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Project Roadmap</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card" style={{ minHeight: '520px' }}>
                                <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                        { field: 'code', headerName: 'Code', hideable: false, width: 155 },
                                        {
                                            field: 'projectname', headerName: 'Project Name', hideable: false, width: 155
                                        },
                                        {
                                            field: 'members', headerName: 'Members', hideable: false, width: 155
                                        },
                                        {
                                            field: 'startDate', headerName: 'Start Date', hideable: false, width: 155
                                        },
                                        {
                                            field: 'deadline', headerName: 'Deadline', hideable: false, width: 155
                                        },
                                        {
                                            field: 'progress', headerName: 'Progress', hideable: false, width: 155
                                        },
                                        {
                                            field: 'status', headerName: 'Status', hideable: false, width: 155
                                        },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <button type='button' className="btn btn-white"><i className='fa fa-eye'></i>
                                                </button>
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
                </div>
            </div>
        </>
    )
}

export default EmployeeProjectRoadmapSection