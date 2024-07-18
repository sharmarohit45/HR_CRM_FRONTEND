import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const EmployeeMyLeaveSection = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const email = localStorage.getItem('email');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/allEmployee', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.data) {
                    throw new Error('Failed to fetch data');
                }

                const foundUser = response.data.find((item) => item.email === email);

                if (foundUser) {
                    setUser(foundUser);
                    // Handle imageData if needed
                } else {
                    setError('User not found');
                    navigate('/');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch user data');
            }
        };

        if (!email) {
            navigate('/');
        } else {
            fetchData();
        }
    }, [email, navigate]);

    return (
        <div className="page-wrapper">
            <div className="content container-fluid pb-0">
                {/* Page Header */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-head-box">
                            <h3>Leaves</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Leaves</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Navigation Buttons */}
                <div className="row mb-3">
                    <div className="col text-end">
                        <div className="btn-group">
                            <Link to="/employee/leaves" className="btn btn-white"><ListIcon /></Link>
                            <Link to="/employee/leaves-calendar" className="btn btn-white"><CalendarTodayIcon /></Link>
                            <Link to="/employee/my-leaves" className="btn btn-dark text-white"><PersonIcon /></Link>
                        </div>
                    </div>
                </div>
                {/* User Information Cards */}
                <div className="row mb-3">
                    <div className="col">
                        <div className="card p-3">
                            <div className="row align-items-center">
                                <div className="col-sm-3">
                                    <img
                                        src={`data:image/png;base64,${user.imageData}`}
                                        alt="Profile"
                                        style={{ height: '80px', width: '80px' }}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-sm-9">
                                    <h6 className="mb-0"><b>{user.empName}</b></h6>
                                    <p className="text-muted">{user.designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-3">
                            <div className="row align-items-center">
                                <div className="col-sm-8">
                                    <h6 className="mb-0"><b>Remaining Leaves</b></h6>
                                    <p className="mb-4 mt-3">15</p>
                                </div>
                                <div className="col-sm-4 text-center">
                                    <ExitToAppIcon style={{ color: 'gray', fontSize: '2rem' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Leaves Quota Table */}
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mb-4"><b>Leaves Quota</b></h4>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="text-center">
                                            <tr>
                                                <th>Leave Type</th>
                                                <th>No of Leaves</th>
                                                <th>Monthly Limit</th>
                                                <th>Total Leaves Taken</th>
                                                <th>Remaining Leaves</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr>
                                                <td>Casual</td>
                                                <td>5</td>
                                                <td>--</td>
                                                <td>0</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Sick</td>
                                                <td>5</td>
                                                <td>--</td>
                                                <td>0</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Earned</td>
                                                <td>3</td>
                                                <td>--</td>
                                                <td>0</td>
                                                <td>3</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Content */}
            </div>
        </div>
    );
};

export default EmployeeMyLeaveSection;
