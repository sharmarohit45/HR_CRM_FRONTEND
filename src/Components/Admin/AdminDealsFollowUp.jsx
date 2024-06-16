import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AdminDealsFollowUp = () => {
    const [rows, setRows] = useState([]);
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
        leadName: '',
        followUpDate: '',
        startTime: '',
        reminderBefore: '',
        reminderUnit: '',
        remark: ''
    });

    const visibility = () => {
        setVisible(!visible)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // try {
        //     // Make POST request to your API endpoint
        //     const response = await fetch('', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(formData)
        //     });
        //     if (response.ok) {
        //         // Reset form data
        //         setFormData({
        //             leadName: '',
        //             followUpDate: '',
        //             startTime: '',
        //             reminderBefore: '',
        //             reminderUnit: '',
        //             remark: ''
        //         });
        //         // Close modal or handle success action
        //     } else {
        //         console.error('Failed to submit form');
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        // }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="row pb-4">
                <div className="col-sm-4">
                    <button type="button" className='btn btn-white' data-bs-toggle="modal" data-bs-target="#followupmodal" aria-label="Add File">
                        <i className='fa fa-plus f-s'></i> New Follow Up
                    </button>
                </div>
                <div className="col-sm-8"></div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card text-dark" style={{ minHeight: '520px' }}>
                        <DataGrid
                            columns={[
                                { field: 'id', headerName: 'Id', hideable: false, width: 150 },
                                { field: 'created', headerName: 'Created', hideable: true, width: 150 },
                                { field: 'nextFollowUp', headerName: 'Next Follow Up', hideable: true, width: 130 },
                                { field: 'remark', headerName: 'Remark', hideable: true, width: 130 },
                                {
                                    field: 'status', headerName: 'Status', hideable: true, width: 130, renderCell: (params) => (
                                        <div>
                                            <select className="form-select" name="reminderUnit" value={formData.reminderUnit} onChange={handleChange} aria-label="Default select example">
                                                <option value="pending">Pending</option>
                                                <option value="canceled">Canceled</option>
                                                <option value="completed">Completed</option>
                                            </select>
                                        </div>
                                    )
                                },
                                {
                                    field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                        <div>
                                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> edit</a></li> {/* Added download icon */}
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    )
                                },
                            ]}
                            rows={rows}
                            slots={{
                                toolbar: GridToolbar,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="followupmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header modal-xl">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Follow Up</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card mt-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col pt-2 mb-3">
                                            <label htmlFor="leadName" className="form-label">Lead Name</label>
                                        </div>
                                        <div className="col">
                                            <input type="text" name="leadName" value={formData.leadName} onChange={handleChange} id="leadName" className='form-control' style={{ border: 'none' }} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="followUpDate">Follow Up Next</label>
                                            <input type="date" name="followUpDate" value={formData.followUpDate} onChange={handleChange} id="followUpDate" className='form-control' />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="startTime">Start Time</label>
                                            <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} id="startTime" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={visibility} />
                                                <label className="form-check-label" htmlFor="flexCheckChecked" >
                                                    Send Reminder
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {!visible && (
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="reminderBefore">Reminder before</label>
                                                <input type="number" name="reminderBefore" value={formData.reminderBefore} onChange={handleChange} className='form-control' />
                                            </div>
                                            <div className="col p-4">
                                                <select className="form-select" name="reminderUnit" value={formData.reminderUnit} onChange={handleChange} aria-label="Default select example">
                                                    <option value="Day">Day(s)</option>
                                                    <option value="Hour">Hour(s)</option>
                                                    <option value="Minute">Minute(s)</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="remark">Remark</label>
                                            <textarea name="remark" value={formData.remark} onChange={handleChange} id="remark" className='form-control'></textarea>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <button type="submit" className="btn btn-white" aria-label="Send">Send</button> &nbsp;
                                            <button className="btn btn-white" data-bs-dismiss="modal" aria-label="Cancel">Cancel</button>
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

export default AdminDealsFollowUp;
