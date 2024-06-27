import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddProjectForm from './AdminAddProjectForm';

const AdminProjectsSection = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading state

    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/getallProject");
            setRows(response.data);
            setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false); // Ensure loading is set to false on error
            // Handle error state or show a message to the user
        }
    }

    useEffect(() => {
        getData();
    }, []); // Run once on component mount

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Projects</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Projects</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Page Header */}

                    <div className="row mb-3">
                        <div className="row mb-3">
                            <div className="col">
                                <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <i className='fa fa-plus'></i> Add Projects
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '600px' }}>
                                    <DataGrid
                                        columns={[
                                            { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'code', headerName: 'Project Code', hideable: false, width: 150 },
                                            { field: 'projectName', headerName: 'Project Name', hideable: false, width: 150 },
                                            {
                                                field: 'members',
                                                headerName: 'Members',
                                                hideable: false,
                                                width: 200,
                                                renderCell: (params) => (
                                                    <>
                                                        {params.value && params.value.map((imageData, index) => (
                                                            <img
                                                                key={index}
                                                                src={`data:image/png;base64,${imageData}`}
                                                                alt={`Member ${index + 1}`}
                                                                style={{ height: '30px', width: '30px', marginRight: '10px', borderRadius: '50%' }}
                                                            />
                                                        ))}
                                                    </>
                                                )
                                            },
                                            { field: 'startDate', headerName: 'Start Date', hideable: false, width: 150 },
                                            { field: 'deadline', headerName: 'Deadline', hideable: false, width: 150 },
                                            { field: 'client', headerName: 'Client', hideable: false, width: 150 },
                                            {
                                                field: 'status', headerName: 'Status', hideable: false, width: 150, renderCell: (params) => (
                                                    <select className="form-select mt-2" aria-label="status">
                                                        <option value="in progress">in progress</option>
                                                        <option value="not started">not started</option>
                                                        <option value="on hold">on hold</option>
                                                        <option value="canceled">canceled</option>
                                                        <option value="finished">finished</option>
                                                    </select>
                                                )
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 190, renderCell: (params) => (
                                                    <div>
                                                        <MoreVertIcon style={{ fontSize: '20px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                            <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-copy"></i> Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-project-diagram"></i> Gant Chart</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-share-square"></i> Public Gant Chart</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-share-square"></i> Public Task Board</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-archive"></i> Archive</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                        </ul>
                                                    </div>
                                                )
                                            },
                                        ]}
                                        rows={rows}
                                        loading={loading} // Show loading indicator while fetching data
                                        slots={{
                                            toolbar: GridToolbar,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Offcanvas for adding projects */}
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                            <div className="offcanvas-header">
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Projects</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <AdminAddProjectForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminProjectsSection;
