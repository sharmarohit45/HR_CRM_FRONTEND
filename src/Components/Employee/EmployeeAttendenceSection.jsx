import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EmployeeAttendenceSection = () => {
   // Example data for demonstration
   const [attendanceData, setAttendanceData] = useState([
    { id: 'Emp_01', name: 'Employee Name', attendance: [true, true, true, true, true, true, false, true, true, false , true, true, true, true, true, true, true, true, false, true, true, false, true, true, true, false, true, true] },
    // Add more data as needed
]);

return (
    <div className="page-wrapper">
        <div className="content container-fluid">
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="page-title">Attendance</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                            <li className="breadcrumb-item active">Attendance</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <table className="table table-striped custom-table table-nowrap mb-0">
                            <thead>
                                <tr>
                                    <th>Employee</th>
                                    {/* Dynamically generate headers for each day */}
                                    {[...Array(31).keys()].map(day => (
                                        <th key={day + 1}>{day + 1}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* Map over attendance data to generate rows */}
                                {attendanceData.map(employee => (
                                    <tr key={employee.id}>
                                        <td>
                                            <h2 className="table-avatar">
                                                <a className="avatar avatar-xs" href="profile.html"><img alt="" src="/assets/img/profiles/avatar-09.jpg" /></a>
                                                <a href="profile.html">{employee.name}</a>
                                            </h2>
                                        </td>
                                        {/* Dynamically generate attendance cells */}
                                        {employee.attendance.map((status, index) => (
                                            <td key={index}>
                                                {status ? (
                                                    <a href="" data-bs-toggle="modal" data-bs-target="#attendance_info"><i className="fa fa-check text-success"></i></a>
                                                ) : (
                                                    <div className="half-day">
                                                        <span className="first-off"><a href="" data-bs-toggle="modal" data-bs-target="#attendance_info"><i className="fa fa-check text-success"></i></a></span>
                                                        <span className="first-off"><i className="fa fa-close text-danger"></i></span>
                                                    </div>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal custom-modal fade" id="attendance_info" role="dialog">
        </div>
    </div>
);
}

export default EmployeeAttendenceSection