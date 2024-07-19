import React, { useState, useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminHolidayForm from './AdminHolidayForm';
import AdminAddDefaultHolidays from './AdminAddDefaultHolidays';

const getAllDatesForDay = (day, year) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = daysOfWeek.indexOf(day);
    if (dayIndex === -1) return [];

    const dates = [];
    const startDate = new Date(`${year}-01-01`);

    // Set date to the first occurrence of the specified day in the year
    while (startDate.getDay() !== dayIndex) {
        startDate.setDate(startDate.getDate() + 1);
    }

    // Collect all dates for the specified day in the year
    while (startDate.getFullYear() === year) {
        dates.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 7);
    }

    return dates.map(date => date.toISOString().split('T')[0]); // Return dates in 'YYYY-MM-DD' format
};

const AdminHolidaySection = () => {
    const [holidays, setHolidays] = useState([]);

    const getHolidayData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/holiday");
            const currentYear = new Date().getFullYear();

            const holidayData = response.data.flatMap(holiday => [
                ...(holiday.holidayDay ? holiday.holidayDay.split(', ').flatMap(day => 
                    getAllDatesForDay(day, currentYear).map(date => ({
                        title: "Default Holiday",
                        start: date,
                    }))
                ) : []),
                ...(holiday.holiDayDateOcassion ? holiday.holiDayDateOcassion.map(occasion => ({
                    title: occasion.occasion,
                    start: occasion.date,
                })) : [])
            ]);

            setHolidays(holidayData);
        } catch (error) {
            console.error("Failed to fetch holiday data:", error);
        }
    };

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
                    <div className="row">
                        <div className="col-sm-8">
                            <button className="btn btn-white mb-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className='fa fa-plus'></i> Add Holiday
                            </button> &nbsp; 
                            <button className="btn btn-white mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className='fa fa-check'></i> Mark Default Holidays
                            </button>
                        </div>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel"><b>Mark Default Holidays</b></h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <AdminAddDefaultHolidays />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 text-end">
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn-white">
                                    <i className="fa fa-calendar"></i>
                                </button>
                                <button type="button" className="btn btn-white">
                                    <Link to='/admin/holiday-list'>
                                        <i className="fa fa-list"></i>
                                    </Link>
                                </button>
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
};

export default AdminHolidaySection;
