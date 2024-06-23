import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const AdminPayrollSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Payroll</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Payroll</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 mb-3">
                        <div className="col">
                           <Link to="/admin/payroll-invoice"><button type="button" className="btn btn-white"> <i className='fa fa-eye'></i></button></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="row">
                                    <div className="col">
                                        <h3><b>Generate Payroll</b></h3>
                                    </div>
                                </div><hr />
                                <form action="">
                                    <div className="row p-3 pb-0">
                                        <div className="col">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="expenseClaims" id="expenseClaims" />
                                                <label class="form-check-label" for="expenseClaims"> Include Expense Claims</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="addTimelogs" id="addTimelogs" />
                                                <label class="form-check-label" for="addTimelogs">
                                                    Add timelogs to salary
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="useAttendance" id="useAttendance" autocomplete="off" />
                                                <label class="form-check-label" for="useAttendance">
                                                    Use Attendance
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3 p-3 pt-0">
                                        <div className="col-sm-4">
                                            <label htmlFor="">Department</label>
                                            <select name="" id="" className="form-select">
                                                <option value="">--</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-4">
                                            <label htmlFor="">Select Employee</label>
                                            <select name="" id="" className="form-select">
                                                <option value="">--</option>
                                            </select>
                                        </div>
                                    </div><hr />
                                    <div className="row mt-3 mb-3">
                                        <div className="col text-end">
                                            <button type="submit" className="btn btn-white"><i className='fa fa-paper-plane'></i> Generate</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <div className="card" style={{height:'400px'}}>
                                <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'Id', hideable: false, width: 150 },
                                        { field: 'name', headerName: 'Name', hideable: true, width: 250 },
                                        { field: 'netSalery', headerName: 'Net Salery', hideable: true, width: 150 },
                                        { field: 'ctc', headerName: 'CTC', hideable: true, width: 150 },
                                        { field: 'duration', headerName: 'Duration', hideable: true, width: 150 },
                                        { field: 'paidOn', headerName: 'Paid On', hideable: true, width: 100 },
                                        { field: 'status', headerName: 'Status', hideable: true, width: 100 },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> view</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-edit"></i> edit</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    // rows={rows}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPayrollSection