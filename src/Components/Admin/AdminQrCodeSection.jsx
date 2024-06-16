import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddTaskForm from './AdminAddTaskForm';
import AdminAddQrCode from './AdminAddQrCode';
const AdminQrCodeSection = () => {
  return (
    <>
    <div className="page-wrapper">
        <div className="content container-fluid pb-0">
            
            <div className="row">
                <div className="col-md-12">
                    <div className="page-head-box">
                        <h3>Qr Code</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Qr Code</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- /Page Header --> */}
            {/* Page Content */}
            <div className="row mb-3">
                <div className="col">
                    <button type="button" className='btn btn-white'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Create Qr Code</button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card" style={{ minHeight: '520px' }}>
                            <DataGrid
                                columns={[
                            
                                    { field: 'qrcode', headerName: 'Qr Code', hideable: true, width: 155 },
                                    {
                                        field: 'qrTitle', headerName: 'Qr Title', hideable: true, width: 155
                                    },
                                    {
                                        field: 'type', headerName: 'Type', hideable: true, width: 155
                                    },
                                    {
                                        field: 'created', headerName: 'Created', hideable: true, width: 155
                                    },
                                    {
                                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true" />
                                                <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                    <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
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
                              
                            />
                        </div>
                    </div>
                </div>
                </div>
               
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                    <div className="offcanvas-header">
                        <h2 id="offcanvasRightLabel" className='text-bold'><b>Qr Code</b></h2>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <AdminAddQrCode />
                    </div>
                </div>
            </div>
            {/*End Page Content*/}
        </div>
    </div>
</>
  )
}

export default AdminQrCodeSection