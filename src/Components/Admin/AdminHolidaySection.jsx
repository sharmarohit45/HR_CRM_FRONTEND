import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminHolidayForm from './AdminHolidayForm';

const AdminHolidaySection = () => {
    const [holidays, setHolidays] = useState([]);

    async function getHolidayData() {
        try {
            const response = await axios.get("http://localhost:8080/holiday");
            const holidayData = response.data.flatMap(holiday => 
                holiday.holiDayDateOcassion.map(occasion => ({
                    title: occasion.occasion, // Display the occasion
                    start: occasion.date, // Use the date as the start date
                }))
            );
            setHolidays(holidayData);
        } catch (error) {
            console.log("data fetching failed", error);
        }
    }

    useEffect(() => {
        getHolidayData();
    }, []);
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Holiday</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Dashboard</li>
                                        <li className="breadcrumb-item active" aria-current="page">Holiday</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    <div className="row">
                        <div className="col-sm-8">
                            <button className="btn btn-white mb-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Holiday</button> &nbsp;
                            <button className="btn btn-white mb-3"><i className='fa fa-check'></i> Mark Default Holidays</button>
                        </div>
                        <div className="col-sm-4 text-end">
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn-white"><i className="fa fa-calendar"></i></button>
                                <button type="button" className="btn btn-white"><Link to='/admin/holiday-list'><i className="fa fa-list"></i></Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <FullCalendar
                                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                        initialView="dayGridMonth"
                                        headerToolbar={{
                                            start: "today prev,next",
                                            center: "title",
                                            end: "dayGridMonth,dayGridWeek,dayGridDay",
                                        }}
                                        events={holidays}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                    <div className="offcanvas-header">
                        <h2 id="offcanvasRightLabel" className='text-bold'><b>Holiday</b></h2>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <AdminHolidayForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminHolidaySection