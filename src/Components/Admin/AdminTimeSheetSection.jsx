import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AdminAddTaskForm from './AdminAddTaskForm';
import AdminAddTimeLog from './AdminAddTimeLog';
const AdminTimeSheetSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Timesheet</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Timesheet</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    {/* Page Content */}
                    <div className="row mb-3">
                        <div className="row mb-3">
                            <div className="col">
                                <button className='btn btn-white'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Log Time</button> &nbsp;

                            </div>
                            <div className="col text-end">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-white"><i className='fa fa-list'></i></button>
                                    <button type="button" className="btn btn-white"><CalendarTodayIcon /></button>
                                    <button type="button" className="btn btn-white"><PersonIcon /></button>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                             { field: 'id', headerName: 'Id', hideable: false, width: 100 },
                                            { field: 'code', headerName: 'Code', hideable: false, width: 155 },
                                            {
                                                field: 'task', headerName: 'Task', hideable: false, width: 155
                                            },
                                            {
                                                field: 'employee', headerName: 'Employee', hideable: false, width: 155
                                            },
                                            {
                                                field: 'startTime', headerName: 'Start Time', hideable: false, width: 155
                                            },
                                            {
                                                field: 'endTime', headerName: 'End Time', hideable: false, width: 155
                                            },
                                            {
                                                field: 'totalHours', headerName: 'Total Hours', hideable: false, width: 155
                                            },
                                            {
                                                field: 'earnings', headerName: 'Earnings', hideable: false, width: 155
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
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
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Log Time</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                              <AdminAddTimeLog />
                            </div>
                        </div>
                    </div>
                    {/*End Page Content*/}
                </div>
            </div>
        </>
    )
}

export default AdminTimeSheetSection