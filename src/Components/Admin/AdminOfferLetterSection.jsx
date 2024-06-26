import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import AdminOfferLetterForm from './AdminOfferLetterForm';

const AdminOfferLetterSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Offer Letter</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Offer Letter</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-sm-4">
                            <button type="button" className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus f-s'></i> Add Offer Letter</button>
                        </div>
                        <div className="col-sm-8"></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '590px' }}>
                                <DataGrid
                                    columns={[
                                        // { field: 'id', headerName: 'Id', hideable: false, width: 150 },
                                        { field: 'code', headerName: 'Code', hideable: true, width: 250 },
                                        { field: 'task', headerName: 'Task', hideable: true, width: 230 },
                                        { field: 'project', headerName: 'Project', hideable: true, width: 230 },
                                        { field: 'dueDate', headerName: 'Due Date', hideable: true, width: 230 },
                                        { field: 'assignedTo', headerName: 'Assigned To', hideable: true, width: 130 },
                                        { field: 'status', headerName: 'Status', hideable: true, width: 130 },
                                    ]}
                                    // rows={rows}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Offer Letter</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminOfferLetterForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminOfferLetterSection