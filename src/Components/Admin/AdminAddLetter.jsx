import React, { useState, useRef, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.core.css';
import ImageResize from 'quill-image-resize-module-react';
import jsPDF from 'jspdf';
import axios from 'axios';

Quill.register('modules/imageResize', ImageResize);

const AdminAddLetter = () => {
    const [editorData, setEditorData] = useState('');
    const [margins, setMargins] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
    const [letterType, setLetterType] = useState('');
    const [employees, setEmployees] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const editorRef = useRef(null);
    const [data, setData] = useState([]);

    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/template");
            setData(response.data);
        } catch (error) {
            console.log("Data fetching failed", error);
        }
    }

    function handleLetterContent(letterTypeId) {
        const letter = data.find(item => item.templateId === parseInt(letterTypeId));
        if (letter) {
            setEditorData(letter.description);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (letterType) {
            handleLetterContent(letterType);
        }
    }, [letterType, data]);

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
        'list', 'bullet', 'indent', 'align',
        'link', 'image', 'video'
    ];

    const handleCopyVariable = (variable) => {
        navigator.clipboard.writeText(variable);
        alert(`Copied ${variable} to clipboard`);
    };

    const handleEditorChange = (content) => {
        setEditorData(content);
    };

    const handleMarginChange = (e) => {
        const { id, value } = e.target;
        setMargins({ ...margins, [id]: parseInt(value, 10) });
    };

    const handlePrint = () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print Letter</title>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(`<div style="margin: ${margins.top}px ${margins.right}px ${margins.bottom}px ${margins.left}px;">`);
        printWindow.document.write(editorData);
        printWindow.document.write('</div></body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    const handleDownload = () => {
        const doc = new jsPDF('p', 'pt', 'a4');
        const pdfMargins = {
            left: margins.left,
            right: margins.right,
            top: margins.top,
            bottom: margins.bottom,
        };

        const editorHtml = editorRef.current.editor.root.innerHTML;
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = editorHtml;

        doc.html(tempDiv, {
            callback: function (doc) {
                doc.save('letter.pdf');
            },
            x: pdfMargins.left,
            y: pdfMargins.top,
            width: doc.internal.pageSize.width - pdfMargins.left - pdfMargins.right,
            windowWidth: document.body.scrollWidth
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add functionality to save the form data
        console.log('Form submitted');
    };

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <h3>Letter Details</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="letterType">Letter Type</label>
                                        <select id="letterType" className="form-select" value={letterType} onChange={(e) => setLetterType(e.target.value)}>
                                            <option value="">-- Select an option --</option>
                                            {data.map(item => (
                                                <option key={item.templateId} value={item.templateId}>{item.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="employees">Employees</label>
                                        <select id="employees" className="form-select" value={employees} onChange={(e) => setEmployees(e.target.value)}>
                                            <option value="">Select Employee</option>
                                            {/* Add options here */}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label>Employee Name</label>
                                        <input type="text" className="form-control" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <h4 className='text-success'>
                                            <b>Adjust space setting (in pixel)</b>
                                        </h4>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="left">Left</label>
                                        <input type="number" id="left" className='form-control' value={margins.left} onChange={handleMarginChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="right">Right</label>
                                        <input type="number" id="right" className='form-control' value={margins.right} onChange={handleMarginChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="top">Top</label>
                                        <input type="number" id="top" className='form-control' value={margins.top} onChange={handleMarginChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="bottom">Bottom</label>
                                        <input type="number" id="bottom" className='form-control' value={margins.bottom} onChange={handleMarginChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label>Description</label>
                                        <ReactQuill
                                            ref={editorRef}
                                            value={editorData}
                                            onChange={handleEditorChange}
                                            theme="snow"
                                            modules={modules}
                                            formats={formats}
                                        /><br />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col" style={{ fontSize: '10px' }}>
                                        <h4>Available Variables:</h4>
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##CURRENT_DATE##')}></i> ##CURRENT_DATE##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##EMPLOYEE_ID##')}></i> ##EMPLOYEE_ID##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##EMPLOYEE_NAME##')}></i> ##EMPLOYEE_NAME##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##EMPLOYEE_ADDRESS##')}></i> ##EMPLOYEE_ADDRESS##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##EMPLOYEE_JOINING_DATE##')}></i> ##EMPLOYEE_JOINING_DATE##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##EMPLOYEE_EXIT_DATE##')}></i> ##EMPLOYEE_EXIT_DATE##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##EMPLOYEE_PROBATION_END_DATE##')}></i> ##EMPLOYEE_PROBATION_END_DATE##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##EMPLOYEE_NOTICE_PERIOD_START_DATE##')}></i> ##EMPLOYEE_NOTICE_PERIOD_START_DATE##</p>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##EMPLOYEE_NOTICE_PERIOD_END_DATE##')}></i> ##EMPLOYEE_NOTICE_PERIOD_END_DATE##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##EMPLOYEE_DOB##')}></i> ##EMPLOYEE_DOB##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##EMPLOYEE_DEPARTMENT##')}></i> ##EMPLOYEE_DEPARTMENT##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##SIGNATORY##')}></i> ##SIGNATORY##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##SIGNATORY_DEPARTMENT##')}></i> ##SIGNATORY_DEPARTMENT##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##EMPLOYEE_DESIGNATION##')}></i> ##EMPLOYEE_DESIGNATION##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##SIGNATORY_DESIGNATION##')}></i> ##SIGNATORY_DESIGNATION##</p>
                                                    <p><i className='fa fa-copy' onClick={() => handleCopyVariable('##COMPANY_NAME##')}></i> ##COMPANY_NAME##</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col">
                                        <button type="submit" className='btn btn-white'>Save</button> &nbsp;
                                        <button type="button" className='btn btn-white' data-bs-dismiss="offcanvas">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h3>Preview Letter</h3>
                                </div>
                                <div className="col text-end">
                                    <button type='button' className='btn btn-white' onClick={handlePrint}><i className="fa fa-print" aria-hidden="true"></i></button> &nbsp;
                                    <button type='button' className='btn btn-white' onClick={handleDownload}><i className="fa fa-download" aria-hidden="true"></i></button>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col p-3" style={{ margin: `${margins.top}px ${margins.right}px ${margins.bottom}px ${margins.left}px` }}>
                                    <div dangerouslySetInnerHTML={{ __html: editorData }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddLetter;
