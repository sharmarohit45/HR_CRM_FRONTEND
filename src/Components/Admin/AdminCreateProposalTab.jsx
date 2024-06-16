import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminCreateProposalForm from './AdminCreateProposalForm';
const AdminCreateProposalTab = () => {
    const [rows, setRows] = useState([]);
    return (
        <>
            <div className="row pb-4">
                <div className="col-sm-4">
                    <button type="button" className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
                        <i className='fa fa-plus f-s'></i> Create Proposal
                    </button>
                </div>
                <div className="col-sm-8"></div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card text-dark" style={{ minHeight: '520px' }}>
                        <DataGrid
                            columns={[
                                { field: 'id', headerName: 'Id', hideable: false, width: 150 },
                                { field: 'proposal', headerName: 'Proposal', hideable: true, width: 150 },
                                { field: 'deals', headerName: 'Deals', hideable: true, width: 130 },
                                { field: 'contactName', headerName: 'Contact Name', hideable: true, width: 130 },
                                { field: 'total', headerName: 'Total', hideable: true, width: 130 },
                                { field: 'date', headerName: 'Date', hideable: true, width: 130 },
                                { field: 'validTill', headerName: 'Valid Till', hideable: true, width: 130 },
                                { field: 'status', headerName: 'Status', hideable: true, width: 130 },
                                {
                                    field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                        <div>
                                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-link"></i> Public link</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-download"></i> Download</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-send-o"></i> Send</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-plus"></i> create invoice</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    )
                                },
                            ]}
                            rows={rows}
                            slots={{
                                toolbar: GridToolbar,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                <div className="offcanvas-header">
                    <h2 id="offcanvasRightLabel" className='text-bold'><b>Create Proposal</b></h2>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <AdminCreateProposalForm />
                </div>
            </div>
        </>
    )
}

export default AdminCreateProposalTab