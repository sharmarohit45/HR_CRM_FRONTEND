import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
function ClientPayments() {

  const dummyData = {
    columns: [
      { field: 'id', headerName: 'Id', width: 70 },
      { field: 'Code', headerName: 'Code', width: 155 },
      { field: 'Project', headerName: 'Project', width: 155 },
      { field: 'Invoice', headerName: 'Invoice', width: 155 },
      { field: 'Order', headerName: 'Order', width: 155 },
      { field: 'Amount', headerName: 'Amount', width: 155 },
      { field: 'Paidon', headerName: 'Paid On', width: 155 },
      { field: 'Paymentgateway', headerName: 'Payment Gateway', width: 150 },
      { field: 'Status', headerName: 'Status', width: 150 },
      { field: 'Action', headerName: 'Action', width: 155 },
    ],
    rows: [
      {
        id: 1,
        Code: 'SEO',
        Project:'Search engine optimization (SEO) service',
        Invoice: 'INV#001',
        Order: '',
        Amount: 'Total: $38,970.00',
        Paidon: '02-02-2024',
        Paymentgateway: 'Bank Transfer',
        Status: 'paid',
        Action: ''
      }
    ],
  };
  const VISIBLE_FIELDS = ['id', 'Code', 'Project', 'Invoice', 'Order', 'Amount', 'Paidon', 'Paymentgateway', 'Status', 'Action'];
  const columns = React.useMemo(
    () => dummyData.columns.filter(column => VISIBLE_FIELDS.includes(column.field)),
    [dummyData.columns]
  );
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* <!-- Page Header --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="page-head-box">
                <h3>Payments</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active" aria-current="page">Payments</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}
          <div className="row">
            <div className="col-md-12">
              <Box className="bg-white p-4">
                <DataGrid style={{ fontSize: 'smaller' }}
                  rows={dummyData.rows}
                  disableColumnFilter
                  disableColumnSelector
                  disableDensitySelector
                  columns={columns}
                  slots={{ toolbar: GridToolbar }}
                  slotProps={{
                    toolbar: {
                      showQuickFilter: true,
                    },
                  }}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientPayments