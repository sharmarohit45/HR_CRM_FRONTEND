import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css';
import axios from 'axios';

const AdminCreateTicketForm = () => {
    const [formData, setFormData] = useState({
        requesterType: '',
        requesterName: '',
        assignGroup: '',
        agent: '',
        project: '',
        ticketSubject: '',
        description: '',
        file: null,
        priority: '',
        type: '',
        channelName: '',
        tags: ''
    });

    const [editorData, setEditorData] = useState('');
    const [showOtherDetails, setShowOtherDetails] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEditorChange = (value) => {
        setEditorData(value);
        setFormData({ ...formData, description: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formPayload = new FormData();
        for (const key in formData) {
            formPayload.append(key, formData[key]);
        }

        try {
            const response = await axios.post('/api/tickets', formPayload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }

        // Log the form data to the console
        for (const key in formData) {
            console.log(`${key}: ${formData[key]}`);
        }
    };

    const handleReset = () => {
        setFormData({
            requesterType: '',
            requesterName: '',
            assignGroup: '',
            agent: '',
            project: '',
            ticketSubject: '',
            description: '',
            file: null,
            priority: '',
            type: '',
            channelName: '',
            tags: ''
        });
        setEditorData('');
    };

    const toggleOtherDetails = () => {
        setShowOtherDetails(!showOtherDetails);
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],
            ['clean']
        ]
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'link', 'image', 'video'
    ];

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3><b>Ticket Details</b></h3>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Requester</label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="requesterType" id="inlineRadio1" value="Client" onChange={handleInputChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Client</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="requesterType" id="inlineRadio2" value="Employee" onChange={handleInputChange} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Employee</label>
                                </div>
                            </div>
                            <div className="col">
                                <label htmlFor="requesterName">Requester Name</label>
                                <select name="requesterName" className="form-select" onChange={handleInputChange}>
                                    <option value="">--</option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="assignGroup">Assign Group</label>
                                <select name="assignGroup" className="form-select" value={formData.assignGroup} onChange={handleInputChange}>
                                    <option value="">--</option>
                                    <option value="Legal">Legal</option>
                                    <option value="Installation">Installation</option>
                                    <option value="Spam">Spam</option>
                                    <option value="Very Important">Very Important</option>
                                    <option value="Technical">Technical</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label htmlFor="agent">Agent</label>
                                <select name="agent" className="form-select" onChange={handleInputChange}>
                                    <option value="">--</option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="project">Project</label>
                                <select name="project" className="form-select" value={formData.project} onChange={handleInputChange}>
                                    <option value="">--</option>
                                    <option value="SEO">SEO (Search Engine Optimization)</option>
                                    <option value="Opinion Mining">Opinion Mining for Social Marketing</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label htmlFor="ticketSubject">Ticket Subject</label>
                                <input type="text" name="ticketSubject" className='form-control' value={formData.ticketSubject} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label htmlFor="description">Description</label>
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
                        <div className="row mt-2">
                            <div className="col">
                                <label htmlFor="file">Upload File</label>
                                <input type="file" name="file" className='form-control' onChange={handleFileChange} />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <button type="button" className="btn" onClick={toggleOtherDetails}>
                                    <h3>
                                        <i className={`fa ${showOtherDetails ? 'fa-angle-up' : 'fa-angle-down'}`}></i> Other Details
                                    </h3>
                                </button>
                                <hr style={{ width: '100%' }} />
                            </div>
                        </div>
                        {showOtherDetails && (
                            <>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="priority">Priority</label>
                                        <select name="priority" className='form-select' value={formData.priority} onChange={handleInputChange}>
                                            <option value="">--</option>
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                            <option value="Urgent">Urgent</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="type">Type</label>
                                        <select name="type" className='form-select' value={formData.type} onChange={handleInputChange}>
                                            <option value="">--</option>
                                            <option value="Bug">Bug</option>
                                            <option value="Suggestion">Suggestion</option>
                                            <option value="Question">Question</option>
                                            <option value="Problem">Problem</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="channelName">Channel Name</label>
                                        <select name="channelName" className='form-select' value={formData.channelName} onChange={handleInputChange}>
                                            <option value="">--</option>
                                            <option value="Email">Email</option>
                                            <option value="Phone">Phone</option>
                                            <option value="Twitter">Twitter</option>
                                            <option value="Facebook">Facebook</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <label htmlFor="tags">Tags</label>
                                        <input type="text" name="tags" className='form-control' value={formData.tags} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <button type='submit' className='btn btn-white'>Save</button> &nbsp;
                                <button type='reset' className='btn btn-white' onClick={handleReset}>Reset</button> &nbsp;
                                <button type='button' className='btn btn-white' data-bs-dismiss="offcanvas">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminCreateTicketForm;
