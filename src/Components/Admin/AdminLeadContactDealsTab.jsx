import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import AdminDealsForm from './AdminDealsForm';

const AdminLeadContactDealsTab = ({ data }) => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/deals",);

            if (!response.data) {
                throw new Error('Failed to fetch data');
            }
            const filteredRows = response.data.filter(row => row.leadContacts === data.id);
            setRows(filteredRows);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className='fa fa-plus'></i> Add Deal
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <div className="card" style={{ minHeight: '520px' }}>
                        <DataGrid
                            columns={[
                                { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                { field: 'dealName', headerName: 'Deal Name', hideable: false, width: 190 },
                                { field: 'leadContacts', headerName: 'Lead Name', width: 190 },
                                { field: 'email', headerName: 'Email', hideable: false, width: 190 },
                                { field: 'mobile', headerName: 'Mobile', width: 150 },
                                { field: 'dealValue', headerName: 'Value', width: 150 },
                                { field: 'closeDate', headerName: 'Close Date', width: 150 },
                                { field: 'nextFollowUp', headerName: 'Next Follow Up', width: 150 },
                                { field: 'dealAgent', headerName: 'Deal Agent', width: 150 },
                                { field: 'dealWatcher', headerName: 'Deal Watcher', width: 150 },
                                { field: 'dealStages', headerName: 'Stage', width: 150 },
                                {
                                    field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                        <div>
                                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa fa-thumbs-up"></i> Add Follow Up</a></li>
                                            </ul>
                                        </div>
                                    )
                                },
                            ]}
                            rows={rows.map(row => ({
                                id: row.dealId,
                                dealName: row.dealName,
                                leadContacts: data.name,
                                email: data.email,
                                mobile: data.mobile,
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
        </>
    );
}

export default AdminLeadContactDealsTab;
