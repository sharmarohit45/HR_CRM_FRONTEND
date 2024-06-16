import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
function AdminPrivateDashboard() {
  const [admin, setAdmin] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());

  // State variables to manage visibility of different sections
  const [sectionsVisibility, setSectionsVisibility] = useState({
    profile: true,
    shiftSchedule: true,
    birthdays: true,
    notices: true,
    tasks: true,
    projects: true,
    myTasks: true,
    myCalendar: true,
    contractDate: true,
    weekTimelogs: true,
    onLeaveToday: true,
    leads: true,
    workFromHomeToday: true,
    appreciations: true,
    workAnniversary: true,
    tickets: true,
    noticePeriodDuration: true,
    probationDate: true,
    internshipDate: true,
  });

  const getAdmin = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/data");
      if (!response.data || response.data.length === 0) {
        throw new Error('Failed to fetch data');
      }
      setAdmin(response.data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAdmin();
    const intervalID = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const formattedDateTime = {
    day: dateTime.toLocaleDateString(undefined, { weekday: 'long' }),
    time: dateTime.toLocaleTimeString()
  };

  // Toggle function to update visibility state of each section
  const toggleSectionVisibility = (section) => {
    setSectionsVisibility({
      ...sectionsVisibility,
      [section]: !sectionsVisibility[section],
    });
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid pb-0">
        {/* Page Header */}
        <div className="row p-2">
          <div className="col-md-12">
            <div className="page-head-box">
              <h3>Dashboard</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Private Dashboard</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row " >
          <div className="col pt-2">
            <h3><b>Welcome {admin ? admin.adminName : 'Admin'}</b></h3>
          </div>
          <div className="col-sm-5">
            <div className=" row">
              <div className='col  text-end'>
                <b>{formattedDateTime.time} <br />
                  {formattedDateTime.day}</b>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-sm-10">
                    <button type="button" className='btn btn-white' style={{ fontSize: '12px' }}><ExitToAppIcon style={{ fontSize: '15px' }} /> Clock In</button>
                  </div>
                  <div className="col-sm-2">
                    <i className="fa fa-cog" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                  </div>
                </div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Dashboard Widgets</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col">
                            <ul>
                              <li><input type="checkbox" checked={sectionsVisibility.profile} onChange={() => toggleSectionVisibility('profile')} /> Profile </li>
                              <li><input type="checkbox" checked={sectionsVisibility.shiftSchedule} onChange={() => toggleSectionVisibility('shiftSchedule')} /> Shift Schedule</li>
                              <li><input type="checkbox" checked={sectionsVisibility.birthdays} onChange={() => toggleSectionVisibility('birthdays')} /> Birthdays</li>
                              <li><input type="checkbox" checked={sectionsVisibility.notices} onChange={() => toggleSectionVisibility('notices')} /> Notices</li>
                              <li><input type="checkbox" checked={sectionsVisibility.tasks} onChange={() => toggleSectionVisibility('tasks')} /> Tasks</li>
                              <li><input type="checkbox" checked={sectionsVisibility.projects} onChange={() => toggleSectionVisibility('projects')} /> Projects</li>
                              <li><input type="checkbox" checked={sectionsVisibility.myTasks} onChange={() => toggleSectionVisibility('myTasks')} /> My Tasks</li>
                              <li><input type="checkbox" checked={sectionsVisibility.myCalendar} onChange={() => toggleSectionVisibility('myCalendar')} /> My Calendar</li>
                              <li><input type="checkbox" checked={sectionsVisibility.contractDate} onChange={() => toggleSectionVisibility('contractDate')} /> Contract Date</li>
                            </ul>
                          </div>
                          <div className="col">
                            <ul>
                              <li><input type="checkbox" checked={sectionsVisibility.weekTimelogs} onChange={() => toggleSectionVisibility('weekTimelogs')} /> Week Timelogs</li>
                              <li><input type="checkbox" checked={sectionsVisibility.onLeaveToday} onChange={() => toggleSectionVisibility('onLeaveToday')} /> On Leave Today</li>
                              <li><input type="checkbox" checked={sectionsVisibility.leads} onChange={() => toggleSectionVisibility('leads')} /> Leads</li>
                              <li><input type="checkbox" checked={sectionsVisibility.workFromHomeToday} onChange={() => toggleSectionVisibility('workFromHomeToday')} /> On Work From Home Today</li>
                              <li><input type="checkbox" checked={sectionsVisibility.appreciations} onChange={() => toggleSectionVisibility('appreciations')} /> Appreciations</li>
                              <li><input type="checkbox" checked={sectionsVisibility.workAnniversary} onChange={() => toggleSectionVisibility('workAnniversary')} /> Work Anniversary</li>
                              <li><input type="checkbox" checked={sectionsVisibility.tickets} onChange={() => toggleSectionVisibility('tickets')} /> Tickets</li>
                              <li><input type="checkbox" checked={sectionsVisibility.noticePeriodDuration} onChange={() => toggleSectionVisibility('noticePeriodDuration')} /> Notice Period Duration </li>
                              <li><input type="checkbox" checked={sectionsVisibility.probationDate} onChange={() => toggleSectionVisibility('probationDate')} /> Probation Date</li>
                              <li><input type="checkbox" checked={sectionsVisibility.internshipDate} onChange={() => toggleSectionVisibility('internshipDate')} /> Internship Date</li>
                            </ul>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <button type="submit">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 p-2">
          <div className="col-sm-6">
            {sectionsVisibility.profile && (
              <div className="card">
                <div className="row p-3">
                  <div className="col-sm-4">
                    <img src="https://i.pravatar.cc/300?u=admin@example.com" alt="" style={{ height: '100px', width: '100px' }} />
                  </div>
                  <div className="col-sm-8">
                    <h4><b>{admin ? admin.adminName : 'Admin Name'}</b></h4>
                    <h5><b>Junior</b></h5>
                    <h6><b>Emp Id : Emp-04</b></h6>
                  </div>
                </div><hr />
                <div className="row p-2">
                  <div className="col">
                    <p>Open Tasks</p>
                    <b>7</b>
                  </div>
                  <div className="col">
                    <p>Projects</p>
                    <b>6</b>
                  </div>
                  <div className="col">
                    <p>Open Tickets</p>
                    <b>0</b>
                  </div>
                </div>
              </div>
            )}
            {sectionsVisibility.shiftSchedule && (
              <div className="card">
                <div className="row p-2">
                  <div className="col-sm-8 pt-2">
                    <h4><b>Shift Schedule</b></h4>
                  </div>
                  <div className="col-sm-4">
                    <button type="button" className='btn btn-primary'>Employee Shift</button>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-sm-12">
                    <table className='table' style={{width:'100%',fontSize:'smaller'}}>
                      <tbody>
                        <tr>
                          <td>13-05-2024</td>
                          <td>Monday</td>
                          <td>General Shift</td>
                          <td>This is default shift</td>
                        </tr>
                        <tr>
                          <td>14-05-2024</td>
                          <td>Tuesday</td>
                          <td>General Shift</td>
                          <td>This is default shift</td>
                        </tr>
                        <tr>
                          <td>15-05-2024</td>
                          <td>Wednesday</td>
                          <td>General Shift</td>
                          <td>This is default shift</td>
                        </tr>
                        <tr>
                          <td>16-05-2024</td>
                          <td>Thursday</td>
                          <td>General Shift</td>
                          <td>This is default shift</td>
                        </tr>
                        <tr>
                          <td>16-05-2024</td>
                          <td>Friday</td>
                          <td>General Shift</td>
                          <td>This is default shift</td>
                        </tr>
                        <tr>
                          <td>16-05-2024</td>
                          <td>SaturDay</td>
                          <td>General Shift</td>
                          <td>This is default shift</td>
                        </tr>
                        <tr>
                          <td>16-05-2024</td>
                          <td>Sunday</td>
                          <td>General Shift</td>
                          <td>This is default shift</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            {sectionsVisibility.birthdays && (
              <div className="card">
                <div className="row p-2">
                  <h4><b>Birthday</b></h4>
                  <div className="col">
                  </div>
                </div>
              </div>
            )}
            {sectionsVisibility.appreciations && (
              <div className="card">
                <div className="row p-2">
                  <h4><b>Employee Appreciations</b></h4>
                  <div className="col">
                  </div>
                </div>
              </div>
            )}
            {sectionsVisibility.onLeaveToday && (
              <div className="card">
                <div className="row p-2">
                  <h4><b>On Leave Today</b></h4>
                  <div className="col">
                  </div>
                </div>
              </div>
            )}
            {sectionsVisibility.workFromHomeToday && (
              <div className="card">
                <div className="row p-2">
                  <h4><b>On Work From Home Today</b></h4>
                  <div className="col">
                  </div>
                </div>
              </div>
            )}
            {sectionsVisibility.workAnniversary && (
              <div className="card">
                <div className="row p-2">
                  <h4><b>Today's Joinings & Work Anniversary</b></h4>
                  <div className="col">
                  </div>
                </div>
              </div>
            )}
            {sectionsVisibility.noticePeriodDuration && (
              <div className="card">
                <div className="row p-2">
                  <h4><b>Notice Period Duration</b></h4>
                  <div className="col">
                  </div>
                </div>
              </div>
            )}
            {sectionsVisibility.probationDate && (
              <div className="card">
                <div className="row p-2">
                  <h4><b>Probation Date</b></h4>
                  <div className="col">
                  </div>
                </div>
              </div>
            )}
            {sectionsVisibility.internshipDate && (
              <div className="card">
                <div className="row p-2">
                  <h4><b>Internship Date</b></h4>
                  <div className="col">
                  </div>
                </div>
              </div>
            )}
            {sectionsVisibility.contractDate && (
              <div className="card">
                <div className="row p-2">
                  <h4><b>Contract Date</b></h4>
                  <div className="col">
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-sm-6">
            <div className="row ">
              <div className="col-sm-6">
                {sectionsVisibility.tasks && (
                  <div className="card p-3">
                    <h4><b>Tasks</b></h4>
                    <div className="row">
                      <div className="col">
                        <b>7</b>
                        <p>Pending</p>
                      </div>
                      <div className="col">
                        <b>6</b>
                        <p>Overdue</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-sm-6">
                {sectionsVisibility.projects && (
                  <div className="card">
                    <div className="row p-2">
                      <h4><b>Projects</b></h4>
                      <div className="row">
                        <div className="col">
                          <b>7</b>
                          <p>In Progress</p>
                        </div>
                        <div className="col">
                          <b>6</b>
                          <p>Overdue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {sectionsVisibility.weekTimelogs && (
              <div className="card">
                <b>Week Timelogs</b>
              </div>
            )}
            {sectionsVisibility.myTasks && (
              <div className="card">
                <b>My Tasks</b>
              </div>
            )}
            {sectionsVisibility.ticketsi && (
              <div className="card">
                <b>Tickets</b>
              </div>
            )}
            {sectionsVisibility.myCalendar && (
              <div className="card">
                <b>My Calendar</b>
              </div>
            )}
            {sectionsVisibility.notices && (
              <div className="card">
                <b>Notices</b>
              </div>
            )}
          </div>
        </div>

      </div>
    </div >
  );
}

export default AdminPrivateDashboard;
