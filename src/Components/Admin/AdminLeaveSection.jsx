import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddLeaveForm from './AdminAddLeaveForm';
import axios from 'axios';

function AdminLeaveSection() {
    const [rows, setRows] = useState([]);
    const [selectedLeave, setSelectedLeave] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/leaves");
            setRows(response.data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching data');
            setLoading(false);
        }
    };

    const fetchLeaveDetails = async (leaveId) => {
        try {
            const response = await axios.get(`http://localhost:8080/leaves/${leaveId}`);
            setSelectedLeave(response.data);
        } catch (error) {
            setError('Error fetching leave details');
        }
    };

    const deleteLeave = async (leaveId) => {
        try {
            await axios.delete(`http://localhost:8080/leaves/${leaveId}`);
            fetchData();
        } catch (error) {
            setError('Error deleting leave');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
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
                        <button type="button" className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <i className='fa fa-plus f-s'></i> New Leave
                        </button>
                    </div>
                    <div className="col-sm-8"></div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card text-dark" style={{ height: '520px' }}>
                            {loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div>{error}</div>
                            ) : (
                                <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'ID', width: 100 },
                                        {
                                            field: 'employee', headerName: 'Employee', width: 290, renderCell: (params) => (
                                                <>
                                                    <img src={`data:image/jpeg;base64,${params.row.imageData}`} alt="Employee" style={{ borderRadius: '15px', height: '40px', width: '40px' }} />
                                                    &nbsp; {params.row.employee}
                                                </>
                                            )
                                        },
                                        { field: 'leaveDate', headerName: 'Leave Date', width: 130 },
                                        { field: 'leaveDuration', headerName: 'Duration', width: 150 },
                                        { field: 'status', headerName: 'Leave Status', width: 150 },
                                        { field: 'leaveType', headerName: 'Leave Type', width: 150 },
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
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}
                                                    >
                                                        <li data-bs-toggle="offcanvas" data-bs-target="#viewDetails" aria-controls="offcanvasRight" onClick={() => fetchLeaveDetails(params.row.id)}><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-check"></i> Approve</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-times"></i> Reject</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-edit"></i> Edit</a></li>
                                                        <li onClick={() => deleteLeave(params.row.id)}><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    rows={rows.map(row => ({
                                        id: row.leaveId,
                                        employee: row.employee.empName,
                                        leaveDate: row.leaveDate,
                                        imageData: row.employee.imageData,
                                        leaveDuration: row.leaveDuration,
                                        status: row.status,
                                        leaveType: row.leaveType,
                                        action: row.action
                                    }))}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {/* Leave Form Modal */}
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
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="viewDetails" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="card p-4">
                            <div className="row">
                                <div className="col">
                                    <h3 id="offcanvasRightLabel" className='text-bold'><b>Leave Details</b></h3>
                                </div>
                                <div className="col text-end">
                                    <i className='fa fa-ellipsis-h pt-2' data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }}></i>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item"><i className='fa fa-check'></i> <b>Approve</b></a></li>
                                        <li><a className="dropdown-item"><i className='fa fa-times'></i> <b>Reject</b></a></li>
                                        <li><a className="dropdown-item"><i className='fa fa-edit'></i>  <b>Edit</b></a></li>
                                        <li data-bs-toggle="modal" data-bs-target="#deletemodal"><a className="dropdown-item"><i className='fa fa-trash'></i> <b>Delete</b></a></li>
                                    </ul>
                                </div>
                            </div><hr />
                            {selectedLeave && (
                                <>
                                    <div className="row">
                                        <div className="col">
                                            <p><b>Applicant Name</b></p>
                                        </div>
                                        <div className="col">
                                            <img src={`data:image/jpeg;base64,${selectedLeave.employee.imageData}`} alt="Employee" style={{ borderRadius: '15px', height: '40px', width: '40px' }} />
                                            &nbsp; {selectedLeave.employee.empName}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <p><b>Leave Date</b></p>
                                        </div>
                                        <div className="col">
                                            {selectedLeave.leaveDate}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <p><b>Leave Type</b></p>
                                        </div>
                                        <div className="col">
                                            {selectedLeave.leaveType}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <p><b>Paid</b></p>
                                        </div>
                                        <div className="col">
                                            {selectedLeave.paid ? 'Yes' : 'No'}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <p><b>Reason For Absence</b></p>
                                        </div>
                                        <div className="col">
                                            {selectedLeave.absenceReason}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <p><b>Status</b></p>
                                        </div>
                                        <div className="col">
                                            {selectedLeave.status}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <p><b>Files</b></p>
                                        </div>
                                        <div className="col">
                                            {selectedLeave.files ? selectedLeave.files.map(file => (
                                                <a href={`data:application/octet-stream;base64,${file.fileData}`} download={file.fileName} key={file.fileName}>{file.fileName}</a>
                                            )) : 'No files'}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are You Sure You Want to Delete
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-danger" onClick={() => deleteLeave(selectedLeave.leaveId)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLeaveSection;
