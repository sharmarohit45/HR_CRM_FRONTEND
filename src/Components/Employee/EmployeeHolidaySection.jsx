import React from 'react'
import { Link } from 'react-router-dom'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const EmployeeHolidaySection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Holiday</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Holiday</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    {/* Page Content */}
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
                    {/*End Page Content*/}
                </div>
            </div>
        </>
    )
}

export default EmployeeHolidaySection