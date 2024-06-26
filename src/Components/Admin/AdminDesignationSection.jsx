import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddDesignations from './AdminAddDesignations';
import axios from 'axios';

const AdminDesignationSection = () => {
    const [designations, setDesignations] = useState([]);
    const [selectedDesignation, setSelectedDesignation] = useState(null);

    useEffect(() => {
        async function fetchDesignations() {
            try {
                const response = await axios.get("http://localhost:8080/designations");
                setDesignations(response.data);
                console.log("Data : ", response.data);
            } catch (error) {
                console.error("Failed to fetch designations:", error);
            }
        }

        fetchDesignations();
    }, []);

    const handleViewClick = (designation) => {
        setSelectedDesignation(designation);
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Designation</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Designation</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Designation</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card" style={{ minHeight: '520px'}}>
                                <DataGrid
                                    columns={[
                                        { field: 'name', headerName: 'Name', width: 450 },
                                        { field: 'parent', headerName: 'Parent Designation', width: 450 },
                                        {
                                            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li onClick={() => handleViewClick(params.row)} data-bs-toggle="modal" data-bs-target="#viewModal"><a className="dropdown-item"><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    rows={designations.map(designation => ({
                                        id: designation.designationId,
                                        name: designation.name,
                                        parent: designation.parent,
                                        action: '', // You can customize action buttons here if needed
                                    }))}
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
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Designations</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminAddDesignations />
                        </div>
                    </div>
                    <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Designation Details</h1>
                                    <div className="dropdown" style={{fontSize:'smaller'}}>
                                        <button className="btn btn-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa fa-ellipsis-h"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                            <li><a className="dropdown-item" href="#">Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="modal-body">
                                    <table style={{ border: 'none' }} className='table table-striped'>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <td>{selectedDesignation ? selectedDesignation.name : '--'}</td>
                                            </tr>
                                            <tr>
                                                <th>Parent</th>
                                                <td>{selectedDesignation ? selectedDesignation.parent : '--'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDesignationSection;
