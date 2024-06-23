import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css';

const AdminCreateTemplate = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    const handleCopyVariable = (variable) => {
        navigator.clipboard.writeText(variable);
        alert(`Copied ${variable} to clipboard`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ title, description });
    };

    return (
        <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h3>Add Template</h3>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-7">
                                        <div className="form-group">
                                            <label htmlFor="templateTitle">Title</label>
                                            <input
                                                type="text"
                                                id="templateTitle"
                                                className="form-control"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="templateDescription">Description</label>
                                            <ReactQuill
                                                theme="snow"
                                                modules={modules}
                                                formats={formats}
                                                value={description}
                                                onChange={setDescription}
                                                className="form-control quill-editor"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-5" >
                                        <h3>Available Variables:</h3>
                                        <div className="card">
                                            <div className="card-body" style={{fontSize:'10px'}}>
                                                {[
                                                    'CURRENT_DATE',
                                                    'EMPLOYEE_ID',
                                                    'EMPLOYEE_NAME',
                                                    'EMPLOYEE_ADDRESS',
                                                    'EMPLOYEE_JOINING_DATE',
                                                    'EMPLOYEE_EXIT_DATE',
                                                    'EMPLOYEE_PROBATION_END_DATE',
                                                    'EMPLOYEE_NOTICE_PERIOD_START_DATE',
                                                    'EMPLOYEE_NOTICE_PERIOD_END_DATE',
                                                    'EMPLOYEE_DOB',
                                                    'EMPLOYEE_DEPARTMENT',
                                                    'SIGNATORY',
                                                    'SIGNATORY_DEPARTMENT',
                                                    'EMPLOYEE_DESIGNATION',
                                                    'SIGNATORY_DESIGNATION',
                                                    'COMPANY_NAME'
                                                ].map(variable => (
                                                    <p key={variable}>
                                                        <i
                                                            className='fa fa-copy'
                                                            onClick={() => handleCopyVariable(`##${variable}##`)}
                                                            style={{ cursor: 'pointer', marginRight: '10px' }}
                                                            aria-label={`Copy ${variable}`}
                                                            title={`Copy ${variable}`}
                                                        ></i>
                                                        ##{variable}##
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <button type="submit" className="btn btn-white">Save</button> &nbsp;
                                        <button type="submit" className="btn btn-white">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AdminCreateTemplate;
