import React, { useState, useEffect } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';
import AdminAddEvent from './AdminAddEvent';

const AdminEventsSection = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function getEventsData() {
            try {
                const response = await axios.get("http://localhost:8080/events");
                const eventData = response.data.map(event => ({
                    title: event.eventName,
                    start: event.startsOnDate + 'T' + event.startsOnTime,
                    end: event.endsOnDate + 'T' + event.endsOnTime,
                }));
                setEvents(eventData);
            } catch (error) {
                console.log("Data fetching failed", error);
            }
        }
        
        getEventsData();
    }, []);

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row mt-2">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <button className="btn btn-white mb-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add Event</button>
                                    <FullCalendar
                                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                        initialView="dayGridMonth"
                                        headerToolbar={{
                                            start: "today prev,next",
                                            center: "title",
                                            end: "dayGridMonth,dayGridWeek,dayGridDay",
                                        }}
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
                        <AdminAddEvent />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminEventsSection;
