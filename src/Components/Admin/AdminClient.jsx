import React, { useEffect, useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddClient from './AdminAddClient';
import axios from 'axios';

function AdminClient() {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/allclient");

            if (!response.data) {
                throw new Error('Failed to fetch data');
            }

            setRows(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const profileOnchange = (clientId) => {
        navigate(`/admin/client-profile/${clientId}`);
    };

    return (
        <div className="page-wrapper">
            <div className="content container-fluid pb-0">
                {/* Page Header */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-head-box">
                            <h3>Clients</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Dashboard</li>
                                    <li className="breadcrumb-item active" aria-current="page">Clients</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}
                <div className="row mb-3">
                    <div className="row mb-3">
                        <div className="col-8">
                            <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add Client</button>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <div className="btn-group">
                                {/* <Link to="" className="btn btn-white active" aria-current="page"><ListIcon /></Link> */}
                                {/* <Link to="" className="btn btn-white" aria-current="page"><PersonAddAltIcon /></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card" style={{ minHeight: '490px' }}>
                                <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'ID', width: 100 },
                                        { field: 'name', headerName: 'Client Name', width: 250, renderCell: (params) => (
                                            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => profileOnchange(params.row.id)}>
                                                <img src={`data:image/png;base64,${params.row.imageProfileData}`} alt={params.row.name} style={{ height: '30px', width: '30px', marginRight: '10px', borderRadius: '50%' }} />
                                                {params.row.name}
                                            </div>
                                        ) },
                                        { field: 'email', headerName: 'Email', width: 290 },
                                        { field: 'status', headerName: 'Status', width: 150, renderCell: (params) => (
                                            <h5 className='p-3'><i className='fa fa-circle' style={{ color: '#39e500' }}></i> Active</h5>
                                        ) },
                                        { field: 'created', headerName: 'Created', width: 150 },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div> <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                    <li><a className="dropdown-item" onClick={() => profileOnchange(params.row.empId)}><i className="fa fa-eye"></i> View</a></li>
                                                    <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                    <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                </ul></div>
                                            )
                                        },
                                    ]}
                                    rows={rows.map(row => ({
                                        id: row.clientId,
                                        name: row.clientName,
                                        email: row.email,
                                        status: row.status,
                                        created: row.created,
                                        action: row.action,
                                        imageProfileData: row.imageProfileData // Assuming this field exists in your data
                                    }))}
                                    components={{
                                        Toolbar: GridToolbar,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Client</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminAddClient />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminClient;
