import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';

const AdminDealReportSection = () => {
  return (
    <>
    <div className="page-wrapper">
        <div className="content container-fluid pb-0">
            
            <div className="row">
                <div className="col-md-12">
                    <div className="page-head-box">
                        <h3>Deal Report</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Deal Report</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row">
                        <div className="col-sm-12">
                            <div className="card" style={{ minHeight: '520px' }}>
                                <DataGrid
                                    columns={[
                                        // { field: 'id', headerName: 'id', hideable: false, width: 170 },
                                        { field: 'dealAgent', headerName: 'Deal Agent', hideable: false, width: 170 },
                                        {
                                            field: 'totalDeals', headerName: 'Total Deals', hideable: false, width: 170
                                        },
                                        {
                                            field: 'wonDeals', headerName: 'Won Deals', hideable: false, width: 170
                                        },
                                        {
                                            field: 'lostDeals', headerName: 'Lost Deals', hideable: false, width: 170
                                        },
                                        {
                                            field: 'totalAmount', headerName: 'Total Amount', hideable: false, width: 170
                                        },
                                        {
                                            field: 'convertedAmount', headerName: 'Converted Amount', hideable: false, width: 170
                                        },
                                        {
                                            field: 'totalFollowUp', headerName: 'Total Follow Up', hideable: false, width: 170
                                        },
                                        {
                                            field: 'totalPendingFollowUp', headerName: 'Total Pending Follow Up', hideable: false, width: 170
                                        },
                                        
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

export default AdminDealReportSection