import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const EmployeeLeaveForm = () => {
    const [formData, setFormData] = useState({
        employee: '',
        leaveType: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];
        const formDataWithDate = { ...formData, savedAt: currentDate };
        try {
            const response = await fetch('http://localhost:8000/leaves', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataWithDate),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Leave data saved:', data);
            } else {
                console.error('Failed to save leave data');
            }
        } catch (error) {
            console.error('Error saving leave data:', error);
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
                <div className="row mt-4">
                    <div className="col">
                        <h3>New Leave</h3>
                        <hr />
                        <div className="row mt-4">
                            <div className="col">
                                <label htmlFor="">Choose Member</label>
                                <select className="form-select" name="employee" value={formData.employee} onChange={handleChange} required>
                                    <option value="">--</option>
                                    <option value="Ravi">Ravi</option>
                                    <option value="Raj">Raj</option>
                                    <option value="Rajesh">Rajesh</option>
                                    <option value="Sudha">Sudha</option>
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
                            <div className="col" style={{fontSize:'smaller'}}>
                                <label htmlFor="" style={{fontSize:'medium'}}>Select Duration</label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio1" value="option1"
                                        checked={selectedOption === 'option1'} onChange={handleOptionChange} />
                                    <label className="form-check-label"htmlFor="inlineRadio1">Full Day</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio2" value="multiple" checked={selectedOption === 'multiple'}
                                        onChange={handleOptionChange} />
                                    <label className="form-check-label"htmlFor="inlineRadio2">Multiple</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio2" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} />
                                    <label className="form-check-label"htmlFor="inlineRadio2">First Half</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="leaveDuration" id="inlineRadio2" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} />
                                    <label className="form-check-label"htmlFor="inlineRadio2">Second Half</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            
                            <div className="col">
                                <div className="row">
                                    {selectedOption === 'option1' && (
                                        <div className="col pt-4">
                                            <label htmlFor="">Date</label>
                                            <input type="date" name="leaveDate" value={formData.leaveDate} className='form-control' />
                                        </div>
                                    )}
                                    {selectedOption === 'multiple' && (
                                        <div className="col pt-3">
                                            <label htmlFor="">Date</label><br />
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
                                <label htmlFor="Deal Watcher">Reason For Absense</label>
                                <textarea name="absenceReason" id="" className='form-control' value={formData.absenceReason} onChange={handleChange}></textarea>

                            </div>
                        </div>
                        <div className="row mt-4">
                            <label htmlFor="">Add File</label>
                            <input type="file" name="" id=""value={formData.file} onChange={handleChange} />
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-4 mb-4">
                                <button type="submit" className='btn btn-white'>Submit</button>&nbsp;
                                <button type="reset" className='btn btn-white'>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EmployeeLeaveForm