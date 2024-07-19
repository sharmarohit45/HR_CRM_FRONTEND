import React, { useEffect, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function AdminAddLeaveForm() {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        employeeId: '',
        leaveType: '',
        status: 'Pending',
        leaveDuration: 'Full Day', // default value
        leaveDate: '',
        absenceReason: '',
        file: null,
    });

    const [selectedRange, setSelectedRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const handleSelect = (ranges) => {
        setSelectedRange(ranges.selection);
        setFormData(prevState => ({
            ...prevState,
            leaveDate: ranges.selection
        }));
    };

    const [selectedOption, setSelectedOption] = useState('Full Day');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setFormData(prevState => ({
            ...prevState,
            leaveDuration: event.target.value
        }));
    };

    const currentDate = new Date();

    async function empdata() {
        const response = await axios.get("http://localhost:8080/allEmployee");
        setData(response.data);
    }

    useEffect(() => {
        empdata();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];
        const formDataWithDate = { ...formData, leaveDate: currentDate };

        // Convert file to base64
        const base64File = formData.file ? await convertToBase64(formData.file) : null;

        const payload = {
            employeeIId: formData.employeeId,
            leaveType: formData.leaveType,
            status: formData.status,
            leaveDuration: formData.leaveDuration,
            leaveDate: formData.leaveDate,
            absenceReason: formData.absenceReason,
            file: base64File,
        };
        try {
            const response = await axios.post('http://localhost:8080/leaves', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                toast.success('Leave data saved successfully');
            } else {
                toast.error('Failed to save leave data');
            }
        } catch (error) {
            console.error('Error saving leave data:', error);
           
        }
    };

    const handleChange = async (e) => {
        const { name, value, files } = e.target;
        
        if (name === 'file' && files.length > 0) {
            const base64 = await convertToBase64(files[0]);
            setFormData(prevState => ({
                ...prevState,
                file: files[0],  // Update the file state to store the File object itself
                fileBase64: base64  // Store the base64-encoded string in a separate field if needed
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = error => reject(error);
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <h3><b>New Leave</b></h3>
                        <hr />
                        <div className="row mt-4">
                            <div className="col">
                                <label htmlFor="">Choose Member</label>
                                <select className="form-select" name="employeeId" value={formData.employeeId} onChange={handleChange} required>
                                    <option value="">--</option>
                                    {data && data.map((item, index) => (
                                        <option key={index} value={item.empId}>
                                            {item.empName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="">Leave Type</label>
                                <select className="form-select" name="leaveType" value={formData.leaveType} onChange={handleChange} required>
                                    <option value="">--</option>
                                    <option value="casual">Casual</option>
                                    <option value="sick">Sick</option>
                                    <option value="earned">earned</option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="">Status</label>
                                <select className="form-select" name="status" value={formData.status} onChange={handleChange} required>
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <label htmlFor="">Select Duration</label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio1" value="Full Day"
                                        checked={selectedOption === 'Full Day'} onChange={handleOptionChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Full Day</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio2" value="Multiple" checked={selectedOption === 'Multiple'}
                                        onChange={handleOptionChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Multiple</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio3" value="First Half" checked={selectedOption === 'First Half'} onChange={handleOptionChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio3">First Half</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio4" value="Second Half" checked={selectedOption === 'Second Half'} onChange={handleOptionChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio4">Second Half</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    {(selectedOption === 'Full Day' || selectedOption === 'First Half' || selectedOption === 'Second Half') && (
                                        <div className="col pt-4">
                                            <input type="date" name="leaveDate" value={formData.leaveDate} className='form-control' onChange={handleChange} />
                                        </div>
                                    )}
                                    {selectedOption === 'Multiple' && (
                                        <div className="col pt-3">
                                            <DateRangePicker
                                                ranges={[selectedRange]}
                                                value={formData.leaveDate}
                                                onChange={handleSelect}
                                                minDate={currentDate}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <label htmlFor="absenceReason">Reason For Absence</label>
                                <textarea name="absenceReason" id="absenceReason" className='form-control' value={formData.absenceReason} onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <label htmlFor="file">Add File</label>
                            <input type="file" name="file" id="file" onChange={handleChange} />
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-4 mb-4">
                                <button type="submit" className='btn btn-white'>Submit</button> &nbsp;
                                <button type="button" className='btn btn-white' data-bs-dismiss="offcanvas">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </>
    );
}

export default AdminAddLeaveForm;
