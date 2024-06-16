import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminDealsForm from './AdminDealsForm';
import AdminAddLeaveForm from './AdminAddLeaveForm';
function AdminLeaveSection() {
    const [rows, setRows] = useState([]);
    async function getData() {
        try {
            const response = await fetch("http://localhost:8000/leaves", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setRows(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const handleActionClick = (row) => {
        // Implement your action logic here
        console.log(`Button clicked for row with ID: ${row.id}`);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Leaves</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Leaves</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-sm-4">
                            <button type="button" className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus f-s'></i> New Leave</button>
                        </div>
                        <div className="col-sm-8"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card text-dark">
                                <DataGrid
                                    columns={[
                                        // { field: 'id', headerName: 'Id', hideable: false, width: 100 },
                                        { field: 'employee', headerName: 'Employee', hideable: false, width: 100 },
                                        { field: 'leaveDate', headerName: 'Leave Date', hideable: false, width: 130 },
                                        { field: 'leaveDuration', headerName: 'Duration', width: 150 },
                                        { field: 'status', headerName: 'Leave Status', width: 150 },
                                        { field: 'leaveType', headerName: 'Leave Type', width: 150 },
                                        { field: 'paid', headerName: 'Paid', width: 150 },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div > 
                                                    <MoreVertIcon style={{fontSize:'15px'}} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{fontSize:'smaller'}}>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    rows={rows.map(row => ({
                                        id: row.id,
                                        employee: row.employee,
                                        leaveDate: row.leaveDate.startDate,
                                        leaveDuration: row.leaveDuration,
                                        status: row.status,
                                        leaveType: row.leaveType,
                                        paid: row.paid,
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
                    {/* Lead Form Modal */}
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Leave Info</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="card">
                                <AdminAddLeaveForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLeaveSection