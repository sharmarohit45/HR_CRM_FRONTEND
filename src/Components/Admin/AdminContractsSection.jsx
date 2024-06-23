import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddCOntractForm from './AdminAddCOntractForm';
import { Link } from 'react-router-dom';

const AdminContractsSection = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const response = await axios.get("/");
            
            if (!response.data) {
                throw new Error('Failed to fetch data');
            }
            
            setRows(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Contracts</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contracts</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="row mb-3">
                            <div className="col">
                                <button className='btn btn-white'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add Contracts</button>
                            <Link to="/admin/contracts-invoice"><button className='btn btn-white'><i className='fa fa-eye'></i></button></Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <DataGrid
                                        columns={[
                                            { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                            { field: 'subject', headerName: 'subject', hideable: false, width: 350 },
                                            {
                                                field: 'Amount', headerName: 'Amount', hideable: false, width: 290
                                            },
                                            
                                            {
                                                field: 'action', headerName: 'Action', width: 350, renderCell: (params) => (
                                                    <div> <MoreVertIcon className='f-s' /></div>
                                                )
                                            },
                                        ]}
                                        // rows={rows
                                        //          rows.map(row => ({
                                        //             id: row.id,
                                        //     //     name: row.name,
                                        //     //     companyName: row.companyName,
                                        //     //     email: row.email,
                                        //     //     addedBy: row.addedBy,
                                        //     //     savedAt: row.savedAt,
                                        //     //     action: row.action
                                        //      }))
                                        // }
                                        slots={{
                                            toolbar: GridToolbar,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                            <div className="offcanvas-header">
                                <h2 id="offcanvasRightLabel" className='text-bold'><b>Contracts</b></h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <AdminAddCOntractForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminContractsSection