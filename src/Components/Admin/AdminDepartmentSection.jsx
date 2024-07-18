import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddDepartments from './AdminAddDepartments';
import axios from 'axios';


const AdminDepartmentSection = () => {
    const [departments, setDepartments] = useState([]);


    useEffect(() => {
        
        fetchDepartment();
    }, []);
    async function fetchDepartment() {
        try {
            const response = await axios.get("http://localhost:8080/departments");
            setDepartments(response.data);
        } catch (error) {
            console.error("Failed to fetch designations:", error);
        }
    }
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0"> 
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Departments</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Departments</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="row mb-3">
                            <div className="col">
                                <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Department</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                            // { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'departmentName', headerName: 'Name', hideable: false, width: 400 },
                                            {
                                                field: 'departmentParent', headerName: 'Parent Department', hideable: false, width: 500
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 150, renderCell: (params) => (
                                                    <div>
                                                        <MoreVertIcon className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                            <li data-bs-toggle="modal" data-bs-target="#viewModal"><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                        </ul>
                                                    </div>
                                                )
                                            },
                                        ]}
                                         rows={departments.map(departments => ({
                                                     id: departments.departmentId,
                                                     departmentName: departments.departmentName,
                                                     departmentParent: departments.departmentParent,
                                                  action: departments.action
                                              }))
                                         }
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
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Department</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                               <AdminAddDepartments onAddDepartment={fetchDepartment}/>
                            </div>
                        </div>
                        <div className="modal fade" id="viewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Department Details</h1>
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
                                    <table style={{ border: 'none' }} className='table table-stripped'>
                                        <tr>
                                            <th>Name</th>
                                            <td>--</td>
                                        </tr>
                                        <tr>
                                            <th>Parent</th>
                                            <td>--</td>
                                        </tr>
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
            </div>
        </>
    )
}

export default AdminDepartmentSection