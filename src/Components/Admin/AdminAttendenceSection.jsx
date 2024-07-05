// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function AdminAttendanceSection() {
//     const [attendance, setAttendance] = useState([]);
//     const [employees, setEmployees] = useState([]);
//     const [currentDate, setCurrentDate] = useState(new Date());

//     async function getData() {
//         try {
//             const responseEmp = await axios.get("http://localhost:8080/allEmployee");
//             setEmployees(responseEmp.data);

//             // const responseAttendance = await axios.get("http://localhost:8080/clockAttendance/clock-in");
//             // setAttendance(responseAttendance.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }

//     useEffect(() => {
//         getData();
//     }, [currentDate]);

//     const getDateForDay = (day) => {
//         return new Date(currentDate.getFullYear(), currentDate.getMonth(), day + 1);
//     };

//     const datesAreEqual = (date1, date2) => {
//         return (
//             date1.getDate() === date2.getDate() &&
//             date1.getMonth() === date2.getMonth() &&
//             date1.getFullYear() === date2.getFullYear()
//         );
//     };

//     // Function to format the current date as "Month Year"
//     const getFormattedDate = () => {
//         const options = { month: 'long', year: 'numeric' };
//         return currentDate.toLocaleDateString('en-US', options);
//     };

//     // Function to navigate to the previous month
//     const goToPreviousMonth = () => {
//         setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
//     };

//     // Function to navigate to the current month
//     const goToCurrentMonth = () => {
//         setCurrentDate(new Date());
//     };

//     const hasAttendance = (employeeId, date) => {
//         return attendance.some(attendance =>
//             attendance.empId === employeeId && datesAreEqual(new Date(attendance.date), date)
//         );
//     };

//     return (
//         <div className="page-wrapper">
//             <div className="content container-fluid">
//                 <div className="page-header">
//                     <div className="row">
//                         <div className="col-sm-12">
//                             <h3 className="page-title">Attendance - {getFormattedDate()}</h3>
//                             <ul className="breadcrumb">
//                                 <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
//                                 <li className="breadcrumb-item active">Attendance</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col text-end">
//                             <button className="btn btn-white me-2" onClick={goToPreviousMonth}>Previous Month</button>
//                             <button className="btn btn-white" onClick={goToCurrentMonth}>Current Month</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="table-responsive">
//                     <table className="table table-striped custom-table table-nowrap mb-0">
//                         <thead>
//                             <tr>
//                                 <th>Employee</th>
//                                 {[...Array(31).keys()].map(day => (
//                                     <th key={day + 1}>
//                                         <div>
//                                             <div>{day + 1}</div>
//                                             <div>{getDateForDay(day).toLocaleDateString('en-US', { weekday: 'short' })}</div>
//                                         </div>
//                                     </th>
//                                 ))}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {employees.map(employee => (
//                                 <tr key={employee.empId}>
//                                     <td>
//                                         <div className="d-flex align-items-center">
//                                             <img src={`data:image/png;base64,${employee.imageData}`} alt="Employee Avatar" className="avatar avatar-xs img-fluid me-2" />
//                                             <div>{employee.empName}</div>
//                                         </div>
//                                     </td>
//                                     {[...Array(31).keys()].map(day => {
//                                         const currentDate = getDateForDay(day);
//                                         const hasRecord = hasAttendance(employee.empId, currentDate);
//                                         return (
//                                             <td key={day + 1}>
//                                                 {hasRecord ? (
//                                                     <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//                                                         <i className="fa fa-check text-success"></i>
//                                                     </a>
//                                                 ) : (
//                                                     <i className="fa fa-times text-danger"></i>
//                                                 )}
//                                             </td>
//                                         );
//                                     })}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AdminAttendanceSection;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AdminAttendanceSection() {
    const [attendance, setAttendance] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());

    async function getData() {
        try {
            const responseEmp = await axios.get("http://localhost:8080/allEmployee");
            setEmployees(responseEmp.data);

            const responseAttendance = await axios.get("http://localhost:8080/clockAttendance/clock-in");
            setAttendance(responseAttendance.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getData();
    }, [currentDate]);

    const getDateForDay = (day) => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), day + 1);
    };

    const datesAreEqual = (date1, date2) => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    };

    const getFormattedDate = () => {
        const options = { month: 'long', year: 'numeric' };
        return currentDate.toLocaleDateString('en-US', options);
    };

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const goToCurrentMonth = () => {
        setCurrentDate(new Date());
    };

    const hasAttendance = (employeeId, date) => {
        return attendance.some(attendance =>
            attendance.employeeId === employeeId && datesAreEqual(new Date(attendance.attendanceDate), date)
        );
    };

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Attendance - {getFormattedDate()}</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                <li className="breadcrumb-item active">Attendance</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-end">
                            <button className="btn btn-white me-2" onClick={goToPreviousMonth}>Previous Month</button>
                            <button className="btn btn-white" onClick={goToCurrentMonth}>Current Month</button>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped custom-table table-nowrap mb-0">
                        <thead>
                            <tr>
                                <th>Employee</th>
                                {[...Array(31).keys()].map(day => (
                                    <th key={day + 1}>
                                        <div>
                                            <div>{day + 1}</div>
                                            <div>{getDateForDay(day).toLocaleDateString('en-US', { weekday: 'short' })}</div>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.empId}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src={`data:image/png;base64,${employee.imageData}`} alt="Employee Avatar" className="avatar avatar-xs img-fluid me-2" />
                                            <div>{employee.empName}</div>
                                        </div>
                                    </td>
                                    {[...Array(31).keys()].map(day => {
                                        const currentDate = getDateForDay(day);
                                        const hasRecord = hasAttendance(employee.empId, currentDate);
                                        return (
                                            <td key={day + 1}>
                                                {hasRecord ? (
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        <i className="fa fa-check text-success"></i>
                                                    </a>
                                                ) : (
                                                    <i className="fa fa-times text-danger"></i>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminAttendanceSection;
