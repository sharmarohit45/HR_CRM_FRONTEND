import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddNotice from './AdminAddNotice';
import axios from 'axios';
import AdminNoticeBoardCanva from './AdminNoticeBoardCanva';

const AdminNoticeBoardSection = () => {
    const [rows, setRows] = useState([]);

    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/notice");
            setRows(response.data);
        } catch (error) {
            console.log("Fetching data unsuccessful", error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* Page Header */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Notice Board</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Notice Board</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    {/* Page Content */}
                    <div className="row mb-3">
                        <div className="col">
                            <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add New Notice</button> &nbsp;
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card" style={{ minHeight: '520px' }}>
                            <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'ID', width: 100 },
                                        { field: 'noticeHeading', headerName: 'Notice', width: 585,
                                             renderCell: (params) => (
                                            <>
                                             <div style={{cursor:'pointer'}} data-bs-toggle="offcanvas" data-bs-target="#canvasModal" aria-controls="offcanvasRight">{params.row.noticeHeading}</div>
                                            </>
                                           
                                        ) 
                                    },
                                        { field: 'date', headerName: 'Date', width: 155 },
                                        { field: 'type', headerName: 'To', width: 155 },
                                        {
                                            field: 'action', headerName: 'Action', width: 180, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    rows={rows.map(row => ({
                                        id: row.noticeId,
                                        noticeHeading: row.noticeHeading,
                                        date: row.date,
                                        type: row.type,
                                    }))}
                                    components={{
                                        Toolbar: GridToolbar,
                                    }}
                                    checkboxSelection
                                />
                                {console.log(rows.noticeId)}
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Add New notice</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminAddNotice />
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="canvasModal" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Notice Board</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminNoticeBoardCanva/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminNoticeBoardSection;
