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
        employee: '',
        leaveType: '',
        status: 'Pending',
        leaveDuration: '',
        leaveDate: null,
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

    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
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
        const formDataWithDate = { ...formData, savedAt: currentDate };

        try {
            const response = await axios.post('http://localhost:8080/leaves', formDataWithDate, {
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
            console.error('An error occurred while saving leave data');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                                <select className="form-select" name="employee" value={formData.employee} onChange={handleChange} required>
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
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio1" value="option1"
                                        checked={selectedOption === 'option1'} onChange={handleOptionChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Full Day</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio2" value="multiple" checked={selectedOption === 'multiple'}
                                        onChange={handleOptionChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Multiple</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio3" value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio3">First Half</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio4" value="option3" checked={selectedOption === 'option3'} onChange={handleOptionChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio4">Second Half</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    {selectedOption === 'option1' && (
                                        <div className="col pt-4">
                                            <input type="date" name="leaveDate" value={formData.leaveDate} className='form-control' onChange={handleChange} />
                                        </div>
                                    )}
                                     {selectedOption === 'option2' && (
                                        <div className="col pt-4">
                                            <input type="date" name="leaveDate" value={formData.leaveDate} className='form-control' onChange={handleChange} />
                                        </div>
                                    )}
                                     {selectedOption === 'option3' && (
                                        <div className="col pt-4">
                                            <input type="date" name="leaveDate" value={formData.leaveDate} className='form-control' onChange={handleChange} />
                                        </div>
                                    )}
                                    {selectedOption === 'multiple' && (
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
                            <input type="file" name="file" id="file" onChange={(e) => setFormData(prevState => ({ ...prevState, file: e.target.files[0] }))} />
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-4 mb-4">
                                <button type="submit" className='btn btn-white'>Submit</button> &nbsp;
                                <button type="button" className='btn btn-white' data-bs-dismiss="offcanvas">Cancel</button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </form>
        </>
    )
}

export default AdminAddLeaveForm;
