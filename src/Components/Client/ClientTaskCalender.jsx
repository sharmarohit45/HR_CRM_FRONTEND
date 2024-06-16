import React from 'react'
import { Link } from 'react-router-dom'
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import ListIcon from '@mui/icons-material/List';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
function ClientTaskCalender() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* <!-- Page Header --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="page-head-box">
                <h3>Task Calendar</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active" aria-current="page">Task Calendar</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}
          <div className="row d-flex justify-content-end">
            <div className="col-2">
              <div className="row">
                <div className="btn-group">
                  <Link to="/" className=" btn btn-white" aria-current="page"><ListIcon /></Link>
                  <Link to="/" className=" btn btn-white"><ViewKanbanIcon /></Link>
                  <Link to="/client/client-task-calender" className=" btn btn-white active"><CalendarTodayIcon /></Link>
                </div>
              </div>

            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
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
    </>
  )
}

export default ClientTaskCalender