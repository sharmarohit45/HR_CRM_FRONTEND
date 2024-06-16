import React from 'react'
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PushPinIcon from '@mui/icons-material/PushPin';
import { Link } from 'react-router-dom';
import AdminAddTaskForm from './AdminAddTaskForm';
const AdminTaskboards = () => {
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
                    {/* <!-- /Page Header --> */}
                    {/* Page Content */}
                    <div className="row mb-3">
                        <div className="row mb-3">
                            <div className="col">
                                <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Tasks</button> &nbsp;
                                <button className='btn btn-white' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className='fa fa-plus'></i> Add Status Column</button> &nbsp;
                                <button className='btn btn-white'><i className='fa fa-user'></i> My Tasks</button>
                            </div>
                            <div className="col text-end">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <Link to="/admin/tasks"><button type="button" className="btn btn-white"><i className='fa fa-list'></i></button></Link>
                                    <Link to="/admin/task-board"><button type="button" className="btn btn-white"><ViewKanbanIcon /></button></Link>
                                    <Link to="/admin/my-tasks-calender"><button type="button" className="btn btn-white"><CalendarTodayIcon /></button></Link>
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
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg" >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Status Column</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form action="">
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="">Column Name</label>
                                                    <input type="text" className='form-control' />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="">Board Column Position</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Open this select menu</option>
                                                        <option value="BeforeIncomplete">Before Incomplete</option>
                                                        <option value="AfterIncomplete">After Incomplete</option>
                                                        <option value="AfterToDo">After To Do</option>
                                                        <option value="AfterDoing">After Doing</option>
                                                        <option value="AfterCompleted">After Completed</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="">Label Color</label>
                                                    <input type="color" name="" id="" className='form-control' />
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                            <div className="row text-end pt-4">
                                                <div className="col">
                                                    <button type="submit" className='btn btn-white'>Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-header text-danger">
                                    <div className="row">
                                        <div className="col ">
                                            <h4><b><i className='fa fa-circle'></i> Incomplete</b></h4>
                                        </div>
                                        <div className="col text-end text-dark">
                                            <i type="button" className="fa fa-ellipsis-h" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#"><i className='fa fa-plus'></i> &nbsp; Add Task</a></li>
                                                <li><a className="dropdown-item" href="#"><i className='fa fa-pen'></i> &nbsp; Edit</a></li>
                                                <li><a className="dropdown-item" href="#"><i className='fa fa-trash'></i> &nbsp; Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <div className="card mb-3 p-2">
                                                <span className="status-title">Simple Admin Dashboard</span>
                                                <p><i className="fa fa-layer-group"></i> Lorem ipsum dolor sit amet, consectetur </p>
                                                <div className="row">
                                                    <div className="col">
                                                        <span className="avatar">
                                                            <img alt="" src="/assets/img/profiles/avatar-03.jpg" />
                                                        </span>
                                                    </div>
                                                    <div className="col p-2 text-danger">
                                                        <i className='fa fa-calendar'></i> &nbsp;30-05-2024
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default AdminTaskboards