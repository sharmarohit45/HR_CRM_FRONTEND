import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
function ClientEvents() {
  return (
    <>
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* <!-- Page Header --> */}
        <div className="row">
          <div className="col-md-12">
            <div className="page-head-box">
              <h3>Events</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Dashboard</li>
                  <li className="breadcrumb-item active" aria-current="page">Events</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- /Page Header --> */}
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

export default ClientEvents