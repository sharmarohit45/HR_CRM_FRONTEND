import React, { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import axios from 'axios';

const AdminAddAttendance = () => {
    const [monthVisible, setMonthVisible] = useState(false);
    const [emp, setEmp] = useState();
    const [departments, setDepartments] = useState();
    const [dateVisible, setDateVisible] = useState(false);
    const [selectedRange, setSelectedRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });
    const [formData, setFormData] = useState({
        department: '',
        employee: '',
        location: 'Office',
        markAttendanceBy: '',
        month: '',
        date: '',
        clockIn: '',
        clockOut: '',
        late: '',
        halfDay: ''
    });

    const currentDate = new Date();
    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/allEmployee");
            setEmp(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        async function getdepartments() {
            try {
                const response = await axios.get("http://localhost:8080/departments");
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getdepartments();
    }, [])
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'markAttendanceBy') {
            if (value === 'month') {
                setMonthVisible(true);
                setDateVisible(false);
            } else if (value === 'date') {
                setMonthVisible(false);
                setDateVisible(true);
            } else {
                setMonthVisible(false);
                setDateVisible(false);
            }
        }
    };

    const handleDateRangeChange = (ranges) => {
        const { selection } = ranges;
        setSelectedRange(selection);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            ...formData,
            startDate: selectedRange.startDate,
            endDate: selectedRange.endDate
        };
        console.log(formData);
         try {
             const response = await axios.post('http://localhost:8080/attendence', data);
             console.log('Response:', response.data);
             // Optionally, handle success response here (e.g., show a success message)
         } catch (error) {
             console.error('Error:', error);
             // Optionally, handle error response here (e.g., show an error message)
         }
    };
    

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="row">
                            <div className="col">
                                <h3>Attendance Details</h3>
                            </div>
                        </div><hr />
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="department">Department</label>
                                    <select
                                        name="department"
                                        className="form-select"
                                        value={formData.department}
                                        onChange={handleInputChange}
                                    >
                                        
                                        {departments && departments.map(dep => (
                                            <option value={dep.departmentId}>
                                                {dep.departmentName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="employee">Employees</label>
                                    <select
                                        name="employee"
                                        className="form-select"
                                        value={formData.employee}
                                        onChange={handleInputChange}
                                    >
                                        {emp && emp.map(emp => (
                                            <option key={emp.id} value={emp.id}>
                                                {emp.empName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="location">Location</label>
                                    <select
                                        name="location"
                                        className="form-select"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                    >
                                        <option value="Office">Office</option>
                                        <option value="Work From Home">Work From Home</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="markAttendanceBy">Mark Attendance By</label>
                                    <br />
                                    <div className="form-check form-check-inline mt-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="markAttendanceBy"
                                            value="month"
                                            checked={formData.markAttendanceBy === 'month'}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Month</label>
                                    </div>
                                    <div className="form-check form-check-inline mt-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="markAttendanceBy"
                                            value="date"
                                            checked={formData.markAttendanceBy === 'date'}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Date</label>
                                    </div>
                                </div>
                                {monthVisible && (
                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="month">Month</label>
                                                <input
                                                    type="month"
                                                    name="month"
                                                    id="month"
                                                    className='form-control'
                                                    value={formData.month}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {dateVisible && (
                                    <div className="col">
                                        <DateRangePicker
                                            ranges={[selectedRange]}
                                            onChange={handleDateRangeChange}
                                            minDate={currentDate}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="clockIn">Clock In</label>
                                    <input
                                        type="time"
                                        name="clockIn"
                                        id="clockIn"
                                        className='form-control'
                                        value={formData.clockIn}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="clockOut">Clock Out</label>
                                    <input
                                        type="time"
                                        name="clockOut"
                                        id="clockOut"
                                        className='form-control'
                                        value={formData.clockOut}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="late">Late</label><br />
                                    <div className="form-check form-check-inline mt-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="late"
                                            value="yes"
                                            checked={formData.late === 'yes'}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="late"
                                            value="no"
                                            checked={formData.late === 'no'}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="halfDay">Half Day</label><br />
                                    <div className="form-check form-check-inline mt-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="halfDay"
                                            value="yes"
                                            checked={formData.halfDay === 'yes'}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="halfDay"
                                            value="no"
                                            checked={formData.halfDay === 'no'}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <button type="submit" className="btn btn-white">Save</button> &nbsp;
                                    <button type="button" className="btn btn-white" data-bs-dismiss="offcanvas">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminAddAttendance;
