import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminHolidayForm = () => {
    const [holidays, setHolidays] = useState([{ date: '', occasion: '' }]);
    const [department, setDepartment] = useState([]);
    const [designation,setDesignation]=useState([]);

    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/departments");
            setDepartment(response.data);
            const designationResponse =await axios.get("http://localhost:8080/designations");
            setDesignation(designationResponse.data);
        }
        catch (error) {
            console.log("data fetching failed", error)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    const handleAddRow = () => {
        setHolidays([...holidays, { date: '', occasion: '' }]);
    };

    const handleRemoveRow = (index) => {
        const newHolidays = holidays.filter((_, i) => i !== index);
        setHolidays(newHolidays);
    };

    const handleChange = (index, field, value) => {
        const newHolidays = holidays.map((holiday, i) => {
            if (i === index) {
                return { ...holiday, [field]: value };
            }
            return holiday;
        });
        setHolidays(newHolidays);
    };

    return (
        <>
            <div className="row">
            <div className="col">
                        <div className="card">
                        <div className="row">
                            <div className="col">
                                <h3><b>Add Holiday</b></h3>
                            </div>
                        </div>
                        <hr />
                        <form action="">
                            {holidays.map((holiday, index) => (
                                <div className="row mb-3" key={index}>
                                    <div className="col">
                                        <label htmlFor={`date-${index}`}>Date</label>
                                        <input
                                            type="text"
                                            id={`date-${index}`}
                                            className="form-control"
                                            value={holiday.date}
                                            onChange={(e) => handleChange(index, 'date', e.target.value)}
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor={`occasion-${index}`}>Occasion</label>
                                        <input
                                            type="text"
                                            id={`occasion-${index}`}
                                            className="form-control"
                                            value={holiday.occasion}
                                            onChange={(e) => handleChange(index, 'occasion', e.target.value)}
                                        />
                                    </div>
                                    <div className="col-auto d-flex align-items-end pb-3">
                                        <i
                                            type="button"
                                            className="fa fa-times text-danger"
                                            onClick={() => handleRemoveRow(index)}
                                        >
                                        </i>
                                    </div>
                                </div>
                            ))}
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <b>
                                        <i className="fa fa-plus-circle text-blue" onClick={handleAddRow}></i> Add
                                    </b>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="department">Department</label>
                                    <select name="department" id="department" className="form-select">
                                        <option>--</option>
                                        {department && department.map((dept)=>{
                                            return <option value={dept.departmentName}>{dept.departmentName}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="designation">Designation</label>
                                    <select name="designation" id="designation" className="form-select">
                                        <option>--</option>
                                        {designation && designation.map((desg)=>{
                                            return<option value={desg.name}>{desg.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="employment-type">Employment Type</label>
                                    <select name="employment-type" id="employment-type" className="form-select">
                                        <option>--</option>
                                        <option value="Full time">Full time</option>
                                        <option value="Part time">Part time</option>
                                        <option value="On Contract">On Contract</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Trainee">Trainee</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <button className="btn btn-white" type="submit">
                                        Submit
                                    </button>{' '}
                                    &nbsp;
                                    <button className="btn btn-white" type="reset">
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default AdminHolidayForm;
