import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddBankAccount from './AdminAddBankAccount';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminBankAccountSection = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAccountData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/account-data");
            setRows(response.data);
            setLoading(false);
        } catch (error) {
            console.log("Data fetching failed", error);
            setError("Failed to fetch account data");
            setLoading(false);
        }
    };

    const deleteAccount = async (accountId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/accounts/${accountId}`);
            if (response.status === 200) {
                toast.success('Account deleted successfully');
                getAccountData();
            }
        } catch (error) {
            console.error('Error deleting account:', error);
            toast.error('Error deleting account');
        }
    };

    useEffect(() => {
        getAccountData();
    }, []);

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Bank Account</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Bank Account</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-sm-4">
                            <button type="button" className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className='fa fa-plus f-s'></i> Add Bank Account
                            </button>
                        </div>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '520px' }}>
                                <DataGrid
                                    loading={loading}
                                    columns={[
                                        { field: 'id', headerName: 'Id', hideable: false, width: 50 },
                                        {
                                            field: 'bankAccount', headerName: 'Bank Account', hideable: true, width: 250, renderCell: (params) => (
                                                <>
                                                    <img src={`data:image/jpeg;base64,${params.row.imageData}`} style={{ borderRadius: '15px', height: '40px', width: '40px' }} />
                                                    &nbsp; {params.row.bankAccount}
                                                </>
                                            )
                                        },
                                        { field: 'accountHolderName', headerName: 'Account Holder Name', hideable: true, width: 130 },
                                        { field: 'accountType', headerName: 'Account Type', hideable: true, width: 130 },
                                        { field: 'type', headerName: 'Type', hideable: true, width: 130 },
                                        { field: 'currency', headerName: 'Currency', hideable: true, width: 130 },
                                        {
                                            field: 'status', headerName: 'Status', hideable: true, width: 130, renderCell: (params) => (
                                                <div className='pt-2'>
                                                    <select name="" id="" className='form-select'>
                                                        <option value="Active">Active</option>
                                                        <option value="Inactive">Inactive</option>
                                                    </select>
                                                </div>
                                            )
                                        },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        {/* <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li> */}
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                        <li onClick={() => deleteAccount(params.row.id)}><a className="dropdown-item" href="#"><i className="fa fa-trash"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    rows={rows.map(row => ({
                                        id: row.accountID,
                                        bankAccount: row.bankName,
                                        accountHolderName: row.accountHolderName,
                                        accountType: row.accountType,
                                        type: row.ll,
                                        currency: row.currency,
                                        status: row.status,
                                        imageData: row.bankData,
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
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Bank Account</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminAddBankAccount />
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            ...
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default AdminBankAccountSection;
