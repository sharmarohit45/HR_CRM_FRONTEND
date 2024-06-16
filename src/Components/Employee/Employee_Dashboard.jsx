import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmployeeDashboard() {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  const [user, setUser] = useState({});
  const [imageUrl, setImageUrl] = useState(null);
  // const profileOnchange = (email) => {
  //   navigate('/admin/employee-profile/:empId', { state: { email: email } });
  // };
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
  const handleLogout = () => {
		localStorage.removeItem('token');
	}

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
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-6">
              <h4>
                <b>Welcome {user.empName}</b>
              </h4>
            </div>
            <div className="col-6 d-flex justify-content-end"></div>
          </div>
          <div className="row">
            <div className="col-sm-5">
              {/* PROFILE CARD */}
              <div className="card p-4">
                <div className="row">
                  <div className="col p-2">
                    <img
                      src={`data:image/png;base64,${user.imageData}`} 
                      style={{ height: '120px', width: '120px', padding: '10px' ,borderRadius:'25%'}}
                    />
                    {user.imageUrl}
                  </div>
                  <div className="col pt-4">
                      <p style={{fontSize:'smaller',fontSize:'15px'}}><b style={{fontSize:'20px'}}>{user.empName}</b> <br />{user.designation} <br /> <p style={{fontSize:'13px',color:'gray'}}>Employee Id : {user.employeeId} </p></p>
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
