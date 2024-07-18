import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';

const EmployeeHolidaySection = () => {
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
                <div className="row">
                    <div className="col text-end">
                        <Link to='/employee/holiday'><button type='button' className='btn btn-white'><i className='fa fa-calendar'></i></button></Link>
                        <Link to='/employee/holiday-list'><button type='button' className='btn btn-white'><i className='fa fa-list'></i></button></Link>
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
                                events={holidays}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeHolidaySection;
