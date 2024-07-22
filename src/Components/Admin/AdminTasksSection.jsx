import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PushPinIcon from '@mui/icons-material/PushPin';
import { Link, useNavigate } from 'react-router-dom';
import AdminAddTaskForm from './AdminAddTaskForm';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminTasksSection = () => {
    const [data, setData] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [taskDetails, setTaskDetails] = useState(null);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/task");
            setData(response.data);
        } catch (error) {
            console.log("Data fetching failed", error);
        }
    };
    const getTaskDetailsById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/task/${id}`);
            setTaskDetails(response.data);
        } catch (error) {
            console.log("Failed to fetch task details", error);
        }
    };

    const profileOnChange = (empId) => {
        navigate(`/admin/employee-profile/${empId}`, { state: { empId } });
    };

    const handleViewClick = (task) => {
        setSelectedTask(task);
        getTaskDetailsById(task.id); // Fetch details for the selected task
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/task/${id}`);
            toast.success("Data Deleted Successfully");
            getData(); // Refresh data after deletion
        } catch (error) {
            console.log("Data deletion failed", error);
            toast.error("Failed to delete");
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            await axios.put(`http://localhost:8080/task/${id}`, { status: newStatus });
            toast.success("Status updated successfully");
            getData(); // Refresh data after status update
        } catch (error) {
            console.log("Status update failed", error);
            toast.error("Failed to update status");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const columns = [
        { field: 'task', headerName: 'Task', width: 155 },
        { field: 'completedOn', headerName: 'Completed On', width: 155, renderCell: (params) => <span>{params.row.completedOn || '--'}</span> },
        { field: 'startDate', headerName: 'Start Date', width: 155 },
        { field: 'dueDate', headerName: 'Due Date', width: 155 },
        { field: 'hoursLogged', headerName: 'Hours Logged', width: 155 },
        {
            field: 'assignedTo',
            headerName: 'Assigned To',
            width: 155,
            renderCell: (params) => (
                <div
                    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                    onClick={() => profileOnChange(params.row.empId)}
                >
                    <img
                        src={`data:image/png;base64,${params.row.imageData}`}
                        alt="employee"
                        style={{ height: '30px', width: '30px', marginRight: '10px', borderRadius: '50%' }}
                    />
                    {params.value}
                </div>
            ),
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 155,
            renderCell: (params) => (
                <select
                    className="form-select form-control mt-1"
                    value={params.row.status}
                    onChange={(e) => handleStatusChange(params.row.id, e.target.value)}
                >
                    <option value="Incomplete">Incomplete</option>
                    <option value="To Do">To Do</option>
                    <option value="In progress">In progress</option>
                    <option value="Doing">Doing</option>
                </select>
            ),
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params) => (
                <div>
                    <MoreVertIcon
                        style={{ fontSize: '15px' }}
                        className="dropdown-toggle"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    />
                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                        <li onClick={() => handleViewClick(params.row)} data-bs-toggle="offcanvas" data-bs-target="#showData" aria-controls="offcanvasRight">
                            <a className="dropdown-item"><i className="fa fa-eye"></i> View</a>
                        </li>
                        <li><a className="dropdown-item"><i className="fa fa-pen"></i> Edit</a></li>
                        <li onClick={() => handleDelete(params.row.id)}>
                            <a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a>
                        </li>
                    </ul>
                </div>
            ),
        },
    ];

    const rows = data.map(row => ({
        id: row.taskId,
        task: row.title,
        empId: row.employee.empId,
        completedOn: row.completedOn || '--',
        startDate: row.startDate,
        dueDate: row.dueDate,
        hoursLogged: row.hoursLogged,
        imageData: row.employee.imageData,
        assignedTo: row.employee.empName,
        status: row.status,
    }));

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Tasks</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Tasks</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className='fa fa-plus'></i> Add Tasks
                            </button> &nbsp;
                            <Link to="/admin/my-tasks">
                                <button className='btn btn-white'><i className='fa fa-user'></i> My Tasks</button>
                            </Link>
                        </div>
                        <div className="col text-end">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-white"><i className='fa fa-list'></i></button>
                                <Link to="/admin/task-board">
                                    <button type="button" className="btn btn-white"><ViewKanbanIcon /></button>
                                </Link>
                                <Link to="/admin/my-tasks-calender">
                                    <button type="button" className="btn btn-white"><CalendarTodayIcon /></button>
                                </Link>
                                <button type="button" className="btn btn-white"><PushPinIcon /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card" style={{ minHeight: '520px' }}>
                                <DataGrid
                                    columns={columns}
                                    rows={rows}
                                    components={{ Toolbar: GridToolbar }}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Tasks</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminAddTaskForm />
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="showData" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Task Details</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="row">
                                            <div className="col">
                                                <button className='btn btn-white'>Complete</button>
                                            </div>
                                            <div className="col text-end pe-3 pt-2">
                                                <i style={{ fontSize: '15px' }} className="fa fa-ellipsis-v" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                    <li><a className="dropdown-item"><i className="fa fa-pen"></i> Edit</a></li>
                                                    <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col">
                                                <p><b>Project</b> {taskDetails ? taskDetails.title : '--'}</p>
                                                <p><b>Priority</b> {taskDetails ? taskDetails.label : '--'}</p>
                                                <p><b>Assigned To</b> {taskDetails && taskDetails.employee ? taskDetails.employee.empName : '--'}</p>
                                                <p><b>Short Code</b> {taskDetails ? taskDetails.shortCode : '--'}</p>
                                                <p><b>Milestones</b> {taskDetails ? taskDetails.milestones : '--'}</p>
                                                {/* <p><b>Label</b> {taskDetails ? taskDetails.label : '--'}</p> */}
                                                <p><b>Task Category</b> {taskDetails ? taskDetails.taskCategory : '--'}</p>
                                                <p><b>Description</b> {taskDetails ? taskDetails.projectSummary : '--'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card p-3">
                                        <div className="row">
                                            <div className="col">
                                                <h4><b>Status</b></h4>
                                            </div>
                                        </div><hr />
                                        <p><b>Created On</b> {taskDetails ? taskDetails.createdOn : '--'}</p>
                                        <p><b>Start Date</b> {taskDetails ? taskDetails.startDate : '--'}</p>
                                        <p><b>Due Date</b> {taskDetails ? taskDetails.dueDate : '--'}</p>
                                        <p><b>Hours Logged</b> {taskDetails ? taskDetails.hoursLogged : '--'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminTasksSection;
