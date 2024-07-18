import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const EmployeeAddTaskForm = () => {
    const [editorData, setEditorData] = useState('');
    const [showFeild, setShowFeild] = useState(true);
    const [selectedFilms, setSelectedFilms] = useState([]);
    const [showRepeat, setShowRepeat] = useState(false)
    const [showDependent, setShowDependent] = useState(false)
    const handleEditorChange = (value) => {
        setEditorData(value);
    };

    const fieldChange = () => {
        setShowFeild(!showFeild);
    };
    const repeatChange = () => {
        setShowRepeat(!showRepeat)
    }
    const dependentChange =()=>{
        setShowDependent(!showDependent)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', {
            title: e.target.title.value,
            taskCategory: e.target.taskCategory.value,
            project: e.target.project.value,
            projectCategory: e.target.projectCategory.value,
            department: e.target.department.value,
            client: e.target.client.value,
            projectSummary: editorData,
            contractType: e.target.contractType.value,
            contractValue: e.target.contractValue.value,
            currency: e.target.currency.value,
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

    const handleFilmsChange = (event, value) => {
        setSelectedFilms(value);
    };

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    ];

    return (
       <>
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
                                        <label htmlFor="projectCategory">Start Date</label>
                                        <input type="date" name="startDate" id="startDate" className='form-control' />
                                    </div>
                                    {showFeild && (
                                        <div className="col">
                                            <label htmlFor="department">Due Date</label>
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
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-10">
                                                <label htmlFor="assignedTo">Assigned To</label>
                                                <Autocomplete style={{height:'44px'}}
                                                    multiple
                                                    options={top100Films}
                                                    getOptionLabel={(option) => option.title}
                                                    value={selectedFilms}
                                                    onChange={handleFilmsChange}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            // label="Add Project Members"
                                                            placeholder="Add Project Members"
                                                        />
                                                    )}
                                                />
                                            </div>
                                            <div className="col-2">
                                                <button type='button' className='btn btn-white'>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col"></div>
                                </div>
                                <div className="form-group">
                                    <div className="row pt-3">
                                        <div className="col">
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
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col">
                                        <h2 style={{ textDecoration: 'none' }} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i className='fa fa-angle-down'></i> Other Details
                                        </h2>
                                        <div className="collapse" id="collapseExample">
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="label">Label</label>
                                                    <div className="input-group mb-3">
                                                        <select id="label" name="label" className="form-select" required>
                                                            <option value="">Open this select menu</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <span className="input-group-text" type="button">Add</span>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="milestones">Milestones</label>
                                                    <select id="milestones" name="milestones" className="form-select" required>
                                                        <option value="">Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="status">Status</label>
                                                    <select id="status" name="status" className="form-select" required>
                                                        <option value="">Incomplete</option>
                                                        <option value="1">To Do</option>
                                                        <option value="2">Doing</option>
                                                        <option value="3">Completed</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="extraStatus">Status</label>
                                                    <select id="extraStatus" name="extraStatus" className="form-select" required>
                                                        <option value="">Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="col"></div>
                                                <div className="col"></div>
                                            </div>
                                            <div className="row mt-3 mb-3">
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="makePrivate" />
                                                        <label className="form-check-label" htmlFor="makePrivate">
                                                            Make Private
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="billable" />
                                                        <label className="form-check-label" htmlFor="billable">
                                                            Billable
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="timeEstimates" onChange={fieldChange} checked={showFeild} />
                                                        <label className="form-check-label" htmlFor="timeEstimates">
                                                            Time Estimates
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    {showFeild && (
                                                        <div className="row">
                                                            <div className="col">
                                                                <label htmlFor="hrs">Hrs</label>
                                                                <input type="number" id="hrs" className='form-control' />
                                                            </div>
                                                            <div className="col">
                                                                <label htmlFor="minutes">Minutes</label>
                                                                <input type="number" id="minutes" className='form-control' />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="repeat" onChange={repeatChange} checked={showRepeat} />
                                                        <label className="form-check-label" htmlFor="repeat">Repeat</label>
                                                        {showRepeat && (
                                                            <div className="row mt-2">
                                                                <div className="col">
                                                                    <label htmlFor="">Repeat every </label>
                                                                    <div className="input-group mb-3">
                                                                        <input type="text" className="form-control" aria-describedby="button-addon2" />
                                                                        <select className="form-select text-center" aria-label="Default select example" id="button-addon2">
                                                                            <option value="Day">Day(s)</option>
                                                                            <option value="Week(s)">Week(s)</option>
                                                                            <option value="Month">Month</option>
                                                                            <option value="Year">Year</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <label htmlFor="">Cycles </label>
                                                                    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2" />
                                                                </div>
                                                                <div className="col"></div>
                                                            </div>
                                                        )
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="dependentTask" onChange={dependentChange} checked={showDependent} />
                                                        <label className="form-check-label" htmlFor="dependentTask">
                                                            Task is dependent on another task
                                                        </label>
                                                        {showDependent&&(
                                                               <div className="row">
                                                                <div className="col">
                                                                    <label htmlFor="">Dependent Task</label>
                                                                <select className="form-select text-center" aria-label="Default select example">
                                                                           <option value=""></option>
                                                                        </select>
                                                                </div>
                                                               </div>
                                                        )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-3 mb-3">
                                                <div className="col">
                                                    <label htmlFor="file">Add File</label>
                                                    <input type="file" id="file" className='form-control' />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-group mt-2 mb-2">
                                    <div className="row">
                                        <div className="col text-end">
                                            <button type="submit" className="btn btn-white"><span>Submit</span></button> &nbsp;
                                            <button type="reset" className="btn btn-dark"><span>Reset</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade" id="CategoryModal" tabIndex="-1" aria-labelledby="CategoryModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="CategoryModalLabel">Add Category</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                {/* Modal content goes here */}
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-white">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
       </>
    );
}
export default EmployeeAddTaskForm