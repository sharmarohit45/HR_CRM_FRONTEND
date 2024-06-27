import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
function EmployeeDashboard() {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  const [user, setUser] = useState({});
  // const [dateTime, setDateTime] = useState(new Date());
  const [dateTime, setDateTime] = useState(new Date());
  const [isOtherLocation, setIsOtherLocation] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  // const profileOnchange = (email) => {
  //   navigate('/admin/employee-profile/:empId', { state: { email: email } });
  // };
  const [formData, setFormData] = useState({
    employeeId: '',
    attendanceDate: new Date().toLocaleDateString(),
    attendanceTime: new Date().toLocaleTimeString(),
    location: '',
    workingFrom: '',
    otherlocation:''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'workingFrom' && value === 'Other') {
      setIsOtherLocation(true);
    } else if (name === 'workingFrom') {
      setIsOtherLocation(false);
    }
  };
  const handleClockIn = async (e) => {
    e.preventDefault();
     const response = await axios.post('http://localhost:8080/clockAttendance/clock-in', {
       ...formData,
       clockInTime: new Date(),
     });
     setFormData({ ...formData, clockInTime: response.data.clockInTime });
    console.log(formData)
  };
  const handleClockOut = async (e) => {
    e.preventDefault();
    const response = await axios.put(`/api/attendance/clock-out/${formData.id}`, {
      clockOutTime: new Date(),
    });
    setFormData({ ...formData, clockOutTime: response.data.clockOutTime });
  };
  async function getData() {
    try {
      const response = await axios.get('http://localhost:8080/allEmployee', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.data) {
        throw new Error('Failed to fetch data');
      }

      const item = response.data.find((item) => item.email === email);

      if (item) {
        setUser(item);
        if (item.imageData) {
          if (item.imageData.startsWith('data:image')) {
            setImageUrl(item.imageData);
          }
        }
        else {
          console.error('No imageData found');
        }
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const formattedDateTime = {
    day: dateTime.toLocaleDateString(undefined, { weekday: 'long' }),
    time: dateTime.toLocaleTimeString()
  };
  useEffect(() => {
    if (!email) {
      navigate('/');
    } else {
      getData();
    }
  }, [email, navigate]);
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid pb-0">
          {/* Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="page-head-box">
                <h3>Dashboard</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/employee">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                     Employee Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row p-2" >
            <div className="col">
              <h3>
                <b>Welcome {user.empName}</b>
              </h3>
            </div>

            <div className="col">
              <div className="row">
                <div className="col text-end" style={{ fontWeight: 'bold' }}>
                  <p>{formattedDateTime.time} <br /> {formattedDateTime.day}</p>
                </div>
                <div className="col-sm-3">
                  <button type="button" className='btn btn-white' style={{ fontSize: '12px' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <ExitToAppIcon /> Clock In</button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Clock In</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={handleClockIn}>
                            <div className="row">
                              <div className="col" style={{ fontSize: '25px' }}>
                                <label>
                                  <i className="fa fa-clock"></i>
                                  <b> {`${formData.attendanceDate} ${formData.attendanceTime}`} </b>
                                </label>
                              </div>
                              <div className="col text-end">
                                <label className="btn-success p-1">General Shift</label>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col">
                                <label>Employee ID</label> &nbsp;
                                <b className='text-info'>{user.empId}</b>
                                <input type="text" name="employeeId" className="form-control" value={formData.employeeId} onChange={handleChange} required />
                              </div>
                              <div className="col">
                                <label>Location</label>
                                <select name="location" className="form-select" value={formData.location} onChange={handleChange}>
                                  <option value="PSSPL">PSSPL</option>
                                </select>
                              </div>
                              <div className="col">
                                <label>Working From</label>
                                <select name="workingFrom" className="form-select" value={formData.workingFrom} onChange={handleChange}>
                                  <option value="Office">Office</option>
                                  <option value="Home">Home</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>
                            {isOtherLocation && (
                              <div className="row mt-3">
                                <div className="col">
                                  <label>Other Locations</label>
                                  <input type="text" className="form-control" value={formData.otherlocation} onChange={handleChange}/>
                                </div>
                              </div>
                            )}
                            <div className="mt-2 modal-footer">
                              <button type="button" className="btn btn-white" data-bs-dismiss="modal">Cancel</button>
                              <button type="submit" className="btn btn-white">Clock In</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5">
              {/* PROFILE CARD */}
              <div className="card p-4">
                <div className="row">
                  <div className="col p-2">
                    <img
                      src={`data:image/png;base64,${user.imageData}`}
                      style={{ height: '120px', width: '120px', padding: '10px', borderRadius: '25%' }}
                    />
                    {user.imageUrl}
                  </div>
                  <div className="col pt-4">
                    <p style={{ fontSize: 'smaller', fontSize: '15px' }}><b style={{ fontSize: '20px' }}>{user.empName}</b> <br />{user.designation} <br /> <p style={{ fontSize: '13px', color: 'gray' }}>Employee Id : {user.employeeId} </p></p>
                  </div>
                  <div className="col"></div>
                </div>
                <hr />
                <div className="row p-2">
                  <div className="col">
                    <p>Open Tasks</p>
                    <b>7</b>
                  </div>
                  <div className="col">
                  </div>
                  <div className="col">
                    <p>Projects</p>
                    <b>0</b>
                  </div>
                </div>
              </div>
              <div className="card p-4">
                <div className="row">
                  <h4>
                    <b>Birthday</b>
                  </h4>
                  <div className="col"></div>
                </div>
              </div>
              <div className="card p-4">
                <div className="row">
                  <h4>
                    <b>Employee Appreciations</b>
                  </h4>
                  <div className="col"></div>
                </div>
              </div>
              <div className="card p-4">
                <div className="row">
                  <h4>
                    <b>On Leave Today</b>
                  </h4>
                  <div className="col"></div>
                </div>
              </div>
              <div className="card p-4">
                <div className="row">
                  <h4>
                    <b>On Work From Home Today</b>
                  </h4>
                  <div className="col"></div>
                </div>
              </div>
              <div className="card p-4">
                <div className="row">
                  <h4>
                    <b>Today's Joinings & Work Anniversary</b>
                  </h4>
                  <div className="col"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card p-4">
                    <h4>
                      <b>Tasks</b>
                    </h4>
                    <div className="row">
                      <div className="col">
                        <b>7</b>
                        <p>Pending</p>
                      </div>
                      <div className="col">
                        <b>6</b>
                        <p>Overdue</p>
                      </div>
                      <div className="col text-center">
                        <i className="fa fa-list text-lightest" style={{ fontSize: '25px', color: 'gray' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  {/* Right Section */}
                  <div className="card p-4">
                    <div className="row">
                      <h4>
                        <b>Projects</b>
                      </h4>
                      <div className="row">
                        <div className="col-sm-4">
                          <b>7</b>
                          <p>In Progress</p>
                        </div>
                        <div className="col">
                          <b>6</b>
                          <p>Overdue</p>
                        </div>
                        <div className="col text-center">
                          <i className="fa fa-layer-group" style={{ fontSize: '25px', color: 'gray' }}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-4">
                <b>Week Timelogs</b>
              </div>
              <div className="card p-4">
                <b>My Tasks</b>
              </div>
              <div className="card p-4">
                <b>Tickets</b>
              </div>
              <div className="card p-4">
                <b>My Calendar</b>
              </div>
              <div className="card p-4">
                <b>Notices</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeDashboard;
