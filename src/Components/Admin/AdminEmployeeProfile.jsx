import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AdminEmployeeProfile = () => {
    const [data, setData] = useState(null);
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    const empId = location.state ? location.state.empId : null;
    const visibility = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        if (empId) {
            profileOnchange(empId);
        }
    }, [empId]);

    async function profileOnchange(empId) {
        try {
            const response = await axios.get(`http://localhost:8080/employee/${empId}`);
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="page-wrapper">
            <div className="content container-fluid pb-0">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-head-box">
                            <h3>{data.empName}</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Employees</li>
                                    <li className="breadcrumb-item active" aria-current="page">{data.empName}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="card tab-box mt-3">
                    <div className="row user-tabs">
                        <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                            <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                                <li className="nav-item"><a href="#emp_profile" data-bs-toggle="tab" className="nav-link active">Profile</a></li>
                                <li className="nav-item"><a href="#emp_projects" data-bs-toggle="tab" className="nav-link">Projects</a></li>
                                <li className="nav-item"><a href="#emp_tasks" data-bs-toggle="tab" className="nav-link">Tasks</a></li>
                                <li className="nav-item"><a href="#emp_leaves" data-bs-toggle="tab" className="nav-link">Leaves</a></li>
                                <li className="nav-item"><a href="#leave_quota" data-bs-toggle="tab" className="nav-link">Leaves Quota</a></li>
                                <li className="nav-item"><a href="#timesheet" data-bs-toggle="tab" className="nav-link">Timesheet</a></li>
                                <li className="nav-item"><a href="#documents" data-bs-toggle="tab" className="nav-link">Documents</a></li>
                                <li className="nav-item"><a href="#emergency_contacts" data-bs-toggle="tab" className="nav-link">Emergency Contacts</a></li>
                                <li className="nav-item"><a href="#ticket" data-bs-toggle="tab" className="nav-link">Ticket</a></li>
                                <li className="nav-item"><a href="#appreciation" data-bs-toggle="tab" className="nav-link">Appreciation</a></li>
                                <li className="nav-item"><a href="#shiftroaster" data-bs-toggle="tab" className="nav-link">Shift Roaster</a></li>
                                <li className="nav-item"><a href="#activity" data-bs-toggle="tab" className="nav-link">Activity</a></li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#permissions" data-bs-toggle="tab" className="dropdown-item">Permissions</a></li>
                                        <li><a href="#immigration" data-bs-toggle="tab" className="dropdown-item">Immigration</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="tab-content">
                    <div id="emp_profile" className="pro-overview tab-pane fade show active">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-3" style={{ padding: '18px' }}>
                                                    <div className="profile-img">
                                                        <a href="#"><img src={`data:image/png;base64,${data.imageData}`} style={{ borderRadius: '15px', height: '130px', width: '130px' }} /></a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-9" style={{ fontSize: 'smaller', padding: '4px' }}>
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className='profile-info'>
                                                                <h4><b>{data.empName}</b></h4>
                                                                <p>{data.designation} | {data.department} | User Role : {data.empUserRole}<br /></p>
                                                                <p>Last logged In: -----------</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col">
                                                            <p>Open Tasks</p>
                                                            <b>--</b>
                                                        </div>
                                                        <div className="col">
                                                            <p>Projects</p>
                                                            <b>--</b>
                                                        </div>
                                                        <div className="col">
                                                            <p>Hours Logged</p>
                                                            <b>--</b>
                                                        </div>
                                                        <div className="col">
                                                            <p>Ticket</p>
                                                            <b>--</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card p-3" style={{ fontSize: 'smaller', height: '180px' }}>
                                    <div className="row">
                                        <div className="col">
                                            <h4><b>Appreciation</b></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="card p-3">
                                    <h3><b>About</b></h3>
                                    <p>I am a developer</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center p-3" style={{ fontSize: 'smaller' }}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h5>Reporting To</h5>
                                            <p>{data.reportingTo}</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5>Reporting Team</h5>
                                            <p>{data.reportingTeam}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="card">
                                    <div className="row p-2">
                                        <div className="col">
                                            <h3><b>Profile Info</b></h3>
                                        </div>
                                    </div>
                                    <div className="row  p-3" style={{ fontSize: 'smaller' }}>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>EMP ID</p>
                                                    <p>{data.empId}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Full Name</p>
                                                    <p>{data.empName}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Designation</p>
                                                    <p>{data.designation}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Department</p>
                                                    <p>{data.department}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Gender</p>
                                                    <p>{data.gender}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Work Anniversary</p>
                                                    <p>{data.joiningDate}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Date Of Birth</p>
                                                    <p>{data.dateOfBirth}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Email</p>
                                                    <p>{data.email}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Mobile</p>
                                                    <p>{data.mobileNo}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Slack Member ID</p>
                                                    <p>{data.slack_Member_Id}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Hourly Rate</p>
                                                    <p>{data.hourly_Rate}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Address</p>
                                                    <p>{data.address}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Skills</p>
                                                    <p>{data.skills}</p>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Language</p>
                                                    <p>{data.language}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Probation End Date</p>
                                                    <p>{data.provision_End_Date}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Notice Period End Date</p>
                                                    <p>{data.notice_Period_Date}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Marital Status</p>
                                                    <p>{data.maritial_State}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Marriage Anniversary Date</p>
                                                    <p>--</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Employment Type</p>
                                                    <p>{data.employement_Type}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Joining Date</p>
                                                    <p>{data.joiningDate}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-between">
                                                    <p>Exit Date</p>
                                                    <p> -- </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <h4>Late Attendance</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <h4>Leaves Taken</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="card">
                                            <h4><b>Tasks</b></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="card">
                                            <h4><b>Tickets</b></h4>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="emp_projects">
                        <div className="row">
                            <div className="col">
                                <button type='button' className='btn btn-white mb-2'>Add Project</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                            { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'code', headerName: 'Code', hideable: false, width: 155 },
                                            {
                                                field: 'projectName', headerName: 'Project Name', hideable: false, width: 155
                                            },
                                            {
                                                field: 'members', headerName: 'Members', hideable: false, width: 155
                                            },
                                            {
                                                field: 'startDate', headerName: 'Start Date', hideable: false, width: 155
                                            },
                                            {
                                                field: 'deadline', headerName: 'Deadline', hideable: false, width: 155
                                            },
                                            {
                                                field: 'client', headerName: 'CLient', hideable: false, width: 155
                                            },
                                            {
                                                field: 'status', headerName: 'Status', hideable: false, width: 155
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
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
                                        checkboxSelection
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="emp_tasks">
                        <div className="row">
                            <div className="col">
                                <button type='button' className='btn btn-white mb-2'><i className='fa fa-plus'></i> Add Task</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                            { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'code', headerName: 'Code', hideable: false, width: 155 },
                                            {
                                                field: 'timer', headerName: 'Timer', hideable: false, width: 155
                                            },
                                            {
                                                field: 'task', headerName: 'Task', hideable: false, width: 155
                                            },
                                            {
                                                field: 'completedOn', headerName: 'Completed On', hideable: false, width: 155
                                            },
                                            {
                                                field: 'startDate', headerName: 'Start Date', hideable: false, width: 155
                                            },
                                            {
                                                field: 'dueDate', headerName: 'Due Date', hideable: false, width: 155
                                            },
                                            {
                                                field: 'hoursLogged', headerName: 'Hours Logged', hideable: false, width: 155
                                            },
                                            {
                                                field: 'assignedTo', headerName: 'Assigned To', hideable: false, width: 155
                                            },
                                            {
                                                field: 'status', headerName: 'Status', hideable: false, width: 155
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
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
                                        checkboxSelection
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tab-pane fade' id="emp_leaves">
                        <div className="row">
                            <div className="col">
                                <button type='button' className='btn btn-white mb-2'><i className='fa fa-plus'></i> New Leave</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                            // { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'employee', headerName: 'Employee', hideable: false, width: 155 },
                                            {
                                                field: 'leaveDate', headerName: 'Leave Date', hideable: false, width: 155
                                            },
                                            {
                                                field: 'duration', headerName: 'Duration', hideable: false, width: 155
                                            },
                                            {
                                                field: 'leaveStatus', headerName: 'Leave Status', hideable: false, width: 155
                                            },
                                            {
                                                field: 'leaveType', headerName: 'Leave Type', hideable: false, width: 155
                                            },
                                            {
                                                field: 'paid', headerName: 'Paid', hideable: false, width: 155
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
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
                                        checkboxSelection
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tab-pane fade' id="leave_quota">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="card">
                                    <div className="row">
                                        <div className="col p-3">
                                            <h4><b>Remaining Leaves</b></h4>
                                            <p>15</p>
                                        </div>
                                        <div className="col text-end" style={{ fontSize: '25px', color: 'gray', paddingTop: '25px' }}>
                                            <i className="fa fa-sign-out-alt"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="row p-2">
                                        <div className="col">
                                            <h3><b>Leaves Quota</b></h3>
                                            <p onClick={visibility} style={{ cursor: 'pointer', color: 'blue' }}><i className="fa fa-cog"></i> <b>Manage</b></p>
                                            <div className="row">
                                                <div className="col">
                                                    {visible ? <div className="card">
                                                        <table className='table table-stripped' style={{ fontSize: 'smaller' }}>
                                                            <thead>
                                                                <tr>
                                                                    <th>Leave Type</th>
                                                                    <th>No of Leaves</th>
                                                                    <th>Action</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody className=''>
                                                                <tr>
                                                                    <td><i className='fa fa-circle' style={{ color: '#16813D' }}></i> Casual</td>
                                                                    <td><input type="text" name="" id="" className='form-control' /></td>
                                                                    <td><button type="button" className='btn btn-white'><i className='fa fa-check'></i></button></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><i className='fa fa-circle' style={{ color: '#D30000' }}></i> Sick</td>
                                                                    <td><input type="text" name="" id="" className='form-control' /></td>
                                                                    <td><button type="button" className='btn btn-white'><i className='fa fa-check'></i></button></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><i className='fa fa-circle' style={{ color: '#B078C6' }}></i> Earned</td>
                                                                    <td><input type="text" name="" id="" className='form-control' /></td>
                                                                    <td><button type="button" className='btn btn-white'><i className='fa fa-check'></i></button></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div> : ''}
                                                    <div className="card">
                                                        <table className='table table-stripped' style={{ fontSize: 'smaller' }}>
                                                            <thead>
                                                                <tr>
                                                                    <th>Leave Type</th>
                                                                    <th>No of Leaves</th>
                                                                    <th>Monthly Limit</th>
                                                                    <th>Total Leaves Taken</th>
                                                                    <th>Remaining Leaves</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className=''>
                                                                <tr>
                                                                    <td><i className='fa fa-circle' style={{ color: '#16813D' }}></i> Casual</td>
                                                                    <td>5</td>
                                                                    <td>--</td>
                                                                    <td>0</td>
                                                                    <td>5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><i className='fa fa-circle' style={{ color: '#D30000' }}></i> Sick</td>
                                                                    <td>5</td>
                                                                    <td>--</td>
                                                                    <td>0</td>
                                                                    <td>5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><i className='fa fa-circle' style={{ color: '#B078C6' }}></i> Earned</td>
                                                                    <td>5</td>
                                                                    <td>--</td>
                                                                    <td>0</td>
                                                                    <td>5</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tab-pane fade' id="timesheet">
                        <div className="row">
                            <div className="col">
                                <button type='button' className='btn btn-white mb-2'><i className='fa fa-plus'></i> Log Time</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                            { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'code', headerName: 'Code', hideable: false, width: 155 },
                                            {
                                                field: 'task', headerName: 'Task', hideable: false, width: 155
                                            },
                                            {
                                                field: 'employee', headerName: 'Employee', hideable: false, width: 155
                                            },
                                            {
                                                field: 'startTime', headerName: 'Start Time', hideable: false, width: 155
                                            },
                                            {
                                                field: 'endTime', headerName: 'End Time', hideable: false, width: 155
                                            },
                                            {
                                                field: 'totalHours', headerName: 'Total Hours', hideable: false, width: 155
                                            },
                                            {
                                                field: 'earnings', headerName: 'Earnings', hideable: false, width: 155
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
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
                                        checkboxSelection
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tab-pane fade' id="documents">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="row">
                                        <div className="col p-3">
                                            <h3>Documents</h3>
                                            <p style={{ color: 'blue', cursor: 'pointer' }} onClick={visibility}><i className='fa fa-plus'></i> Add File</p>
                                           {
                                            visible?
                                             <div className="row">
                                                <div className="col">
                                                    <form action="">
                                                        <div className="row mb-2">
                                                            <div className="col">
                                                                <label htmlFor="">File Name</label>
                                                                <input type="text" name="" id="" className='form-control' />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col">
                                                                <label htmlFor="">Upload File</label>
                                                                <input type="file" name="" id="" className='form-control' />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col text-end">
                                                                <button type="button" className='btn btn-white'>Cancel</button>&nbsp;
                                                                <button type="submit" className='btn btn-white'>Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>:''
                                           }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tab-pane fade' id="emergency_contacts">
                        <div className="row">
                            <div className="col">
                                <button type='button' className='btn btn-white mb-2'><i className='fa fa-plus'></i> Create New</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card p-3" style={{ minHeight: '520px' }}>
                                    <div className="row">
                                        <div className="col">
                                            <h4><b>Emergency Contacts</b></h4>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col" style={{ minHeight: '420px' }}>
                                            <DataGrid
                                                columns={[
                                                    // { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                                    { field: 'name', headerName: 'Name', hideable: false, width: 255 },
                                                    {
                                                        field: 'email', headerName: 'Email', hideable: false, width: 255
                                                    },
                                                    {
                                                        field: 'mobile', headerName: 'Mobile', hideable: false, width: 185
                                                    },
                                                    {
                                                        field: 'relationship', headerName: 'Relationship', hideable: false, width: 185
                                                    },

                                                    {
                                                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                                <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                                    <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                                    <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                                    <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
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
                                                checkboxSelection
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tab-pane fade' id="ticket">
                        <div className="row">
                            <div className="col">
                                <button type='button' className='btn btn-white mb-2'><i className='fa fa-plus'></i> Create Ticket</button> &nbsp; &nbsp;
                                <button type='button' className='btn btn-white mb-2'><i className='fa fa-pen'></i> Ticket Form</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                            // { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'ticket', headerName: 'Ticket#', hideable: false, width: 155 },
                                            {
                                                field: 'ticketSubject', headerName: 'Ticket Subject', hideable: false, width: 155
                                            },
                                            {
                                                field: 'requesterName', headerName: 'Requester Name', hideable: false, width: 155
                                            },
                                            {
                                                field: 'requestedOn', headerName: 'Requested On', hideable: false, width: 155
                                            },
                                            {
                                                field: 'Others', headerName: 'Others', hideable: false, width: 155
                                            },
                                            {
                                                field: 'status', headerName: 'Status', hideable: false, width: 155
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
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
                                        checkboxSelection
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tab-pane fade' id="appreciation">
                        <div className="row">
                            <div className="col">
                                <button type='button' className='btn btn-white mb-2'><i className='fa fa-plus'></i> Add Appreciation</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                            {
                                                field: 'award', headerName: 'Award', hideable: false, width: 395
                                            },
                                            {
                                                field: 'givenOn', headerName: 'Given On', hideable: false, width: 395
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 190, renderCell: (params) => (
                                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                        <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
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
                                        checkboxSelection
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tab-pane fade' id="shiftroaster">
                        <h6>Coming Sooooon....</h6>
                    </div>
                    <div className='tab-pane fade' id="permissions">
                        <h6>Coming Sooooon....</h6>
                    </div>
                    <div className='tab-pane fade' id="activity">
                        <h6>Coming Sooooon....</h6>
                    </div>
                    <div className='tab-pane fade' id="immigration">
                        <h6>Coming Sooooon....</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminEmployeeProfile;
