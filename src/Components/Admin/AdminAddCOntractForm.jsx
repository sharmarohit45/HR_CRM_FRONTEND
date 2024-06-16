import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css';
const AdminAddContractForm = () => {
    const [editorData, setEditorData] = useState('');

    const handleEditorChange = (value) => {
        setEditorData(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, using editorData and other form inputs
        console.log('Form submitted:', {
            subject: e.target.subject.value,
            contractType: e.target.contractType.value,
            contractValue: e.target.contractValue.value,
            currency: e.target.currency.value,
            contractDescription: editorData,
        });
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
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="row mb-2">
                            <div className="col">
                                <h2>Contract Details</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-4">
                                            <label htmlFor="subject">Contract Number</label>
                                            <input type="text" id="subject" name="subject" placeholder="Add subject" className="form-control" />
                                            </div>
                                            <div className="col-sm-8">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" id="subject" name="subject" placeholder="Add subject" className="form-control" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editor">Contract Description</label>
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
                                            <div className="col-md-4 col-12 mb-3">
                                                <label htmlFor="contractType">Contract Type</label>
                                                <input type="text" id="contractType" name="contractType" placeholder="Contract Type" className="form-control" />
                                            </div>
                                            <div className="col-md-4 col-12 mb-3">
                                                <label htmlFor="contractValue">Contract Value</label>
                                                <input type="text" id="contractValue" name="contractValue" placeholder="Contract Value" className="form-control" />
                                            </div>
                                            <div className="col-md-4 col-12 mb-3">
                                                <label htmlFor="currency">Currency</label>
                                                <input type="text" id="currency" name="currency" placeholder="Currency" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="row">
                                            <div className="col">
                                                <button type="submit" className="btn btn-primary"><span>Submit</span></button> &nbsp;
                                                <button type="reset" className="btn btn-secondary"><span>Reset</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminAddContractForm;
