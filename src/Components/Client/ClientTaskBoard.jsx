import React from 'react'
import { Link } from 'react-router-dom'
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import ListIcon from '@mui/icons-material/List';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LayersIcon from '@mui/icons-material/Layers';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function ClientTaskBoard() {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Task Board</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Dashboard</li>
                                        <li className="breadcrumb-item active" aria-current="page">Task Board</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    <div className="row">
                        <div className="row d-flex justify-content-end">
                            <div className="col-sm-2">
                                <div className="row">
                                    <div className="btn-group">
                                        <Link to="/client/Tasks" className=" btn btn-white" aria-current="page"><ListIcon /></Link>
                                        <Link to="/client/client-task-board" className=" btn btn-white" aria-current="page"><ViewKanbanIcon /></Link>
                                        <Link to="/client/client-task-calender" className=" btn btn-white"><CalendarTodayIcon /></Link>
                                        <Link to="/" className=" btn btn-white"><i className='fas fa-thumbtack'></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-3">
                            <div className="card">
                                <div className="card-header">
                                    <b><FiberManualRecordIcon style={{color:'red'}}/> Incomplete</b>
                                </div>
                                <div className="card-body">
                                    <div className="card rounded bg-white border-grey b-shadow-4 m-1 mb-2 move-disable task-card" data-task-id="4" id="drag-task-4" style={{ borderLeft: '3px solid #0a8a1f', backgroundColor: '#0a8a1f08' }}>
                                        <div className="card-body p-2">
                                            <div className="d-flex justify-content-between mb-1" style={{ fontSize: 'smaller' }}>
                                                <a href="" className="text-dark mb-0" >YOUR adventures.'.</a>
                                                <p className="font-weight-bold text-dark-grey mb-0">
                                                    #OMFSNP-4
                                                </p>
                                            </div>


                                            <div className="d-flex mb-1 justify-content-between">
                                                <div>
                                                    <p style={{ fontSize: '10px' }}><i><LayersIcon /></i> Opinion mining for social networking platforms</p>
                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-wrap">
                                                    <div className="mr-1" >
                                                        <a href="https://demo.worksuite.biz/account/employees/1" alt="Mr. Fletcher Berge" data-toggle="tooltip" data-original-title="Mr. Fletcher Berge" data-placement="right"><img src="https://i.pravatar.cc/300?u=" style={{ height: '30px' }} className='rounded-circle' /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex text-red">
                                                    <span className="f-12 ml-1"><i className="f-11 bi bi-calendar align-self-center"></i> 14-02-2024</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <div className="card-header">
                                    <b><FiberManualRecordIcon style={{color:'#f5c308'}}/> To Do</b>
                                </div>
                                <div className="card-body">
                                    <div className="card rounded bg-white border-grey b-shadow-4 m-1 mb-2 move-disable task-card" data-task-id="1" id="drag-task-1" style={{ borderLeft: '3px solid #dd0000', backgroundColor: '#dd000008 !important' }}>
                                        <div className="card-body p-2">
                                            <div className="d-flex justify-content-between mb-1" style={{ fontSize: 'smaller' }}>
                                                <a href="" className="text-dark mb-0">Bill! I wouldn't.</a>
                                                <p className="text-dark-grey mb-0">
                                                    #OMFSNP-1
                                                </p>
                                            </div>


                                            <div className="">
                                                <div>
                                                    <p style={{ fontSize: '10px' }}><i><LayersIcon /></i>Opinion mining for social networking platforms
                                                    </p>
                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-wrap">
                                                    <div className="avatar-img mr-1 img img-rounded-circle" >
                                                        <a href="https://demo.worksuite.biz/account/employees/1" alt="Mr. Fletcher Berge" data-toggle="tooltip" data-original-title="Mr. Fletcher Berge" data-placement="right"><img src="https://i.pravatar.cc/300?u=" style={{ height: '30px' }} className='rounded-circle' /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex text-red">
                                                    <span className="f-12 ml-1"><i className="f-11 bi bi-calendar align-self-center"></i> 07-02-2024</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <div className="card-header">
                                   <b><FiberManualRecordIcon style={{color:'#00b5ff'}}/> Doing</b>
                                </div>
                                <div className="card-body">
                                <div className="card rounded bg-white border-grey b-shadow-4 m-1 mb-2 move-disable task-card" data-task-id="1" id="drag-task-1" style={{ borderLeft: '3px solid #dd0000', backgroundColor: '#dd000008 !important' }}>
                                        <div className="card-body p-2">
                                            <div className="d-flex justify-content-between mb-1" style={{ fontSize: 'smaller' }}>
                                                <a href="" className="text-dark mb-0">This of course, to.</a>
                                                <p className="text-dark-grey mb-0">
                                                    #OMFSNP-1
                                                </p>
                                            </div>


                                            <div className="">
                                                <div>
                                                    <p style={{ fontSize: '10px' }}><i><LayersIcon /></i>Opinion mining for social networking platforms
                                                    </p>
                                                </div>

                                            </div>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-wrap">
                                                    <div className="avatar-img mr-1 img img-rounded-circle" >
                                                        <a href="https://demo.worksuite.biz/account/employees/1" alt="Mr. Fletcher Berge" data-toggle="tooltip" data-original-title="Mr. Fletcher Berge" data-placement="right"><img src="https://i.pravatar.cc/300?u=" style={{ height: '30px' }} className='rounded-circle' /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex text-red">
                                                    <span className="f-12 ml-1"><i className="f-11 bi bi-calendar align-self-center"></i> 07-02-2024</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <div className="card-header">
                                   <b><FiberManualRecordIcon style={{color:'#679c0d'}}/> Completed</b> 
                                </div>
                                <div className="card-body">
                                <div className="card rounded bg-white border-grey b-shadow-4 m-1 mb-2 move-disable task-card" data-task-id="1" id="drag-task-1" style={{ borderLeft: '3px solid #dd0000', backgroundColor: '#dd000008 !important' }}>
                                        <div className="card-body p-2">
                                            <div className="d-flex justify-content-between mb-1" style={{ fontSize: 'smaller' }}>
                                                <a href="" className="text-dark mb-0">Then followed the.</a>
                                                <p className="text-dark-grey mb-0">
                                                    #OMFSNP-4
                                                </p>
                                            </div>
                                            <div className="">
                                                <div>
                                                    <p style={{ fontSize: '10px' }}><i><LayersIcon /></i>Opinion mining for social networking platforms
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-wrap">
                                                    <div className="avatar-img mr-1 img img-rounded-circle" >
                                                        <a href="https://demo.worksuite.biz/account/employees/1" alt="Mr. Fletcher Berge" data-toggle="tooltip" data-original-title="Mr. Fletcher Berge" data-placement="right"><img src="https://i.pravatar.cc/300?u=" style={{ height: '30px' }} className='rounded-circle' /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex text-red">
                                                    <span className="f-12 ml-1"><i className="f-11 bi bi-calendar align-self-center"></i> 07-02-2024</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default ClientTaskBoard