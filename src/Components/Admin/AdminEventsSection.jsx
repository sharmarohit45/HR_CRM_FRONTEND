import React, { useState, useRef, useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';
import AdminAddEvent from './AdminAddEvent';

const AdminEventsSection = () => {
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
                    <div className="row mt-2">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <button className="btn btn-white mb-3"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add Event</button>
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
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Events</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            {/* <AdminAddNotice /> */}
                            <AdminAddEvent />
                        </div>
                    </div>
            </div>
        </>
    );
};

export default AdminEventsSection;
