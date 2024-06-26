import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const AdminExpenseReportSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Expense Report</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Expense Report</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card" style={{ height: '100px' }}>
                                <div className="row">
                                    <div class="col text-center p-3">
                                        <h5 class=""><b>Total Expenses</b></h5>
                                        <div class="">
                                            <p class=""><span id="tds"><b>$0.00</b></span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-sm-4 p-4" style={{ fontSize: '25px', color: '#99a5b5' }}>
                                        <i class="fa fa-coins text-lightest f-18"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card p-2">
                                <h4><b>Expense Report</b></h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-2">
                                <h4><b>Expense Category Report</b></h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '590px',fontSize:'smaller' }}>
                                <DataGrid
                                    columns={[
                                        // { field: 'id', headerName: 'Id', hideable: false, width: 150 },
                                        { field: 'itemName', headerName: 'Item Name', hideable: true, width: 150 },
                                        { field: 'price', headerName: 'Price', hideable: true, width: 180 },
                                        { field: 'pricedoller', headerName: 'Price (USD)', hideable: true, width: 180 },
                                        { field: 'employees', headerName: 'Employees', hideable: true, width: 180 },
                                        { field: 'purchasedFrom', headerName: 'purchased From', hideable: true, width: 180 },
                                        { field: 'bankAccount', headerName: 'Bank Account', hideable: true, width: 180 },
                                        { field: 'purchaseDate', headerName: 'Purchase Date', hideable: true, width: 180 },
                                        { field: 'bill', headerName: 'Bill', hideable: true, width: 180 },
                                        { field: 'status', headerName: 'Status', hideable: true, width: 180 },
                                    ]}
                                    // rows={rows}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminExpenseReportSection