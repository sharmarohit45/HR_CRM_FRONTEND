import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AdminDealsFileTab = () => {
    const [rows, setRows] = useState([]);

    return (
        <>
            <div className="row pb-4">
                <div className="col-sm-4">
                    <button type="button" className='btn btn-white' data-bs-toggle="modal" data-bs-target="#exampleModal" aria-label="Add File">
                        <i className='fa fa-plus f-s'></i> Add File
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
                                {
                                    field: 'fileName', headerName: 'File Name', hideable: false, width: 580
                                },
                                { field: 'date', headerName: 'Date', hideable: false, width: 330 },
                                {
                                    field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                        <div>
                                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-download"></i> Download</a></li>
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
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add File Info</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card mt-4">
                                <form action="">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="fileInput" className="form-label">Choose File</label>
                                            <input type="file" className="form-control" id="fileInput" />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <button className="btn btn-white" aria-label="Send">Send</button> &nbsp;
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
};

export default AdminDealsFileTab;
