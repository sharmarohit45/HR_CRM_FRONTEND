import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminProposalForm from './AdminProposalForm';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminProposalSection = () => {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/proposals');
            setRows(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleProfileChange = (proposalId) => {
        navigate(`/admin/proposal-invoice/${proposalId}`, { state: { proposalId } });
    };

    const columns = [
        { field: 'proposal', headerName: 'Proposal', width: 150 },
        { field: 'deals', headerName: 'Deals', width: 130 },
        { field: 'contactName', headerName: 'Contact Name', width: 130 },
        { field: 'total', headerName: 'Total', width: 130 },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'validTill', headerName: 'Valid Till', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params) => (
                <div>
                    <MoreVertIcon
                        style={{ fontSize: '15px' }}
                        className="dropdown-toggle"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    />
                    <ul
                        className="dropdown-menu btn"
                        aria-labelledby="dropdownMenuLink"
                        style={{ fontSize: 'smaller' }}
                    >
                        <li><a className="dropdown-item" href="#" onClick={() => handleProfileChange(params.row.id)}><i className="fa fa-eye"></i> View</a></li>
                        <li><a className="dropdown-item" href="#"><i className="fa fa-link"></i> Public link</a></li>
                        <li><a className="dropdown-item" href="#"><i className="fa fa-download"></i> Download</a></li>
                        <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                        <li><a className="dropdown-item" href="#"><i className="fa fa-send-o"></i> Send</a></li>
                        <li><a className="dropdown-item" href="#"><i className="fa fa-plus"></i> Create invoice</a></li>
                        <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                    </ul>
                </div>
            )
        }
    ];

    const rowsData = rows.map((row) => ({
        id: row.proposalId,
        proposal: row.proposalId,
        deals: row.deals.dealName,
        contactName: row.deals.lead.name,
        total: row.total,
        date: row.date,
        validTill: row.validTill,
        status: row.status,
    }));

    return (
        <div className="page-wrapper">
            <div className="content container-fluid pb-0">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-head-box">
                            <h3>Proposal</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="admin-dashboard.html">Dashboard</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Proposal</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-sm-4">
                        <button
                            type="button"
                            className="btn btn-white"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                        >
                            <i className="fa fa-plus f-s"></i> Create Proposal
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card text-dark" style={{ minHeight: '520px' }}>
                            <DataGrid
                                columns={columns}
                                rows={rowsData}
                                slots={{ toolbar: GridToolbar }}
                            />
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                    <div className="offcanvas-header">
                        <h2 id="offcanvasRightLabel" className="text-bold"><b>Create Proposal</b></h2>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <AdminProposalForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProposalSection;