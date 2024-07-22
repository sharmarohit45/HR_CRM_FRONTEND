import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAssetsForm from './AdminAssetsForm';
import axios from 'axios';
const AdminAssetsSection = () => {
    const [rows, setRows] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/assets");
            setRows(response.data);
        } catch (error) {
            console.error("Data fetching failed:", error);
        }
    };
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Assets</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Assets</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col">
                            <button type="button" className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
                                <i className='fa fa-plus f-s'></i> Add New Asset
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '520px' }}>
                                <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'Id', hideable: false, width: 50 },
                                        {
                                            field: 'assetPicture', headerName: 'Asset Picture', hideable: true, width: 200, renderCell: (params) => (
                                                <>
                                                    <img
                                                        src={`data:image/png;base64,${params.row.assetPicture}`}
                                                        alt="assets_picture"
                                                        style={{ height: '30px', width: '30px', marginRight: '10px', borderRadius: '50%' }}
                                                    />
                                                </>
                                            )
                                        },
                                        { field: 'assetName', headerName: 'Asset Name', hideable: true, width: 200 },
                                        { field: 'lentTo', headerName: 'Lent To', hideable: true, width: 200 },
                                        { field: 'status', headerName: 'Status', hideable: true, width: 300 },
                                        { field: 'date', headerName: 'Date', hideable: true, width: 130 },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-edit"></i> Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-trash"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    rows={rows.map(row => ({
                                        id: row.assetsId,
                                        assetPicture: row.assetPicture,
                                        assetName: row.assetName,
                                        lentTo: row.lentTo,
                                        status: row.status,
                                        date: row.date,
                                        action: row.action


                                    }))}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Assets</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminAssetsForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAssetsSection