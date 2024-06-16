import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
const AdminHolidayList = () => {
  return (
  <>
   <div className="page-wrapper">
        <div className="content container-fluid pb-0">
            
            <div className="row">
                <div className="col-md-12">
                    <div className="page-head-box">
                        <h3>Holiday List View</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Appreciation</li>
                                <li className="breadcrumb-item active" aria-current="page">Holiday List View</li>
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
                    <button className="btn btn-white mb-3"><i className='fa fa-plus'></i> Add Holiday</button> &nbsp;
                        <button className="btn btn-white mb-3"><i className='fa fa-check'></i>  Mark Default Holidays</button>
                    </div>
                    <div className="col text-end">
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-white"><Link to='/admin/holiday'><i className="fa fa-calendar"></i></Link></button>
                            <button type="button" className="btn btn-dark"><i className="fa fa-list"></i></button>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card" style={{ minHeight: '520px' }}>
                            <DataGrid
                                columns={[
                                    { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                    { field: 'date', headerName: 'Date', hideable: false, width: 155 },
                                    {
                                        field: 'occasion', headerName: 'Occasion', hideable: false, width: 155
                                    },
                                    {
                                        field: 'day', headerName: 'Day', hideable: false, width: 155
                                    },
                                    {
                                        field: 'department', headerName: 'Department', hideable: false, width: 155
                                    },
                                    {
                                        field: 'designation', headerName: 'Designation', hideable: false, width: 155
                                    },
                                    {
                                        field: 'employementType', headerName: 'Employement Type', hideable: false, width: 155
                                    },
                                    {
                                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                <button type="button" className="btn btn-outline-primary"><MoreVertIcon /></button>
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
        </div>
    </div>
  </>
  )
}

export default AdminHolidayList