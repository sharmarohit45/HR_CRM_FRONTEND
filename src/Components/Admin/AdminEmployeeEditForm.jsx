import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AdminEmployeeEditForm = () => {
    const [designation, setDesignation] = useState([]);
    const [department, setDepartment] = useState([]);
    const [data, setData] = useState(null);
    const location = useLocation();
    const [imageURL, setImageURL] = useState(null);

    const empId = location.state ? location.state.empId : null;
    const [formData, setFormData] = useState({
        employeeIdentity: '',
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
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0]
            });
            setImageURL(URL.createObjectURL(files[0])); // Display the new image
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
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
            const response = await axios.put(`http://localhost:8080/employee/${empId}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Employee Data Updated Successfully');
        } catch (error) {
            console.error('There was an error', error);
            // Handle error
        }
    }

    const getData = async () => {
        const response = await axios.get("http://localhost:8080/designations");
        setDesignation(response.data);
        const departmentresponse = await axios.get("http://localhost:8080/departments");
        setDepartment(departmentresponse.data);
    }

    const getEmployeeData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/employee/${empId}`);
            setData(response.data);
            if (response.data.imageData) {
                const blob = new Blob([new Uint8Array(atob(response.data.imageData).split("").map(char => char.charCodeAt(0)))], { type: "image/jpeg" });
                setImageURL(URL.createObjectURL(blob));
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
        if (empId) {
            getEmployeeData();
        }
    }, [empId]);

    useEffect(() => {
        if (data) {
            setFormData({
                employeeIdentity: data.employeeIdentity || '',
                salutation: data.salutation || '',
                empName: data.empName || '',
                email: data.email || '',
                file: data.imageData ? `data:image/jpeg;base64,${data.imageData}` : null,
                password: '',
                designation: data.designation || '',
                department: data.department || '',
                country: data.country || '',
                mobileNo: data.mobileNo || '',
                gender: data.gender || '',
                joiningDate: data.joiningDate || '',
                dateOfBirth: data.dateOfBirth || '',
                reportingTo: data.reportingTo || '',
                language: data.language || '',
                empUserRole: data.emp_User_Name || '',
                address: data.address || '',
                about: data.about || '',
                login_Allowed: data.login_Allowed || '',
                email_Notification: data.email_Notification || '',
                hourly_Rate: data.hourly_Rate || '',
                slack_Member_Id: data.slack_Member_Id || '',
                skills: data.skills || '',
                provision_End_Date: data.provision_End_Date || '',
                notice_Period_Date: data.notice_Period_Date || '',
                notice_Period_Enddate: data.notice_Period_Enddate || '',
                employement_Type: data.employement_Type || '',
                maritial_State: data.maritial_State || '',
                role: data.role || 'Employee'
            });
        }
    }, [data]);

    return (
        <>
            <div className="page-wrapper">
                <div className="row">
                    <div className="card p-0 m-0" style={{ height: '100%' }}>
                        <div className="col-sm-12 p-4">

                            <div className="row">
                                <div className="col">
                                    <h3><b>Update Account Details</b></h3><hr />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="card">
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
                                                    {imageURL && <img src={imageURL} alt="Profile" width="100" />}
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
                                                        {designation.map((desg, index) => (
                                                            <option key={index} value={desg.name}>{desg.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="department">Department</label>
                                                    <select className="form-select" name="department" value={formData.department} onChange={handleChange}>
                                                        <option value="">--</option>
                                                        {department.map((dept, index) => (
                                                            <option key={index} value={dept.departmentName}>{dept.departmentName}</option>
                                                        ))}
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
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="joiningDate">Joining Date</label>
                                                    <input type="date" name="joiningDate" className="form-control" value={formData.joiningDate} onChange={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="dateOfBirth">Date of Birth</label>
                                                    <input type="date" name="dateOfBirth" className="form-control" value={formData.dateOfBirth} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col">
                                                    <label htmlFor="reportingTo">Reporting To</label>
                                                    <input type="text" name="reportingTo" className="form-control" value={formData.reportingTo} onChange={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="language">Language</label>
                                                    <input type="text" name="language" className="form-control" value={formData.language} onChange={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="empUserRole">Employee User Role</label>
                                                    <input type="text" name="empUserRole" className="form-control" value={formData.empUserRole} onChange={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="address">Address</label>
                                                    <input type="text" name="address" className="form-control" value={formData.address} onChange={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="about">About</label>
                                                    <textarea name="about" className="form-control" value={formData.about} onChange={handleChange}></textarea>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col">
                                                    <label htmlFor="login_Allowed">Login Allowed</label>
                                                    <select className="form-select" name="login_Allowed" value={formData.login_Allowed} onChange={handleChange}>
                                                        <option value="true">Yes</option>
                                                        <option value="false">No</option>
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="email_Notification">Email Notification</label>
                                                    <select className="form-select" name="email_Notification" value={formData.email_Notification} onChange={handleChange}>
                                                        <option value="true">Yes</option>
                                                        <option value="false">No</option>
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="hourly_Rate">Hourly Rate</label>
                                                    <input type="text" name="hourly_Rate" className="form-control" value={formData.hourly_Rate} onChange={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="slack_Member_Id">Slack Member ID</label>
                                                    <input type="text" name="slack_Member_Id" className="form-control" value={formData.slack_Member_Id} onChange={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="skills">Skills</label>
                                                    <textarea name="skills" className="form-control" value={formData.skills} onChange={handleChange}></textarea>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col">
                                                    <label htmlFor="provision_End_Date">Provision End Date</label>
                                                    <input type="date" name="provision_End_Date" className="form-control" value={formData.provision_End_Date} onChange={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="notice_Period_Date">Notice Period Date</label>
                                                    <input type="date" name="notice_Period_Date" className="form-control" value={formData.notice_Period_Date} onChange={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="notice_Period_Enddate">Notice Period End Date</label>
                                                    <input type="date" name="notice_Period_Enddate" className="form-control" value={formData.notice_Period_Enddate} onChange={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="employement_Type">Employment Type</label>
                                                    <input type="text" name="employement_Type" className="form-control" value={formData.employement_Type} onChange={handleChange} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="maritial_State">Marital State</label>
                                                    <select className="form-select" name="maritial_State" value={formData.maritial_State} onChange={handleChange}>
                                                        <option value="">--</option>
                                                        <option value="Single">Single</option>
                                                        <option value="Married">Married</option>
                                                        <option value="Divorced">Divorced</option>
                                                        <option value="Widowed">Widowed</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-white mt-4 mb-4">Save Changes</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
};

export default AdminEmployeeEditForm;
