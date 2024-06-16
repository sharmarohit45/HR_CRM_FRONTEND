import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Link } from 'react-router-dom';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PushPinIcon from '@mui/icons-material/PushPin';
import axios from 'axios';

const AdminAddTaskCalender = () => {
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);

    useEffect(() => {
        // Fetch events from the API when the component mounts
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            // Make GET request to fetch events from the API
            const response = await axios.get('https://example.com/api/events');

            // Set the fetched events in the state
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                     
                     <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Tasks Calendar</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Tasks</li>
                                        <li className="breadcrumb-item active" aria-current="page">Tasks-calendar</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    <div className="row mb-3">
                            <div className="col">
                                <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Tasks</button> &nbsp;
                                <Link to="/admin/my-tasks"><button className='btn btn-white'><i className='fa fa-user'></i> My Tasks</button></Link>
                            </div>
                            <div className="col text-end">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                <Link to="/admin/tasks"><button type="button" className="btn btn-white"><i className='fa fa-list'></i></button></Link>
                                    <Link to="/admin/task-board"><button type="button" className="btn btn-white"><ViewKanbanIcon /></button></Link>
                                    <Link to="/admin/my-tasks-calender"><button type="button" className="btn btn-white"><CalendarTodayIcon /></button></Link>
                                    <Link to="/admin/tasks"><button type="button" className="btn btn-white"><PushPinIcon /></button></Link>
                                </div>
                            </div>
                        </div>
                    <div className="row mt-2">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <button className="btn btn-primary mb-3">Add Task</button>
                                    <FullCalendar
                                        ref={calendarRef}
                                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                        initialView="dayGridMonth"
                                        headerToolbar={{
                                            start: "today prev,next",
                                            center: "title",
                                            end: "dayGridMonth,dayGridWeek,dayGridDay",
                                        }}
                                        selectable={true}
                                        // select={handleDateSelect}
                                        events={events}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminAddTaskCalender