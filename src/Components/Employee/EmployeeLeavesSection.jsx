import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListIcon from '@mui/icons-material/List';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import EmployeeLeaveForm from './EmployeeLeaveForm';

const EmployeeLeavesSection = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const response = await fetch("http://localhost:8000/", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setRows(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Leaves</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Leaves</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    {/* Page Content */}
                    <div className="row mb-3">
                        <div className="row mb-3">
                            <div className="col-8">
                                <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> New Leave</button>
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                <div className="btn-group">
                                    <Link to="/employee/leaves" className="btn btn-dark text-white" aria-current="page"><ListIcon /></Link>
                                    <Link to="/employee/leaves-calendar" className="btn btn-white" aria-current="page"><CalendarTodayIcon /></Link>
                                    <Link to="/employee/my-leaves" className="btn btn-white" aria-current="page"><PersonIcon /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <DataGrid
                                        columns={[
                                            { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'contactName', headerName: 'Contact Name', hideable: false, width: 100 },
                                            { field: 'companyName', headerName: 'Company Name', width: 190 },
                                            { field: 'email', headerName: 'Email', hideable: false, width: 190 },
                                            { field: 'addedBy', headerName: 'Added By', width: 150 },
                                            { field: 'created', headerName: 'Created', width: 150 },
                                            {
                                                field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                    <div> <MoreVertIcon className='f-s' /></div>
                                                )
                                            },
                                        ]}
                                        rows={rows
                                            //     rows.map(row => ({
                                            //     id: row.id,
                                            //     name: row.name,
                                            //     companyName: row.companyName,
                                            //     email: row.email,
                                            //     addedBy: row.addedBy,
                                            //     savedAt: row.savedAt,
                                            //     action: row.action
                                            // }))
                                        }
                                        slots={{
                                            toolbar: GridToolbar,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                            <div className="offcanvas-header">
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Leave</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <EmployeeLeaveForm />
                            </div>
                        </div>
                    </div>
                    {/*End Page Content*/}
                </div>
            </div>
        </>
    )
}

export default EmployeeLeavesSection