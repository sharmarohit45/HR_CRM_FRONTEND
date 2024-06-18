import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminEmployeeForm() {
    const [designation, setDesignation] = useState();
    const [department, setDepartment] = useState();
    const [formData, setFormData] = useState({
        employeeIdentityentity: '',
        salutation: '',
        empName: '',
        email: '',
        file: null,
        password: '',
        designation: '',
        department: '',
        country: '',
        mobileNo: '',
        gender: '',
        joiningDate: '',
        dateOfBirth: '',
        reportingTo: '',
        language: '',
        empUserRole: '',
        address: '',
        about: '',
        login_Allowed: '',
        email_Notification: '',
        hourly_Rate: '',
        slack_Member_Id: '',
        skills: '',
        provision_End_Date: '',
        notice_Period_Date: '',
        notice_Period_Enddate: '',
        employement_Type: '',
        maritial_State: '',
        role: 'Employee'
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
        try {
            const response = await axios.post('http://localhost:8080/employee', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            // Handle response data as needed
            console.log(formData)
        } catch (error) {
            console.error('There was an error', error);
            // Handle error
        }
    }
    async function getData() {
        const response = await axios.get("http://localhost:8080/designations");
        setDesignation(response.data);
        const departmentresponse = await axios.get("http://localhost:8080/departments");
        setDepartment(departmentresponse.data);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-sm-12 p-4">
                    <div className="card">
                        <h4>Account Details</h4><hr />
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="employeeIdentity">Employee ID</label>
                                    <input type="text" name="employeeIdentity" className="form-control" value={formData.employeeIdentity} onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="Salutation">Salutation</label>
                                    <select className="form-select" name="salutation" value={formData.salutation} onChange={handleChange}>
                                        <option value="">--</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Dr">Dr</option>
                                        <option value="Sir">Sir</option>
                                        <option value="Madam">Madam</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="EmpName">Employee Name</label>
                                    <input type="text" name="empName" className="form-control" value={formData.empName} onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="email">Employee Email</label>
                                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="profilePicture">Profile Picture</label>
                                    <input type="file" name="file" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="password">Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                            value={formData.password}
                                            onChange={handleChange}
                                            name="password"
                                        />
                                        <span className="input-group-text" onClick={togglePasswordVisibility}>
                                            {showPassword ? <i className='fa fa-eye'></i> : <i className='fa fa-eye-slash'></i>}
                                        </span>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="designation">Designation</label>
                                    <select className="form-select" name="designation" value={formData.designation} onChange={handleChange}>
                                        <option value="">--</option>
                                        {designation && designation.map((desg)=>{
                                            return<option value={desg.name}>{desg.name}</option>
                                        })}
                                        
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="department">Department</label>
                                    <select className="form-select" name="department" value={formData.department} onChange={handleChange}>
                                        <option value="">--</option>
                                        {department && department.map((dept)=>{return<option value={dept.departmentName}>{dept.departmentName}</option>})}
                                     
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" className="form-control" value={formData.country} onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="mobileNo">Mobile</label>
                                    <input type="text" name="mobileNo" className="form-control" value={formData.mobileNo} onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="gender">Gender</label>
                                    <select className="form-select" name="gender" value={formData.gender} onChange={handleChange}>
                                        <option value="">--</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="joiningDate">Joining Date</label>
                                    <input type="date" name="joiningDate" className="form-control" value={formData.joiningDate} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="dateOfBirth">Date of Birth</label>
                                    <input type="date" name="dateOfBirth" className="form-control" value={formData.dateOfBirth} onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="reportingTo">Reporting To</label>
                                    <input type="text" name="reportingTo" className="form-control" value={formData.reportingTo} onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="language">Language</label>
                                    <input type="text" name="language" className="form-control" value={formData.language} onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="emp_User_Name">User Role</label>
                                    <select className="form-select" name="empUserRole" value={formData.empUserRole} onChange={handleChange}>
                                        <option value="">--</option>
                                        <option value="App Administrator">App Administrator</option>
                                        <option value="Employee">Employee</option>
                                        <option value="Manager">Manager</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="address">Address</label>
                                    <textarea name="address" className="form-control" value={formData.address} onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="about">About</label>
                                    <textarea name="about" className="form-control" value={formData.about} onChange={handleChange}></textarea>
                                </div>
                            </div><hr />
                            <div className="row">
                                <div className="col">
                                    <h4><b>Other Details</b></h4>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="login_Allowed">Login Allowed?</label><br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="login_Allowed" value="Yes" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="login_AllowedYes">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="login_Allowed" value="No" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="login_AllowedNo">No</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="email_Notification">Receive email notifications?</label><br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="email_Notification" value="Yes" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="email_NotificationYes">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="email_Notification" value="No" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="email_NotificationNo">No</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="hourly_Rate">Hourly Rate</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">$</span>
                                        <input type="text" className="form-control" name="hourly_Rate" value={formData.hourly_Rate} onChange={handleChange} aria-label="Amount (to the nearest dollar)" />
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="slack_Member_Id">Slack Member ID</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">@</span>
                                        <input type="text" className="form-control" name="slack_Member_Id" value={formData.slack_Member_Id} onChange={handleChange} aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="skills">Skills</label>
                                    <input type="text" name="skills" className="form-control" value={formData.skills} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="provision_End_Date">Probation End Date</label>
                                    <input type="date" name="provision_End_Date" className="form-control" value={formData.provision_End_Date} onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="notice_Period_Date">Notice Period Start Date</label>
                                    <input type="date" name="notice_Period_Date" className="form-control" value={formData.notice_Period_Date} onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="notice_Period_Enddate">Notice Period End Date</label>
                                    <input type="date" name="notice_Period_Enddate" className="form-control" value={formData.notice_Period_Enddate} onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="employement_Type">Employment Type</label>
                                    <select className="form-select" name="employement_Type" value={formData.employement_Type} onChange={handleChange}>
                                        <option value="">--</option>
                                        <option value="Full Time">Full Time</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="On Contract">On Contract</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Trainee">Trainee</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4">
                                    <label htmlFor="maritial_State">Marital Status</label>
                                    <select className="form-select" name="maritial_State" value={formData.maritial_State} onChange={handleChange}>
                                        <option value="">--</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Widow">Widow</option>
                                        <option value="Widower">Widower</option>
                                        <option value="Separate">Separate</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Engaged">Engaged</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row m-3">
                                <div className="col-sm-3">
                                    <button type="submit" className="btn btn-white form-control">Save</button>
                                </div>
                                <div className="col-sm-3">
                                    <button type="reset" className="btn btn-white form-control" data-bs-dismiss="offcanvas">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminEmployeeForm;
