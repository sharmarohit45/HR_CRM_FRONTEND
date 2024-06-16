import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css';

const EmployeeAddProjectForm = () => {
    const [editorData, setEditorData] = useState('');
    const [showDeadline, setShowDeadline] = useState(true);
    const [showFeild, setShowFeild] = useState(true);
    const [selectedFilms, setSelectedFilms] = useState([]);
    const handleEditorChange = (value) => {
        setEditorData(value);
    };

    const handleCheckboxChange = () => {
        setShowDeadline(!showDeadline);
    };
    const fieldChange = () => {
        setShowFeild(!showFeild)
    }

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
    const handleFilmsChange = (event, value) => {
        setSelectedFilms(value);
    };
    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        {
            title: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        {
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
        },
        {
            title: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980,
        },
    ];


    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="row mb-2">
                            <div className="col">
                                <h2>Project Details</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="subject">Short Code</label>
                                                <input type="text" placeholder="Project unique short code" className="form-control" />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="subject">Project Name</label>
                                                <input type="text" placeholder="project name" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="">Start Date</label>
                                            <input type="text" name="" id="" className='form-control' />
                                        </div>
                                        {showDeadline && (
                                            <>
                                                <div className="col">
                                                    <label htmlFor="">Deadline</label>
                                                    <input type="text" name="" id="" className='form-control' />
                                                </div>
                                            </>
                                        )}
                                        <div className="col pt-2">
                                            <label htmlFor=""></label><br />
                                            <input type="checkbox" onChange={handleCheckboxChange} checked={showDeadline} className="form-check-input" /> There is no project deadline
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="">Project Category</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="btnGroupAddon" />
                                                <div className="input-group-text" id="btnGroupAddon" style={{ cursor: 'pointer' }}>Add</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Department</label>
                                            <select name="" id="" className='form-select'>
                                                <option value="">--</option>
                                                <option value="">--</option>
                                                <option value="">--</option>
                                                <option value="">--</option>
                                                <option value="">--</option>
                                                <option value="">--</option>
                                                <option value="">--</option>
                                                <option value="">--</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Client</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="btnGroupAddon" />
                                                <div className="input-group-text" id="btnGroupAddon" style={{ cursor: 'pointer' }}>Add</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="editor">Project Summary</label>
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
                                                <div className="row mt-3 mb-3">
                                                    <div className="col">
                                                        <label htmlFor="">Add File</label>
                                                        <input type="file" name="" id="" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className="row mt-3 mb-3">
                                                    <div className="col">
                                                        <label htmlFor="">Currency</label>
                                                        <input type="text" name="" id="" className='form-control' />
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor="">Project Budget</label>
                                                        <input type="text" name="" id="" className='form-control' />
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor="">Hours Estimate (In Hours)</label>
                                                        <input type="text" name="" id="" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className="row mt-3 mb-3">
                                                    <div className="col"><input type="checkbox" name="" id="" className="form-check-input"/> Allow manual time logs</div>
                                                    <div className="col"><input type="checkbox" name="" id=""className="form-check-input" onChange={fieldChange} checked={showFeild}/> Enable Miroboard</div>
                                                    {showFeild && (
                                                        <>
                                                            <div className="col">
                                                                <label htmlFor="">Miro Board ID </label>
                                                                <input type="text" name="" className='form-control' id="" />
                                                            </div>
                                                            <div className="col">
                                                                <input type="checkbox" name="" id="" />Client can access miro
                                                            </div>
                                                        </>
                                                    )}

                                                    <div className="col"><input type="checkbox" name="" id="" className="form-check-input"/> Send task notification to client</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-2 mb-0">
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
}

export default EmployeeAddProjectForm