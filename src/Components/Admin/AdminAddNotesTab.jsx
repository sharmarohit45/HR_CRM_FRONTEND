import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const AdminAddNotesTab = () => {
  return (
    <>
    <div className="row">
        <div className="col">
            <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i className='fa fa-plus'></i> Add Notes
            </button>
        </div>
    </div>
    <div className="row mt-2">
        <div className="col">
            <div className="card" style={{ minHeight: '520px' }}>
                <DataGrid
                    columns={[
                        { field: 'id', headerName: 'id', hideable: false, width: 100 },
                        { field: 'noteTitle', headerName: 'Note Title', hideable: false, width: 390 },
                        { field: 'noteType', headerName: 'Note Type', width: 190 },
                        { field: 'created', headerName: 'Created', hideable: false, width: 290 },
                        {
                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                <div>
                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                        <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                       </ul>
                                </div>
                            )
                        },
                    ]}
                    // rows={rows.map(row => ({
                    //     id: row.dealId,
                    //     dealName: row.dealName,
                    //     leadContacts: data.name,
                    //     email: data.email,
                    //     mobile: data.mobile,
                    //     dealValue: row.dealValue,
                    //     closeDate: row.closeDate,
                    //     nextFollowUp: row.nextFollowUp,
                    //     dealAgent: row.dealAgent,
                    //     dealWatcher: row.dealWatcher,
                    //     dealStages: row.dealStages,
                    //     action: row.action
                    // }))}
                    slots={{
                        toolbar: GridToolbar,
                    }}
                    checkboxSelection
                />
            </div>
        </div>
    </div>
    {/* Lead Form Modal */}
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Note Info</b></h2>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <div className="card">
                {/* <AdminDealsForm /> */}
            </div>
        </div>
    </div>
</>
  )
}

export default AdminAddNotesTab