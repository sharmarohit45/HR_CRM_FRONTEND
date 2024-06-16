import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css';
const AdminAddAppereciation = () => {
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
                    <div className="row">
                        <div className="col">
                            <h3>Add Appreciation</h3>
                        </div>
                    </div>
                    <hr />
                    <form action="">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Award</label>
                                <select name="" id="" className='form-select'>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="">Given To</label>
                                <select name="" id="" className='form-select'>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="">Date</label>
                                <input type="date" name="" id="" className='form-control' />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="">Summary</label>
                                <ReactQuill
                                    // value={}
                                    theme="snow"
                                    modules={modules}
                                    formats={formats}
                                    className="form-control quill-editor"
                                />

                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="">Photo</label>
                                <input type="file" className='form-control' />
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <button type="submit" className='btn btn-white'><i className='fa fa-check'></i> Save</button> &nbsp;
                                <button type="button" className='btn btn-white'>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminAddAppereciation