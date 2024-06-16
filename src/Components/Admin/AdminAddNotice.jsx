import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css';

const AdminAddNotice = () => {
    const [editorData, setEditorData] = useState('');
    const [showData, setShowData] = useState(true);
    const [noticeHeading, setNoticeHeading] = useState('');
    const [department, setDepartment] = useState('1');
    const [radioOption, setRadioOption] = useState('option1');

    const showChange = () => {
        setShowData(!showData);
    };

    const handleEditorChange = (value) => {
        setEditorData(value);
    };

    const handleRadioChange = (e) => {
        setRadioOption(e.target.value);
        if (e.target.value === 'option2') {
            setShowData(false);
        } else {
            setShowData(true);
        }
    };

    const handleHeadingChange = (e) => {
        setNoticeHeading(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted with data:', {
            noticeHeading,
            department,
            radioOption,
            editorData,
        });
    };

    const handleReset = () => {
        setEditorData('');
        setNoticeHeading('');
        setDepartment('1');
        setRadioOption('option1');
        setShowData(true);
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
                                                value="option1"
                                                checked={radioOption === 'option1'}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                To Employees
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio2"
                                                value="option2"
                                                checked={radioOption === 'option2'}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label" htmlFor="inlineRadio2">
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
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="noticeDetails">Notice Details</label>
                                        <ReactQuill
                                            value={editorData}
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
                                        <button type="submit" className="btn btn-white">Submit</button> &nbsp;
                                        <button type="reset" className="btn btn-dark">Reset</button>
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
