import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import axios from 'axios';

const AdminBulkShiftForm = () => {
    const [selectedFilms, setSelectedFilms] = useState([]);
    const [selectedemployee, setSelectedemployee] = useState([]);
    const [employeeData, setEmployeeData] = useState('');
    const [formData, setFormData] = useState({
        selectedemployee: '',
        department: '',
        shiftType: '',
        assignType: 'date',
        leaveDate: '',
        moth: '',
        sendEmail: false,
        remark: '',
        files: []
    });
    const [selectedRange, setSelectedRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });
    async function getEmployee() {
        try {
            const response = await axios.get("http://localhost:8080/allEmployee");
            if (response.data) {
                setEmployeeData(response.data)
            }
        } catch (error) {
            console.error('Error fetching employee data:', error);
        }
    }
    useEffect(() => {
        getEmployee();
    }, [])

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: val
        }));
    };
    const handleFilmsChange = (event, value) => {
        setSelectedFilms(value);
    };
    const handleSelect = (ranges) => {
        setSelectedRange(ranges.selection);
        setFormData(prevState => ({
            ...prevState,
            leaveDate: ranges.selection
        }));
    };
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prevState => ({
            ...prevState,
            files: files
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);

        // Example: Submit formData to backend endpoint
        // axios.post('http://localhost:8080/submit-shift', formData)
        //     .then(response => {
        //         console.log('Submitted successfully:', response);
        //         // Optionally handle success response
        //     })
        //     .catch(error => {
        //         console.error('Error submitting form:', error);
        //         // Optionally handle error
        //     });
    };
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Add Shift Roaster</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="department" className="form-label">Department</label>
                                        <select id="department" name="department" className="form-select" value={formData.department} onChange={handleInputChange}>
                                            <option value="">-- Select Department --</option>
                                            <option value="dept1">Department 1</option>
                                            <option value="dept2">Department 2</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="employees" className="form-label">Employees</label>
                                        <Autocomplete
                                            multiple
                                            options={employeeData}
                                            getOptionLabel={(option) => option.empName}
                                            value={selectedemployee}
                                            onChange={(event, newValue) => {
                                                setSelectedemployee(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="employee"
                                                    placeholder="Select Employee"
                                                />
                                            )}
                                        />

                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col mb-3">
                                        <label htmlFor="shiftType" className="form-label">Employee Shift<span className="text-danger">*</span></label>
                                        <select id="shiftType" name="shiftType" className="form-select" value={formData.shiftType} onChange={handleInputChange}>
                                            <option value="">-- Select Shift Type --</option>
                                            <option value="Day Off">Day Off</option>
                                            <option value="General Shift">General Shift [09:00:00 To 18:00:00]</option>
                                            <option value="Night Shift">Night Shift [22:00:00 To 06:00:00]</option>
                                            <option value="Day Shift">Day Shift [08:00:00 To 17:00:00]</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Assign Shift By</label>
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" id="assignDate" name="assignType" value="date" checked={formData.assignType === 'date'} onChange={handleInputChange} />
                                                    <label className="form-check-label" htmlFor="assignDate">Date</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" id="assignMultiple" name="assignType" value="multiple" checked={formData.assignType === 'multiple'} onChange={handleInputChange} />
                                                    <label className="form-check-label" htmlFor="assignMultiple">Multiple</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" id="assignMonth" name="assignType" value="month" checked={formData.assignType === 'month'} onChange={handleInputChange} />
                                                    <label className="form-check-label" htmlFor="assignMonth">Month</label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                {formData.assignType === 'date' && (
                                                    <div className="mt-2">
                                                        <input type="date" id="leaveDate" name="leaveDate" className="form-control" value={formData.leaveDate} onChange={handleInputChange} />
                                                    </div>
                                                )}
                                                {formData.assignType === 'multiple' && (
                                                    <div className="mt-2">
                                                        <DateRangePicker
                                                            ranges={[selectedRange]}
                                                            onChange={handleSelect}
                                                        />
                                                    </div>
                                                )}
                                                {formData.assignType === 'month' && (
                                                    <div className="row mt-2">
                                                        <div className="col">
                                                            <label htmlFor="">Month</label>
                                                            <input type="month" name="" id="" value={formData.month} onChange={handleInputChange} className='form-control' />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="sendEmail" name="sendEmail" checked={formData.sendEmail} onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="sendEmail">Send Email</label>
                                            <div className="row mb-2">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label className="col-form-label">Employee Shift<span className="text-danger">*</span></label>
                                                        <select className="form-select">
                                                            <option value="">Select</option>
                                                            <option value="Day Off"><img src="/assets/img/client-small.png" alt="" />Day Off</option>
                                                            <option value="General Shift [ 09:00:00 To 18:00:00]">General Shift [ 09:00:00 To 18:00:00]</option>
                                                            <option value="Night Shift [ 22:00:00 To 06:00:00 ]">Night Shift [ 22:00:00 To 06:00:00 ]</option>
                                                            <option value="Day Shift [ 08:00:00 To 17:00:00 ]">Day Shift [ 08:00:00 To 17:00:00 ]</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col pt-2">
                                                    <label htmlFor="">Assign Shift By</label><br />
                                                    <div className='pt-3'>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                            <label className="form-check-label" htmlFor="inlineRadio1">Date</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                            <label className="form-check-label" htmlFor="inlineRadio2">Multiple</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                                            <label className="form-check-label" htmlFor="inlineRadio3">Month</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col"></div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" />
                                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Send Email</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col">
                                                    <label htmlFor="">Remark</label>
                                                    <textarea name="" id="" className='form-control' ></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col mb-3">
                                                <label htmlFor="remark" className="form-label">Remark</label>
                                                <textarea id="remark" name="remark" className="form-control" value={formData.remark} onChange={handleInputChange}></textarea>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="files" className="form-label">Add File</label>
                                                <input type="file" id="files" className="form-control" onChange={handleFileChange} multiple />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <button type="submit" className="btn btn-white">Save</button> &nbsp;
                                            <button type="button" className="btn btn-white" data-bs-dismiss="offcanvas">Cancel</button>
                                        </div>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>

            </>
            );
}

            export default AdminBulkShiftForm;
