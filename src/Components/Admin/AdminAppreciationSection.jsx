import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import AdminAddAppereciation from './AdminAddAppereciation';

const AdminAppreciationSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Appreciation</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Appreciation</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="row mb-3">
                            <div className="col">
                                <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Award</button>
                            </div>
                            <div className="col text-end">
                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" className="btn btn-dark"><i className="fa fa-trophy"></i></button>
                                    <button type="button" className="btn btn-white"><Link to='/admin/appreciation-award'><i className="fa fa-award"></i></Link></button>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                            { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'awardId', headerName: 'Award Id', hideable: false, width: 300 },
                                            {
                                                field: 'awardName', headerName: 'Title', hideable: false, width: 300
                                            },
                                            {
                                                field: 'status', headerName: 'Status', hideable: false, width: 300
                                            },

                                            {
                                                field: 'action', headerName: 'Action', width: 150, renderCell: (params) => (
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <button type="button" className="btn btn-outline-primary">View</button>
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
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                            <div className="offcanvas-header">
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Award</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <AdminAddAppereciation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAppreciationSection