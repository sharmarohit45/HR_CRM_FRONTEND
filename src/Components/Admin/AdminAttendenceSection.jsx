import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminAddAttendence from './AdminAddAttendence';

function AdminAttendenceSection() {
    const [attendance, setAttendance] = useState([]);
    const [emp, setEmp] = useState([]);

    async function getData() {
        try {
            const responseEmp = await axios.get("http://localhost:8080/allEmployee");
            setEmp(responseEmp.data);

            const responseAttendance = await axios.get("http://localhost:8080/attendance");
            setAttendance(responseAttendance.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

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
                    <div className="col">
                        <button type='button' className='btn btn-white mb-3' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Mark Attendance</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        {[...Array(31).keys()].map(day => (
                                            <th key={day + 1}>{day + 1}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {emp.map(employee => (
                                        <tr key={employee.empId}>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a className="avatar avatar-xs" href="profile.html"><img src={`data:image/png;base64,${employee.imageData}`} alt="Employee Avatar" /></a>
                                                    <a href="profile.html">{employee.empName}</a>
                                                </h2>
                                            </td>
                                            {[...Array(31).keys()].map(day => (
                                                <td key={day + 1}>
                                                    {attendance.length > 0 && attendance[day] && attendance[day][employee.empId - 1] ? (
                                                        <a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa fa-check text-success"></i></a>

                                                    ) : (
                                                        <div className="half-day">
                                                            <span className="first-off"><i className="fa fa-check text-success"></i></span>
                                                            <span className="second-off"><i className="fa fa-close text-danger"></i></span>
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
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Modal content...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                <div className="offcanvas-header">
                    <h2 id="offcanvasRightLabel" className='text-bold'><b>Mark Attendance</b></h2>
                    <button type="button" className="btn-close text-reset" data-bs-toggle="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <AdminAddAttendence />
                </div>
            </div>
        </div>
    );
}

export default AdminAttendenceSection;
