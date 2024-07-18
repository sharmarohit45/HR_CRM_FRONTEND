import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';

const EmployeeHolidayListView = () => {
    const [holidays, setHolidays] = useState([]);

    async function getHolidayData() {
        try {
            const response = await axios.get("http://localhost:8080/holiday");
            setHolidays(response.data);
        } catch (error) {
            console.log("data fetching failed", error);
        }
    }

    useEffect(() => {
        getHolidayData();
    }, []);

    const rows = holidays.flatMap(holiday => 
        holiday.holiDayDateOcassion.map(occasion => ({
            id: occasion.id,
            date: occasion.date,
            occasion: occasion.occasion,
            day: new Date(occasion.date).toLocaleDateString('en-US', { weekday: 'long' }), // Convert date to day of the week
            department: holiday.department,
            designation: holiday.designation,
            employmentType: holiday.employmentType,
            // action: ''
        }))
    );

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Holiday</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Holiday</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col text-end">
                            <Link to='/employee/holiday'><button type='button' className='btn btn-white'><i className='fa fa-calendar'></i></button></Link>
                            <Link to='/employee/holiday-list'><button type='button' className='btn btn-white'><i className='fa fa-list'></i></button></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'ID', hideable: false, width: 100 },
                                        { field: 'date', headerName: 'Date', hideable: false, width: 100 },
                                        { field: 'occasion', headerName: 'Occasion', width: 190 },
                                        { field: 'day', headerName: 'Day', width: 190 },
                                        { field: 'department', headerName: 'Department', width: 190 },
                                        { field: 'designation', headerName: 'Designation', width: 190 },
                                        { field: 'employmentType', headerName: 'Employment Type', width: 190 },
                                        // {
                                        //     field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                        //         <div> <MoreVertIcon style={{ fontSize: '20px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                        //         <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                        //             <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                        //         </ul></div>
                                        //     )
                                        // },
                                    ]}
                                    rows={rows}
                                    components={{
                                        Toolbar: GridToolbar,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployeeHolidayListView;
