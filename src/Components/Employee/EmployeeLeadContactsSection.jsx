import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmployeeLeadContactForm from './EmployeeLeadContactForm';
import axios from 'axios';
const EmployeeLeadContactsSection = () => {
    const [rows, setRows] = useState([]);

    async function getdata() {
        try {
            const response = await axios.get("http://localhost:8080/lead");
            setRows(response.data);
        } catch (error) {
            console.log("Data Fecthing Failed", error);
        }

    }
    useEffect(() => {
        getdata();
    }, [])
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Lead Contacts</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Lead Contacts</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    {/* Page Content */}
                    <div className="row mb-3">
                        <div className="row mb-3">
                            <div className="col-8">
                                <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Lead Client</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <DataGrid
                                        columns={[
                                            { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'contactName', headerName: 'Contact Name', hideable: false, width: 190 },
                                            { field: 'companyName', headerName: 'Company Name', width: 190 },
                                            { field: 'email', headerName: 'Email', hideable: false, width: 190 },
                                            { field: 'addedBy', headerName: 'Added By', width: 150 },
                                            { field: 'created', headerName: 'Created', width: 150 },
                                            {
                                                field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                    <div>
                                                    <MoreVertIcon
                                                        style={{ fontSize: '15px' }}
                                                        className="dropdown-toggle"
                                                        role="button"
                                                        id="dropdownMenuLink"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    />
                                                    <ul
                                                        className="dropdown-menu btn"
                                                        aria-labelledby="dropdownMenuLink"
                                                        style={{ fontSize: 'smaller' }}
                                                    >
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-user"></i> Change To Client</a></li>
                                                    </ul>
                                                </div>
                                                )
                                            },
                                        ]}
                                        rows={rows.map(row => ({
                                                 id: row.id,
                                                 contactName: row.name,
                                                 companyName: row.companyName,
                                                 email: row.email,
                                                 addedBy: row.addedBy,
                                                 created: row.savedAt,
                                                 action: row.action
                                             }))
                                        }
                                        slots={{
                                            toolbar: GridToolbar,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                            <div className="offcanvas-header">
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Lead</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <EmployeeLeadContactForm />
                            </div>
                        </div>
                    </div>
                    {/*End Page Content*/}
                </div>
            </div>
        </>
    )
}

export default EmployeeLeadContactsSection