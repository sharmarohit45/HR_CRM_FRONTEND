import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminBulkShiftForm from './AdminBulkShiftForm';

function AdminShiftRoaster() {
    const [dates, setDates] = useState([]);
    const [currentWeek, setCurrentWeek] = useState(0);
    const [shifts, setShifts] = useState([]);
    const [formData, setFormData] = useState({
        employeeId: '',
        employeeShift:'',
        remark: '',
        date: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        generateDates(currentWeek);
    }, [currentWeek]);

    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/allEmployee");
            setShifts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const generateDates = (weekOffset) => {
        const today = new Date();
        today.setDate(today.getDate() + weekOffset * 7 - today.getDay());
        const tempDates = [];
        for (let i = 0; i < 7; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            tempDates.push(nextDate.toDateString().slice(4, 10));
        }
        setDates(tempDates);
    };

    const handleNextWeek = () => {
        setCurrentWeek(currentWeek + 1);
    };

    const handlePrevWeek = () => {
        setCurrentWeek(currentWeek - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitData = new FormData();
        submitData.append('employeeId', formData.employeeId);
        submitData.append('employeeShift', formData.employeeShift);
        submitData.append('remark', formData.remark);
        submitData.append('date', formData.date);
        if (formData.file) {
            submitData.append('file', formData.file);
        }

        try {
            const response = await axios.post('http://localhost:8080/shift', submitData);
            console.log('Shift submitted:', response.data);

            // Assuming you want to update the shifts after successful submission
            // Fetch updated data or update the local state accordingly
            getData(); // This will refetch the shifts after successful submission
        } catch (error) {
            if (error.response) {
                console.error('Error submitting shift:', error.response.data);
            } else {
                console.error('Error submitting shift:', error.message);
            }
        }
    };

    const renderShift = (employeeId, date) => {
        const shift = shifts.find(shift => shift.empId === employeeId && new Date(shift.start).toDateString().slice(4, 10) === date);
        if (shift) {
            return (
                <div className="user-add-shedule-list">
                    <h2>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_schedule" style={{ border: '2px dashed #1eb53a' }}>
                            <span className="username-info m-b-10">{`${new Date(shift.start).toLocaleTimeString()} - ${new Date(shift.end).toLocaleTimeString()} (${Math.abs(new Date(shift.end) - new Date(shift.start)) / 36e5} hrs)`}</span>
                            <span className="userrole-info">{shift.title}</span>
                        </a>
                    </h2>
                </div>
            );
        } else {
            return (
                <div className="user-add-shedule-list">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#add_schedule">
                        <span><i className="fa fa-plus"></i></span>
                    </a>
                </div>
            );
        }
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Shift Roaster</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Shift Roaster</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="row filter-row">
                        <div className="col">
                            <div className="row p-3" style={{ fontSize: 'smaller', textAlign: 'center' }}>
                                <div className="col text-white p-1" style={{ backgroundColor: '#99C7F1', fontSize: 'smaller' }} ><b>GS : General Shift</b></div> &nbsp;
                                <div className="col text-white p-1" style={{ backgroundColor: 'black', fontSize: 'smaller' }}><b>NS : Night Shift</b></div> &nbsp;
                                <div className="col text-white p-1" style={{ backgroundColor: 'red', fontSize: 'smaller' }}><b>DS : Day Shift</b></div> &nbsp;
                                <div className="col text-dark p-1" style={{ backgroundColor: 'white', fontSize: 'smaller' }}><b><i className='fa fa-star'></i> :Holiday</b></div>
                            </div>
                        </div>
                        <div className="col text-end">
                            <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Bulk Shifts</button>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <button onClick={handlePrevWeek} className="btn btn-white"><i className="fa fa-angle-left"></i> Previous Week</button>&nbsp;
                            <button onClick={handleNextWeek} className="btn btn-white">Next Week <i className="fa fa-angle-right"></i></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Employee</th>
                                            {dates.map((date, index) => (
                                                <th key={index}>{date}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {shifts.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="#" className="avatar">
                                                            <img src={`data:image/png;base64,${item.imageData}`} alt="Employee Avatar" />
                                                        </a>
                                                        <Link to="">{item.empName} <span>{item.designation}</span></Link>
                                                    </h2>
                                                </td>
                                                {dates.map((date, index) => (
                                                    <td key={index}>
                                                        {renderShift(item.empId, date)}
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
            </div>
            <div id="add_schedule" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-start">Update Shift</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col">
                                        <h3>Date :</h3>
                                    </div>
                                    <div className="col">
                                        <input type="date" name="date" value={formData.date} onChange={handleChange} className='form-control' required />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <h3>Employee ID :</h3>
                                    </div>
                                    <div className="col">
                                        <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} className='form-control' required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="col-form-label" htmlFor='employeeShift'>Employee Shift<span className="text-danger">*</span></label>
                                            <select className="form-select" name="employeeShift" value={formData.employeeShift} onChange={handleChange} required>
                                                <option value="">Select</option>
                                                <option value="Day Off">Day Off</option>
                                                <option value="General Shift [ 09:00:00 To 18:00:00]">General Shift [ 09:00:00 To 18:00:00]</option>
                                                <option value="Night Shift [ 22:00:00 To 06:00:00 ]">Night Shift [ 22:00:00 To 06:00:00 ]</option>
                                                <option value="Day Shift [ 08:00:00 To 17:00:00 ]">Day Shift [ 08:00:00 To 17:00:00 ]</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="col-form-label">Remark</label>
                                            <textarea name="remark" value={formData.remark} onChange={handleChange} className='form-control'></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="col-form-label">Add File</label>
                                            <input type="file" name="file" onChange={handleChange} className='form-control' />
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-section">
                                    <button type="submit" className="btn btn-white submit-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                <div className="offcanvas-header">
                    <h2 id="offcanvasRightLabel" className='text-bold'><b>Assign Bulk Shifts</b></h2>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <AdminBulkShiftForm />
                </div>
            </div>
        </>
    );
}

export default AdminShiftRoaster;
