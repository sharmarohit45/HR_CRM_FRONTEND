import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminAwardForm from './AdminAwardForm';
import UpdateAwardList from './UpdateAwardList';

const AdminAppreciationAwardPage = () => {
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/award");
            setData(response.data);
        } catch (error) {
            console.log("Data fetching failed", error);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    const handleEditClick = (id) => {
        setSelectedId(id);
    };
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/award/${id}`);
            // Refresh data after successful delete
            getData();
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Award</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Appreciation</li>
                                        <li className="breadcrumb-item active" aria-current="page">Award</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="row mb-3">
                            <div className="col">
                                <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#addAward" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Award</button>
                            </div>
                            <div className="col text-end">
                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" className="btn btn-white"><Link to='/admin/appreciation'><i className="fa fa-trophy"></i></Link></button>
                                    <button type="button" className="btn btn-dark"><i className="fa fa-award"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                            { field: 'id', headerName: 'ID', hideable: false, width: 100 },
                                            {
                                                field: 'iconId',
                                                headerName: 'Award Icon',
                                                hideable: false,
                                                width: 300,
                                                renderCell: (params) => (
                                                    <div>
                                                        <i style={{ backgroundColor: params.row.color, fontSize: '18px', padding: '10px', borderRadius: '20%' }} className={params.row.iconId}></i>
                                                    </div>
                                                )
                                            },
                                            { field: 'awardName', headerName: 'Award Name', hideable: false, width: 300 },
                                            {
                                                field: 'status', headerName: 'Status', hideable: false, width: 300
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 150, renderCell: (params) => (
                                                    <div>
                                                        <MoreVertIcon
                                                            style={{ fontSize: '15px' }}
                                                            className="dropdown-toggle"
                                                            role="button"
                                                            id="dropdownMenuLink"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}
                                                        >
                                                            <li><a className="dropdown-item"><i className="fa fa-eye"></i> View</a></li>
                                                            <li onClick={() => handleEditClick(params.row.id)} data-bs-toggle="offcanvas" data-bs-target="#editAward" aria-controls="offcanvasRight"><a className="dropdown-item"><i className="fa fa-edit"></i> Edit</a></li>
                                                            <li onClick={() => handleDelete(params.row.id)}><a className="dropdown-item" ><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                        </ul>
                                                    </div>
                                                )
                                            },
                                        ]}
                                        rows={data.map(row => ({
                                            id: row.awardId,
                                            awardName: row.title,
                                            iconId: row.icon,
                                            status: row.status,
                                            color: row.colorCode,
                                        }))}
                                        slots={{
                                            toolbar: GridToolbar,
                                        }}
                                        checkboxSelection
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="addAward" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                            <div className="offcanvas-header">
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Award</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <AdminAwardForm />
                            </div>
                        </div>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="editAward" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                            <div className="offcanvas-header">
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Update Award</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <UpdateAwardList id={selectedId} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminAppreciationAwardPage;
