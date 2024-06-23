import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css'
const AdminAddEvent = () => {
    const [visible,setVisible]=useState(false)
    const [remind,setRemind]=useState(false)

    function visibility(){
        setVisible(!visible)
    }
    function Reminder(){
        setRemind(!remind)
    }
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
                        <div className="row">
                            <div className="col">
                                <h3>Add Event</h3>
                            </div>
                        </div><hr />
                        <form action="">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="">Event Name</label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Label Color </label>
                                    <label for="exampleColorInput" class="form-label">Color picker</label>
                                    <input type="color" class="form-control form-control-color" id="exampleColorInput" title="Choose your color" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Where </label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col" >
                                    <label htmlFor="">Description</label>
                                    <ReactQuill
                                        theme="snow"
                                        modules={modules}
                                        formats={formats}
                                        className="form-control quill-editor"
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Starts On Date</label>
                                    <input type="date" name="" id="" className="form-control" />

                                </div>
                                <div className="col">
                                    <label htmlFor="">Starts On Time</label>
                                    <input type="time" name="" id="" className="form-control" />

                                </div>
                                <div className="col">
                                    <label htmlFor="">Ends On Date</label>
                                    <input type="date" name="" id="" className="form-control" />

                                </div>
                                <div className="col">
                                    <label htmlFor="">Ends On Time</label>
                                    <input type="time" name="" id="" className="form-control" />

                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Select Employee </label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Select Client </label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Host</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Status</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col p-4">
                                    <div className="form-check form-check-inline">
                                        <input type="checkbox" name="" id="" className="form-check-input" onClick={visibility}/>
                                        <label htmlFor="" className="input-form-lab">Repeat</label>
                                    </div>
                                </div>
                                <div className="col p-4">
                                    <div className="form-check form-check-inline">
                                        <input type="checkbox" name="" id="" className="form-check-input" onClick={Reminder}/>
                                        <label htmlFor="" className="input-form-lab">Send Reminder</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Event Link</label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                            </div>
                
                            {visible &&(
                                <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Repeat every</label>
                                    <input type="number" className='form-control' min={0} />

                                </div>
                                <div className="col">
                                    <label htmlFor=""></label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                        <option value="">Day(s)</option>
                                        <option value="">Week(s)</option>
                                        <option value="">Month</option>
                                        <option value="">Monthly on third Wednesday</option>
                                        <option value="">Year</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Cycles</label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            )}
                            {/* SHow on check Reminder */}
                            {remind && (
                                <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Remind before </label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor=""></label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                        <option value="">Day(s)</option>
                                        <option value="">Hour(s)</option>
                                        <option value="">Minute(s)</option>
                                    </select>
                                </div>
                            </div>
                            )}
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Add File</label>
                                    <input type="file" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <button type="submit" className="btn btn-white">Save</button> &nbsp;
                                    <button type="button" className="btn btn-white" data-bs-dismiss="offcanvas">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAddEvent