import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminHolidayForm from './AdminHolidayForm';
const AdminHolidayList = () => {
    const [holiday, setHoliday] = useState([]);
    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/holiday");
            setHoliday(response.data)
        } catch (error) {
            console.log("Data Fetching Failed", error)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Holiday List View</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Appreciation</li>
                                        <li className="breadcrumb-item active" aria-current="page">Holiday List View</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    {/* Page Content */}
                    <div className="row mb-3">
                        <div className="row mb-3">
                            <div className="col">
                                <button className="btn btn-white mb-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Holiday</button> &nbsp;
                                <button className="btn btn-white mb-3"><i className='fa fa-check'></i>  Mark Default Holidays</button>
                            </div>
                            <div className="col text-end">
                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" className="btn btn-white"><Link to="/admin/holiday"><i className="fa fa-calendar"></i></Link></button>
                                    <Link to='/admin/holiday-list'> <button type="button" className="btn btn-white"><i className="fa fa-list"></i></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card" style={{ minHeight: '520px' }}>
                                    <DataGrid
                                        columns={[
                                            { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'date', headerName: 'Date', hideable: false, width: 155 },
                                            {
                                                field: 'occasion', headerName: 'Occasion', hideable: false, width: 155
                                            },
                                            {
                                                field: 'day', headerName: 'Day', hideable: false, width: 155
                                            },
                                            {
                                                field: 'department', headerName: 'Department', hideable: false, width: 155
                                            },
                                            {
                                                field: 'designation', headerName: 'Designation', hideable: false, width: 155
                                            },
                                            {
                                                field: 'employementType', headerName: 'Employement Type', hideable: false, width: 155
                                            },
                                            {
                                                field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                    <>
                                                        <MoreVertIcon style={{ fontSize: '20px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                        <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                            <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-copy"></i> Duplicate</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-project-diagram"></i> Gant Chart</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-share-square"></i> Public Gant Chart</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-share-square"></i> Public Task Board</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-archive"></i> Archive</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                        </ul>
                                                    </>
                                                )
                                            },
                                        ]}
                                        rows={
                                            holiday.map(row => ({
                                                id: row.holidayId,
                                                date: row.date,
                                                occasion: row.occasion,
                                                day: row.day,
                                                department: row.department,
                                                designation: row.designation,
                                                employementType: row.employmentType,
                                                action: row.action
                                            }))
                                        }
                                        slots={{
                                            toolbar: GridToolbar,
                                        }}
                                        checkboxSelection
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                            <div className="offcanvas-header">
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Holiday</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <AdminHolidayForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHolidayList