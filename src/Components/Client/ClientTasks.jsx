import React from 'react'
import { Link } from 'react-router-dom'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import ListIcon from '@mui/icons-material/List';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function ClientTasks() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* <!-- Page Header --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="page-head-box">
                <h3>Tasks</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active" aria-current="page">Tasks</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}
          <div className="row">
            <div className="row d-flex justify-content-end">
              <div className="col-2 p-2">
                <div className="row">
                  <div className="btn-group">
                    <Link to="/client/Tasks" className="btn btn-white" aria-current="page"><ListIcon /></Link>
                    <Link to="/client/client-task-board" className="btn btn-white" aria-current="page"><ViewKanbanIcon /></Link>
                    <Link to="/client/client-task-calender" className="btn btn-white"><CalendarTodayIcon /></Link>
                    <Link to="/" className="btn btn-white"><i className='fas fa-thumbtack'></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <DataGrid
                columns={[
                  // { field: 'id', headerName: 'id', hideable: true, width: 100 },
                  { field: 'id', headerName: 'id', width: 70 },
                  { field: 'Code', headerName: 'Code', width: 155 },
                  { field: 'ProjectName', headerName: 'Project Name', width: 155 },
                  { field: 'Members', headerName: 'Members', width: 155 },
                  { field: 'Startdate', headerName: 'Start date', width: 155 },
                  { field: 'Deadline', headerName: 'Deadline', width: 155 },
                  { field: 'Status', headerName: 'Status', width: 155 },
                  {
                    field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                      <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true" />
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
      </div>
    </>
  )
}

export default ClientTasks