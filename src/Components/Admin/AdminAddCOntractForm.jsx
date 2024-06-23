import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import './quill.css';

const AdminAddContractForm = () => {
    const [editorData, setEditorData] = useState('');
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        contractNumber: '',
        subject: '',
        project: '',
        description: '',
        startDate: '',
        endDate: '',
        contractType: '',
        contractValue: '',
        currency: '',
        client: '',
        cell: '',
        officePhoneNumber: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
        alternateAddress: '',
        notes: '',
    });
    function visibility() {
        setVisible(!visible)
    }
    const handleEditorChange = (value) => {
        setEditorData(value);
        setFormData({ ...formData, description: value });
    };
    async function getData() {
        const response = await axios.get("http://localhost:8080/allclient")
        setData(response.data)
        console.log("apiData", data);
    }
    useEffect(() => {
        getData();
    }, [])
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        // try {
        //     const response = await axios.post('YOUR_API_ENDPOINT', formData);
        //     console.log('Form submitted successfully:', response.data);
        //     // Handle success (e.g., show a success message, redirect, etc.)
        // } catch (error) {
        //     console.error('Error submitting form:', error);
        //     // Handle error (e.g., show an error message)
        // }
    };

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

    return (
        <div className="row">
            {console.log("data", data)}
            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <h3>Contract Details</h3>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label htmlFor="contractNumber">Contract Number</label>
                                            <input type="text" id="contractNumber" name="contractNumber" placeholder="Add contract number" className="form-control" value={formData.contractNumber} onChange={handleChange} />
                                        </div>
                                        <div className="col-sm-8">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" id="subject" name="subject" placeholder="Add subject" className="form-control" value={formData.subject} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label htmlFor="project">Project</label>
                                            <select name="project" id="project" className="form-select" value={formData.project} onChange={handleChange}>
                                                <option value=""></option>
                                                {/* Add options here */}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editor">Description</label>
                                    <ReactQuill
                                        value={editorData}
                                        onChange={handleEditorChange}
                                        theme="snow"
                                        modules={modules}
                                        formats={formats}
                                        className="form-control quill-editor"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="startDate">Start Date</label>
                                            <input type="date" name="startDate" id="startDate" className="form-control" value={formData.startDate} onChange={handleChange} />
                                        </div>
                                        {!visible && (
                                            <div className="col">
                                                <label htmlFor="endDate">End Date</label>
                                                <input type="date" name="endDate" id="endDate" className="form-control" value={formData.endDate} onChange={handleChange} />
                                            </div>
                                        )}
                                        <div className="col">
                                            <div className="form-check mt-4">
                                                <input className="form-check-input" type="checkbox" id="withoutDueDate" name="withoutDueDate" onClick={visibility} />
                                                <label className="form-check-label" htmlFor="withoutDueDate">
                                                    Without Due Date
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="contractType">Contract Type</label>
                                            <div className="input-group mb-3">
                                                <select className="form-select" id="contractType" name="contractType" value={formData.contractType} onChange={handleChange}>
                                                    <option value="">--</option>
                                                    {/* Add options here */}
                                                </select>
                                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="contractValue">Contract Value</label>
                                        <input type="number" name="contractValue" id="contractValue" min={0} className="form-control" value={formData.contractValue} onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="currency">Currency</label>
                                        <select name="currency" id="currency" className="form-select" value={formData.currency} onChange={handleChange}>
                                            <option value="">--</option>
                                            {/* Add options here */}
                                        </select>
                                    </div>
                                    <div className="col"></div>
                                </div><hr />
                                <div className="row">
                                    <div className="col">
                                        <h4><b>Client Details</b></h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="client">Client</label>
                                        <select name="client" id="client" className="form-select" value={formData.client} onChange={handleChange}>
                                            <option value="">--</option>
                                            {data && data.map((client, index) => {
                                                return <option key={index} value={client.clientName}>{client.clientName}</option>
                                            })}

                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="cell">Cell</label>
                                        <input type="text" name="cell" id="cell" className="form-control" value={formData.cell} onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="officePhoneNumber">Office Phone Number</label>
                                        <input type="text" name="officePhoneNumber" id="officePhoneNumber" className="form-control" value={formData.officePhoneNumber} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="city">City</label>
                                        <input type="text" name="city" id="city" className="form-control" value={formData.city} onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="state">State</label>
                                        <input type="text" name="state" id="state" className="form-control" value={formData.state} onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="country">Country</label>
                                        <input type="text" name="country" id="country" className="form-control" value={formData.country} onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="postalCode">Postal code</label>
                                        <input type="text" name="postalCode" id="postalCode" className="form-control" value={formData.postalCode} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="address1">Alternate Address</label>
                                        <textarea name="address1" id="address1" className='form-control' value={formData.alternateAddress} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="address2">Notes</label>
                                        <textarea name="address2" id="address2" className='form-control' value={formData.notes} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="form-group mt-3 mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <button type="submit" className="btn btn-white"><span>Submit</span></button> &nbsp;
                                            <button type="reset" className="btn btn-white" data-bs-dismiss="offcanvas"><span>Cancel</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddContractForm;
