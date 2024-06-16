import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
function ClientContracts() {
   const [rows,setRows]=useState();


    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Contracts</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Dashboard</li>
                                        <li className="breadcrumb-item active" aria-current="page">Contracts</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}

                    <div className="row">
                        <div className="col-md-12">
                        <DataGrid
                                        columns={[
                                            { field: 'id', headerName: 'id', width: 70 },
                                            { field: 'Subject', headerName: 'Subject', width: 155 },
                                            { field: 'Project', headerName: 'Project', width: 155 },
                                            { field: 'Amount', headerName: 'Amount', width: 155 },
                                            { field: 'Startdate', headerName: 'Start date', width: 150 },
                                            { field: 'EndDate', headerName: 'End Date', width: 155 },
                                            {
                                                field: 'action', headerName: 'Action', width: 150, renderCell: (params) => (
                                                    <div>
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-check"></i> Company Signature</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-link"></i> Public link</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-download"></i> Download</a></li>
                                                    </ul>
                                                </div>
                                                )
                                            },
                                        ]}
                                         rows={rows
                                        //          rows.map(row => ({
                                        //             id: row.id,
                                        //     //     name: row.name,
                                        //     //     companyName: row.companyName,
                                        //     //     email: row.email,
                                        //     //     addedBy: row.addedBy,
                                        //     //     savedAt: row.savedAt,
                                        //     //     action: row.action
                                        //      }))
                                         }
                                        slots={{
                                            toolbar: GridToolbar,
                                        }}
                                        checkboxSelection
                                    />
                        </div>
                    </div>
                </div>
                {/* <!-- /Page Content --> */}



            </div>
        </>
    )
}

export default ClientContracts