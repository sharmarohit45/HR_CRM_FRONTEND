import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
function ClientInvoices() {

  const dummyData = {
    columns: [
      { field: 'id', headerName: 'id', width: 70 },
      { field: 'Code', headerName: 'Code', width: 155 },
      { field: 'Invoice', headerName: 'Invoice', width: 155 },
      { field: 'Project', headerName: 'Project', width: 155 },
      { field: 'Total', headerName: 'Total', width: 155 },
      { field: 'InvoiceDate', headerName: 'Invoice Date', width: 155 },
      { field: 'Status', headerName: 'Status', width: 150 },
      { field: 'Action', headerName: 'Action', width: 155 },
    ],
    rows: [
      { id: 1, Code: 'SEO', Invoice: 'INV#001', Project: 'Search engine optimization (SEO) service', Total: 'Total: $38,970.00', InvoiceDate: '18-01-2024', Status: 'paid', Action: '' },
      { id: 2, Code: 'SEO', Invoice: 'INV#002', Project: 'Search engine optimization (SEO) service', Total: '$4,100.00', InvoiceDate: '13-01-2024', Status: 'unpaid', Action: '' },
      { id: 3, Code: 'OMFSNP', Invoice: 'INV#003', Project: 'Opinion mining for social networking platforms', Total: '$4,100.00', InvoiceDate: '22-01-2024', Status: 'paid', Action: '' },
    ],
  };
  const VISIBLE_FIELDS = ['Code', 'Invoice', 'Project', 'Total', 'Validtill', 'Created', 'Status', 'Action'];
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
                <h3>Invoices</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active" aria-current="page">Invoices</li>
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

export default ClientInvoices