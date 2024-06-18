import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminDealsForm from './AdminDealsForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AdminDeals() {
    const [rows, setRows] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    async function getData() {
        try {
            const response = await fetch("http://localhost:8080/deals", {
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
    async function deleteData(id) {
        try {
            // Show confirmation dialog before deleting
            const isConfirmed = window.confirm('Are you sure you want to delete this item?');
            if (!isConfirmed) return;

            const response = await axios.delete(`http://localhost:8080/deals/${id}`);

            if (response.status === 200) {
                console.log('Data deleted successfully');
                getData();
            } else {
                console.error('Failed to delete data');
            }
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }
    const profileOnchange = (id) => {
        navigate(`/admin/deals/profile/${id}`, { state: { id: id } });
    };
    useEffect(() => {
        getData();
        const intervalId = setInterval(getData, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Deals</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Deals</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-sm-4">
                            <button type="button" className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus f-s'></i> Add Deal</button>
                        </div>
                        <div className="col-sm-8"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '520px'}}>
                                <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'Id', hideable: false, width: 100 },
                                        {
                                            field: 'dealName', headerName: 'Deal Name', hideable: false, width: 100, renderCell: (params) => (
                                                <div onClick={() => profileOnchange(params.row.id)}>
                                                    {params.value}
                                                </div>
                                            )
                                        },
                                        { field: 'leadContacts', headerName: 'Lead Name', hideable: false, width: 130 },
                                        {
                                            field: 'email',headerName: 'Email',width: 150,renderCell: (params) => (
                                                <div>
                                                    <a href={`mailto:${params.row.email}`} style={{ textDecoration: 'none' }}>{params.row.email}</a>
                                                </div>
                                            )
                                        },
                                        {
                                            field: 'mobile', headerName: 'Mobile', width: 130,renderCell: (params) => (
                                                <div>
                                                    <a href={`tel:${params.row.mobile}`}>{params.row.mobile}</a>
                                                </div>
                                            )
                                        },
                                        { field: 'dealValue', headerName: 'Value', width: 130 },
                                        { field: 'closeDate', headerName: 'Close Date', width: 130 },
                                        { field: 'nextFollowUp', headerName: 'Next Follow Up', width: 130 },
                                        { field: 'dealAgent', headerName: 'Deal Agent', width: 130 },
                                        { field: 'dealWatcher', headerName: 'Deal Watcher', width: 130 },
                                        {
                                            field: 'dealStages', headerName: 'Stage', width: 170,renderCell: (params) => {
                                                const dealStages = ["Generated", "Qualified", "Initial_Contact", "Schedule_Appointment", "Proposal_Sent", "Win", "Lost"];
                                                const defaultValue = dealStages.includes(params.row.dealStages) ? params.value : "Generated";
                                                return (
                                                    <select className="form-select mt-2" aria-label="Deal Stages" defaultValue={defaultValue}>
                                                        <option value="Generated">Generated</option>
                                                        <option value="Qualified">Qualified</option>
                                                        <option value="Initial_Contact">Initial Contact</option>
                                                        <option value="Schedule_Appointment">Schedule Appointment</option>
                                                        <option value="Proposal_Sent">Proposal Sent</option>
                                                        <option value="Win">Win</option>
                                                        <option value="Lost">Lost</option>
                                                    </select>
                                                );
                                            }

                                        },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                        <li onClick={() => deleteData(params.row.id)}><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-thumbs-up"></i> Add Follow Up</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    rows={rows.map(row => ({
                                        id: row.dealId,
                                        dealName: row.dealName,
                                        leadContacts: row.lead.name,
                                        email: row.lead.email,
                                        mobile: row.lead.mobile,
                                        dealValue: row.dealValue,
                                        dealValue: row.dealValue,
                                        closeDate: row.closeDate,
                                        nextFollowUp: row.nextFollowUp,
                                        dealAgent: row.dealAgent,
                                        dealWatcher: row.dealWatcher,
                                        dealStages: row.dealStages,
                                        action: row.action
                                    }))}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                    {/* Lead Form Modal */}
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Deal Info</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="card">
                                <AdminDealsForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDeals