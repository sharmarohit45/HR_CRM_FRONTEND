import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css';
import axios from 'axios';

const AdminAddNotice = () => {
    const [noticeDetails, setNoticeDetails] = useState('');
    const [showData, setShowData] = useState(true);
    const [noticeHeading, setNoticeHeading] = useState('');
    const [department, setDepartment] = useState('1');
    const [type, setType] = useState('To Employees');
    const [data, setData] = useState([]);
    const [date, setDate] = useState(new Date());

    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB'); // This will format the date to "dd/mm/yyyy"
    };

    const formattedDate = formatDate(date);

    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/departments");
            setData(response.data);
        } catch (error) {
            console.log("Designation data fetching failed", error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const handleEditorChange = (value) => {
        setNoticeDetails(value);
    };

    const handleRadioChange = (e) => {
        setType(e.target.value);
        setShowData(e.target.value === 'To Employees');
    };

    const handleHeadingChange = (e) => {
        setNoticeHeading(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(noticeHeading);
        console.log(department);
        console.log(type);
        console.log(noticeDetails);
        console.log(formattedDate);
        try {
            const response = await axios.post("http://localhost:8080/notice", {
                noticeHeading,
                department,
                type,
                noticeDetails,
                date: formattedDate
            });
            console.log('Notice submitted successfully:', response.data);
            handleReset();
        } catch (error) {
            console.error('Error submitting notice:', error);
        }
    };

    const handleReset = () => {
        setNoticeDetails('');
        setNoticeHeading('');
        setDepartment('1');
        setType('To Employees');
        setShowData(true);
        setDate(new Date());
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean'],
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video',
    ];

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="row mb-2">
                        <div className="col">
                            <h2>Notice Details</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <form onSubmit={handleSubmit} onReset={handleReset}>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio1"
                                                value="To Employees"
                                                checked={type === 'To Employees'}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label">
                                                To Employees
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio2"
                                                value="To Clients"
                                                checked={type === 'To Clients'}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label">
                                                To Clients
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="noticeHeading">Notice Heading</label>
                                        <input
                                            type="text"
                                            id="noticeHeading"
                                            className="form-control"
                                            value={noticeHeading}
                                            onChange={handleHeadingChange}
                                        />
                                    </div>
                                    <div className="col">
                                        {showData && (
                                            <>
                                                <label htmlFor="department">Department</label>
                                                <select
                                                    id="department"
                                                    className="form-select"
                                                    value={department}
                                                    onChange={handleDepartmentChange}
                                                >
                                                    <option value="1">--</option>
                                                    {data.map((item, index) => (
                                                        <option key={index} value={item.departmentName}>
                                                            {item.departmentName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="noticeDetails">Notice Details</label>
                                        <ReactQuill
                                            value={noticeDetails}
                                            onChange={handleEditorChange}
                                            theme="snow"
                                            modules={modules}
                                            formats={formats}
                                            className="form-control quill-editor"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col text-end">
                                        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AdminAddNotice;
