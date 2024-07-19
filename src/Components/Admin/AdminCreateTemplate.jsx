import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module-react';
import axios from 'axios'; // Make sure axios is imported
import 'react-quill/dist/quill.core.css';
import { toast, ToastContainer } from 'react-toastify';

Quill.register('modules/imageResize', ImageResize);

const AdminCreateTemplate = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const quillRef = useRef(null); // Ref to access the Quill editor instance

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            [{ 'align': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
        imageResize: {
            parchment: Quill.import('parchment'),
        },
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    const handleCopyVariable = (variable) => {
        navigator.clipboard.writeText(variable);
        toast.success(`Copied ${variable} to clipboard`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace `YOUR_BACKEND_ENDPOINT` with your actual backend endpoint
            const response = await axios.post('http://localhost:8080/template', {
                title,
                description
            });
            toast.success('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Form submission failed:', error);
            toast.error('Form submission failed');
        }
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
                                    <div>
                                        <label htmlFor="templateDescription">Description</label>
                                        <ReactQuill
                                            ref={quillRef}
                                            theme="snow"
                                            modules={modules}
                                            formats={formats}
                                            value={description}
                                            onChange={setDescription}
                                            placeholder="Enter description..."
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <h3>Available Variables:</h3>
                                    <div className="card">
                                        <div className="card-body" style={{ fontSize: '10px' }}>
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
                                    <button type="button" className="btn btn-white">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AdminCreateTemplate;
