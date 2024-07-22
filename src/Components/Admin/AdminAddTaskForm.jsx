import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.core.css';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const AdminAddTaskForm = () => {
    const [editorData, setEditorData] = useState('');
    const [showFeild, setShowFeild] = useState(true);
    const [selectedemployee, setSelectedEmployees] = useState([]);
    const [showRepeat, setShowRepeat] = useState(false);
    const [showDependent, setShowDependent] = useState(false);
    const [employeeData, setEmployeeData] = useState([]);
    const [EmployeeIds, setEmployeeIds] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getEmployee() {
            try {
                const response = await axios.get("http://localhost:8080/allEmployee");
                if (response.data) {
                    setEmployeeData(response.data);
                }
            } catch (error) {
                console.error('Error fetching employee data:', error);
                setErrorMessage('Error fetching employee data');
            }
        }

        getEmployee();
    }, []);

    const handleEmployeeChange = (event, value) => {
        const selectedIds = value.map(employee => employee.empId);
        setSelectedEmployees(value);
        setEmployeeIds(selectedIds);
    };

    const handleEditorChange = (value) => {
        setEditorData(value);
    };

    const fieldChange = () => {
        setShowFeild(!showFeild);
    };

    const repeatChange = () => {
        setShowRepeat(!showRepeat);
    };

    const dependentChange = () => {
        setShowDependent(!showDependent);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        // Validate dates
        const startDate = new Date(e.target.elements.startDate.value);
        const dueDate = e.target.elements.dueDate ? new Date(e.target.elements.dueDate.value) : null;
        if (dueDate && startDate > dueDate) {
            setErrorMessage('Due Date cannot be earlier than Start Date.');
            setLoading(false);
            return;
        }

        // Convert file to base64
        const fileInput = e.target.elements.file.files[0];
        let fileData = null;
        
        if (fileInput) {
            fileData = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result.split(',')[1]); // Get base64 string
                reader.onerror = reject;
                reader.readAsDataURL(fileInput);
            });
        }
    
        // Collect form data
        const formData = {
            title: e.target.elements.title.value || '',
            taskCategory: e.target.elements.taskCategory.value || '',
            project: e.target.elements.project.value || '',
            startDate: e.target.elements.startDate.value || '',
            dueDate: showFeild ? (e.target.elements.dueDate.value || '') : '',
            projectSummary: editorData || '',
            contractType: e.target.elements.contractType.value || '',
            contractValue: e.target.elements.contractValue.value || '',
            currency: e.target.elements.currency.value || '',
            assignedTo: EmployeeIds || [],
            label: e.target.elements.label.value || '',
            milestones: e.target.elements.milestones.value || '',
            status: e.target.elements.status.value || '',
            extraStatus: e.target.elements.extraStatus.value || '',
            makePrivate: e.target.elements.makePrivate.checked || false,
            billable: e.target.elements.billable.checked || false,
            timeEstimates: showFeild,
            hrs: showFeild ? (e.target.elements.hrs.value || '') : '',
            minutes: showFeild ? (e.target.elements.minutes.value || '') : '',
            repeat: showRepeat,
            repeatInterval: showRepeat ? e.target.elements.repeatInterval.value || '' : '',
            dependentTask: showDependent,
            fileData: fileData || null,  // Include base64 file data
        };
    
        // Send data to the server
        try {
            await axios.post('http://localhost:8080/createTask', formData);
            setSuccessMessage('Task created successfully');
        } catch (error) {
            console.error('Error creating task:', error);
            setErrorMessage('Error creating task: ' + error.message);
        } finally {
            setLoading(false);
        }
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
            <div className="col">
                <div className="card">
                    <div className="row mb-2">
                        <div className="col">
                            <h2>Task Info</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="title">Title</label>
                                            <input type="text" id="title" name="title" placeholder="Enter title here" className="form-control" required />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="taskCategory">Task Category</label>
                                            <div className="input-group mb-3">
                                                <select id="taskCategory" name="taskCategory" className="form-select" required>
                                                    <option value="">Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <span className="input-group-text" type="button">Add</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="project">Project</label>
                                        <select id="project" name="project" className="form-select" required>
                                            <option value="">--</option>
                                            <option value="1">Project 1</option>
                                            <option value="2">Project 2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col">
                                        <label htmlFor="startDate">Start Date</label>
                                        <input type="date" name="startDate" id="startDate" className='form-control' required />
                                    </div>
                                    {showFeild && (
                                        <div className="col">
                                            <label htmlFor="dueDate">Due Date</label>
                                            <input type="date" name="dueDate" id="dueDate" className='form-control' />
                                        </div>
                                    )}
                                    <div className="col pt-4">
                                        <div className="form-check p-1">
                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={fieldChange} checked={!showFeild} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Without Due Date
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3 mb-2">
                                    <div className="col-10">
                                        <label htmlFor="assignedTo">Assigned To</label>
                                        <Autocomplete
                                            multiple
                                            id="assignedTo"
                                            options={employeeData}
                                            getOptionLabel={(option) => option.empName}
                                            onChange={handleEmployeeChange}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="standard"
                                                    placeholder="Select Assigned Employees"
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="row pt-3">
                                        <div className="col">
                                            <label htmlFor="editor">Description</label>
                                            <ReactQuill
                                                value={editorData}
                                                onChange={handleEditorChange}
                                                theme="snow"
                                                modules={modules}
                                                formats={formats}
                                
                                            />
                                        </div>
                                    </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <label htmlFor="contractType">Contract Type</label>
                                        <input type="text" name="contractType" id="contractType" className="form-control" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="contractValue">Contract Value</label>
                                        <input type="number" name="contractValue" id="contractValue" className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="currency">Currency</label>
                                        <input type="text" name="currency" id="currency" className="form-control" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="label">Label</label>
                                        <input type="text" name="label" id="label" className="form-control" />
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col">
                                        <label htmlFor="milestones">Milestones</label>
                                        <input type="text" name="milestones" id="milestones" className="form-control" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="status">Status</label>
                                        <input type="text" name="status" id="status" className="form-control" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="extraStatus">Extra Status</label>
                                        <input type="text" name="extraStatus" id="extraStatus" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="makePrivate" name="makePrivate" />
                                        <label className="form-check-label" htmlFor="makePrivate">
                                            Make Private
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="billable" name="billable" />
                                        <label className="form-check-label" htmlFor="billable">
                                            Billable
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="repeat" name="repeat" onChange={repeatChange} checked={showRepeat} />
                                        <label className="form-check-label" htmlFor="repeat">
                                            Repeat
                                        </label>
                                    </div>
                                    {showRepeat && (
                                        <div className="form-group mt-2">
                                            <label htmlFor="repeatInterval">Repeat Interval</label>
                                            <input type="text" name="repeatInterval" id="repeatInterval" className="form-control" />
                                        </div>
                                    )}
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="dependentTask" name="dependentTask" onChange={dependentChange} checked={showDependent} />
                                        <label className="form-check-label" htmlFor="dependentTask">
                                            Dependent Task
                                        </label>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col">
                                        <input type="file" id="file" name="file" className="form-control" />
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col">
                                        <button type="submit" className="btn btn-primary" disabled={loading}>
                                            {loading ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </div>
                                </div>
                                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddTaskForm;
