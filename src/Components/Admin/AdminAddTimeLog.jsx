import React, { useState } from 'react';
import axios from 'axios';

const AdminAddTimeLog = () => {
    const [project, setProject] = useState('');
    const [task, setTask] = useState('');
    const [employee, setEmployee] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [memo, setMemo] = useState('');
    const [totalHours, setTotalHours] = useState(0);
    const [totalMinutes, setTotalMinutes] = useState(0);

    const handleStartTimeChange = (event) => {
        const start = event.target.value;
        setStartTime(start);
        calculateTotalHours(start, endTime);
    };

    const handleEndTimeChange = (event) => {
        const end = event.target.value;
        setEndTime(end);
        calculateTotalHours(startTime, end);
    };

    const calculateTotalHours = (start, end) => {
        if (start && end) {
            const startDateTime = new Date(`1970-01-01T${start}:00`);
            const endDateTime = new Date(`1970-01-01T${end}:00`);
            const diffMs = endDateTime - startDateTime; // difference in milliseconds

            if (diffMs > 0) {
                const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
                const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
                setTotalHours(diffHours);
                setTotalMinutes(diffMinutes);
            } else {
                setTotalHours(0);
                setTotalMinutes(0);
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const timeLogData = {
            project,
            task,
            employee,
            startDate,
            startTime,
            endDate,
            endTime,
            memo,
            totalHours,
            totalMinutes,
        };

        try {
            const response = await axios.post('YOUR_API_ENDPOINT', timeLogData);
            console.log(response.data);
            // Handle success response
        } catch (error) {
            console.error(error);
            // Handle error response
        }
    };

    const handleCancel = (event) => {
        event.preventDefault();
        // Additional logic for cancel action if needed
    };

    return (
        <div className="row mt-3">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3>TimeLog Details</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="project">Project</label>
                                    <select className="form-select" value={project} onChange={(e) => setProject(e.target.value)}>
                                        <option value="" disabled>Select Project</option>
                                        <option value="1">Project One</option>
                                        <option value="2">Project Two</option>
                                        <option value="3">Project Three</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="task">Task</label>
                                    <select className="form-select" value={task} onChange={(e) => setTask(e.target.value)}>
                                        <option value="" disabled>Select Task</option>
                                        <option value="1">Task One</option>
                                        <option value="2">Task Two</option>
                                        <option value="3">Task Three</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="employee">Employee</label>
                                    <select className="form-select" value={employee} onChange={(e) => setEmployee(e.target.value)}>
                                        <option value="" disabled>Select Employee</option>
                                        <option value="1">Employee One</option>
                                        <option value="2">Employee Two</option>
                                        <option value="3">Employee Three</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="startDate">Start Date</label>
                                    <input type="date" id="startDate" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="startTime">Start Time</label>
                                    <input type="time" id="startTime" className="form-control" value={startTime} onChange={handleStartTimeChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="endDate">End Date</label>
                                    <input type="date" id="endDate" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="endTime">End Time</label>
                                    <input type="time" id="endTime" className="form-control" value={endTime} onChange={handleEndTimeChange} />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="memo">Memo</label>
                                    <input type="text" className="form-control" value={memo} onChange={(e) => setMemo(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="totalHours">Total Time</label>
                                    <input type="text" id="totalHours" className="form-control" value={`${totalHours} hours ${totalMinutes} minutes`} readOnly />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    <button type="submit" className="btn btn-primary">Save</button> &nbsp;
                                    <button type="button" className="btn btn-secondary" onClick={handleCancel} data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddTimeLog;
