
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Chart from "react-apexcharts";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupsIcon from '@mui/icons-material/Groups';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import FingerprintSharpIcon from '@mui/icons-material/FingerprintSharp';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts';
function AdminHrTab() {

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>HR Dashboard</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">HR Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    <div className="card">
                        <div className="row">
                            <div className="col">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <div className="container-fluid">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <MoreVertIcon />
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <Link className="nav-link" aria-current="page" to="/admin">Overview</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/project-tab">Project</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/client-tab">Client</Link>
                                                </li>
                                                <li className="nav-item" style={{ borderBottom: '2px solid orange' }}>
                                                    <Link className="nav-link active" to="/admin/hr-tab">HR</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/ticket-tab">Ticket</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/finance-tab">Finance</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Leaves Approved </b></h4>
                                            <p>0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <FlightTakeoffIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Employees</b></h4>
                                            <p>0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <GroupsIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row fs-6">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Employee Exits </b></h4>
                                            <p>0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <ExitToAppIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Today Attendance</b></h4>
                                            <p>0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <EventAvailableSharpIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-4">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Average Attendance</b></h4>
                                            <p>0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <FingerprintSharpIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2"></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Department Wise Employee</b></h4>
                                <div className="row">
                                    {/* DATA SECTION */}
                                    <div className="col mt-4" style={{ height: '250px', fontSize: 'smaller' }}>
                                        <PieChart
                                            series={[
                                                {
                                                    data: [
                                                        { id: 0, value: 1, label: 'Marketing' },
                                                        { id: 1, value: 4, label: 'Sales' },
                                                        { id: 2, value: 1, label: 'Human Resource' },
                                                        { id: 3, value: 5, label: 'Public Relations' },
                                                        { id: 4, value: 2, label: 'Research' },
                                                        { id: 5, value: 3, label: 'Finance' },
                                                    ],
                                                },
                                            ]}
                                            width={500}
                                            height={200}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Designation Wise Employee </b></h4>
                                <div className="row">
                                    {/* DATA SECTION */}
                                    <div className="col mt-4" style={{ height: '250px', fontSize: 'smaller' }}>
                                        <PieChart
                                            series={[
                                                {
                                                    data: [
                                                        { id: 0, value: 1, label: 'Trainee' },
                                                        { id: 1, value: 3, label: 'Senior' },
                                                        { id: 2, value: 5, label: 'Junior' },
                                                        { id: 3, value: 1, label: 'Team Lead' },
                                                        { id: 4, value: 3, label: 'Manager' },
                                                    ],
                                                },
                                            ]}
                                            width={400}
                                            height={200}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Gender Wise Employee </b></h4>
                                <div className="row">
                                    {/* DATA SECTION */}
                                    <div className="col mt-4" style={{ height: '250px', fontSize: 'smaller' }}>
                                        {/* <Chart
                                            type="pie"
                                            series={genderPercentage}
                                            options={{
                                                noData: { text: "Empty Data" },
                                                labels: genderData
                                            }}
                                            height="100%"
                                            width="100%"
                                        /> */}
                                        <PieChart
                                            series={[
                                                {
                                                    data: [
                                                        { id: 0, value: 3, label: 'Male' },
                                                        { id: 1, value: 1, label: 'Female' },
                                                    ],
                                                },
                                            ]}
                                            width={400}
                                            height={200}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Role Wise Employee</b></h4>
                                <div className="row">
                                    {/* DATA SECTION */}
                                    <div className="col mt-3" style={{ height: '250px', fontSize: 'smaller' }}>
                                        <PieChart
                                            series={[
                                                {
                                                    data: [
                                                        { id: 0, value: 1, label: 'Admin' },
                                                        { id: 1, value: 13, label: 'Employee' },
                                                        { id: 2, value: 1, label: 'Manager' },
                                                    ],
                                                },
                                            ]}
                                            width={400}
                                            height={200}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Headcount</b></h4>
                                <div className="row">
                                    <div className="col">
                                        <BarChart
                                            xAxis={[
                                                {
                                                    id: 'barCategories',
                                                    data: ['bar A', 'bar B', 'bar C'],
                                                    scaleType: 'band',
                                                },
                                            ]}
                                            series={[
                                                {
                                                    data: [2, 5, 3],
                                                },
                                            ]}
                                            width={500}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Joining Vs Attrition</b></h4>
                                <LineChart
                                    series={[
                                        { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
                                        { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
                                    ]}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Leaves Taken</b></h4>
                                <div className='row text-center d-flex align-items-center justify-content-center' style={{ color: 'gray', fontSize: '15px', height: '100%' }}>
                                    <div className="col">
                                    <i className='fa fa-list'></i>
                                    <p>- No record found. -</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Birthdays</b></h4>
                                <div className='row text-center d-flex align-items-center justify-content-center' style={{ color: 'gray', fontSize: '15px', height: '100%' }}>
                                    <div className="col">
                                    <i className='fa fa-list'></i>
                                    <p>- No record found. -</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '350px', padding: '15px' }}>
                                <h4><b>Late Attendance</b></h4>
                                <div className='row text-center d-flex align-items-center justify-content-center' style={{ color: 'gray', fontSize: '15px', height: '100%' }}>
                                    <div className="col">
                                    <i className='fa fa-list'></i>
                                    <p>- No record found. -</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default AdminHrTab