import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const AdminMyCalendar = () => {
  // State to manage which checkboxes are selected
  const [showTasks, setShowTasks] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showHolidays, setShowHolidays] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [showLeaves, setShowLeaves] = useState(false);

  // State to store events for FullCalendar
  const [calendarEvents, setCalendarEvents] = useState([]);

  // Function to fetch events based on selected checkboxes
  const fetchCalendarEvents = async () => {
    let eventsToShow = [];

    try {
      if (showTasks) {
         const tasksResponse = await axios.get("http://localhost:8080/task");
         const taskData = tasksResponse.data.map(task=> ({
            title: task.title,
            start: task.startDate,
            end: task.dueDate,
          }));
         eventsToShow.push(...taskData);
      }

      if (showEvents) {
        const response = await axios.get("http://localhost:8080/events");
        const eventData = response.data.map(event => ({
          title: event.eventName,
          start: event.startsOnDate + 'T' + event.startsOnTime,
          end: event.endsOnDate + 'T' + event.endsOnTime,
        }));
        eventsToShow.push(...eventData);
      }

      if (showHolidays) {
        const response = await axios.get("http://localhost:8080/holiday");
        const holidayEvents = response.data.flatMap(holiday => (
          holiday.holiDayDateOcassion.map(occassion => ({
            title: `${occassion.occasion}`,
            start: occassion.date,
            end: occassion.date,
          }))
        ));
        eventsToShow.push(...holidayEvents);
      }

      if (showTickets) {
        // Fetch and add tickets events to eventsToShow array
        // Example: const ticketsResponse = await axios.get("http://localhost:8080/tickets");
        // eventsToShow.push(...ticketsResponse.data);
      }

      if (showLeaves) {
        // Fetch and add leaves events to eventsToShow array
        // Example: const leavesResponse = await axios.get("http://localhost:8080/leaves");
        // eventsToShow.push(...leavesResponse.data);
      }

      setCalendarEvents(eventsToShow);
    } catch (error) {
      console.log("Data fetching failed", error);
    }
  };

  // Handle checkbox change events
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    switch (name) {
      case 'tasks':
        setShowTasks(checked);
        break;
      case 'events':
        setShowEvents(checked);
        break;
      case 'holidays':
        setShowHolidays(checked);
        break;
      case 'tickets':
        setShowTickets(checked);
        break;
      case 'leaves':
        setShowLeaves(checked);
        break;
      default:
        break;
    }
  };

  // Call fetchCalendarEvents whenever checkbox state changes
  useEffect(() => {
    fetchCalendarEvents();
  }, [showTasks, showEvents, showHolidays, showTickets, showLeaves]);

  return (
    <>
      <div className="row p-2">
        <div className="d-flex justify-content-between">
          <h4><b>My Calendar</b></h4>
          <i className='fa fa-ellipsis-h' type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul className="dropdown-menu p-3">
            <li><label><input type="checkbox" name="tasks" checked={showTasks} onChange={handleCheckboxChange} /> Tasks</label></li>
            <li><label><input type="checkbox" name="events" checked={showEvents} onChange={handleCheckboxChange} /> Events</label></li>
            <li><label><input type="checkbox" name="holidays" checked={showHolidays} onChange={handleCheckboxChange} /> Holiday</label></li>
            <li><label><input type="checkbox" name="tickets" checked={showTickets} onChange={handleCheckboxChange} /> Tickets</label></li>
            <li><label><input type="checkbox" name="leaves" checked={showLeaves} onChange={handleCheckboxChange} /> Leaves</label></li>
          </ul>
        </div>

        <div className="col">
          <div className='row text-center d-flex align-items-center justify-content-center' style={{ color: 'gray', fontSize: '15px', height: '100%' }}>
            <div className="col p-3">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  start: "today prev,next",
                  center: "title",
                  end: "dayGridMonth,dayGridWeek,dayGridDay",
                }}
                events={calendarEvents} // Ensure calendarEvents includes holiday events
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMyCalendar;
