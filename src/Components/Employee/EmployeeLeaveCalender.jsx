import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const EmployeeLeaveCalender = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Leaves</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Leaves</li>
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
                                {/* <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> New Leave</button> */}
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                <div className="btn-group">
                                    <Link to="/employee/leaves" className="btn btn-white" aria-current="page"><ListIcon /></Link>
                                    <Link to="/employee/leaves-calendar" className="btn btn-primary" aria-current="page"><CalendarTodayIcon /></Link>
                                    <Link to="/employee/my-leaves" className="btn btn-white" aria-current="page"><PersonIcon /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-12">
                                <div className="card">
                                <FullCalendar 
                                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                    initialView="dayGridMonth"
                                    headerToolbar={{
                                        start: "today prev,next",
                                        center: "title",
                                        end: "dayGridMonth,dayGridWeek,dayGridDay",
                                    }}
                                />
                                </div>
                               
                            </div>

                        </div>
                    </div>
                    {/*End Page Content*/}
                </div>
            </div>
        </>
    )
}

export default EmployeeLeaveCalender