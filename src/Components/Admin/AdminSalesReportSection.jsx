import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';

const AdminSalesReportSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Sales Report</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Sales Report</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card" style={{ minHeight: '590px' }}>
                                <DataGrid
                                    columns={[
                                        // { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                        { field: 'paidOn', headerName: 'paid On', hideable: false, width: 100 },
                                        {
                                            field: 'invoiceNumber', headerName: 'Invoice Number', hideable: false, width: 100
                                        },
                                        {
                                            field: 'clientName', headerName: 'Client Name', hideable: false, width: 100
                                        },
                                        {
                                            field: 'invoiceValue', headerName: 'Invoice Value', hideable: false, width: 100
                                        },
                                        {
                                            field: 'amountPaid', headerName: 'Amount Paid', hideable: false, width: 100
                                        },
                                        {
                                            field: 'taxableValue', headerName: 'Taxable Value', hideable: false, width: 100
                                        },
                                        {
                                            field: 'discount', headerName: 'Discount', hideable: false, width: 100
                                        },
                                        {
                                            field: 'gst', headerName: 'GST', hideable: false, width: 100
                                        },
                                        {
                                            field: 'cgst', headerName: 'CGST', hideable: false, width: 100
                                        },
                                        {
                                            field: 'vat', headerName: 'VAT', hideable: false, width: 100
                                        },
                                        {
                                            field: 'igst', headerName: 'IGST', hideable: false, width: 100
                                        },
                                        {
                                            field: 'ugst', headerName: 'UGST', hideable: false, width: 100
                                        },
                                        {
                                            field: 'bankAccount', headerName: 'Bank Account', hideable: false, width: 100
                                        },
                                        // {
                                        //     field: 'action', headerName: 'Action', width: 10, renderCell: (params) => (
                                        //         <div>
                                        //             <MoreVertIcon className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                        //             <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                        //                 <li data-bs-toggle="modal" data-bs-target="#viewModal"><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                        //                 <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                        //                 <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                        //             </ul>
                                        //         </div>
                                        //     )
                                        // },
                                    ]}
                                    //  rows={departments.map(departments => ({
                                    //              id: departments.departmentId,
                                    //              departmentName: departments.departmentName,
                                    //              departmentParent: departments.departmentParent,
                                    //           action: departments.action
                                    //       }))
                                    //  }
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

export default AdminSalesReportSection