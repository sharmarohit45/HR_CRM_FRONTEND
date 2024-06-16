import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import PushPinIcon from '@mui/icons-material/PushPin';
import ListIcon from '@mui/icons-material/List';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function ClientProjects() {
  const [rows, setRows] = useState();
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* <!-- Page Header --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="page-head-box">
                <h3>Projects</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active" aria-current="page">Projects</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}
          <div className="row d-flex justify-content-end">
            <div className="col-2 p-2">
              <div className="btn-group">
                <Link to="/client/client-project" className=" btn btn-white active " aria-current="page"><ListIcon /></Link>
                <Link to="/client/client-project-calender" className=" btn btn-white"><CalendarTodayIcon /></Link>
                <Link to="/client/client-project" className=" btn btn-white p-2"><PushPinIcon /></Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <DataGrid
                columns={[
                  // { field: 'id', headerName: 'id', hideable: true, width: 100 },
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
                    field: 'status', headerName: 'Status', hideable: true, width: 155
                  },
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

export default ClientProjects