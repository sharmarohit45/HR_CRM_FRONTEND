import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
function ClientCreditNote() {
  const dummyData = {
    columns: [
      { field: 'id', headerName: 'Id', width: 70 },
      { field: 'Creditnote', headerName: 'Credit Note', width: 155 },
      { field: 'Invoice', headerName: 'Invoice', width: 155 },
      { field: 'Name', headerName: 'Name', width: 155 },
      { field: 'Total', headerName: 'Total', width: 155 },
      { field: 'Creditnotedate', headerName: 'Credit Note Date', width: 155 },
      { field: 'Status', headerName: 'Status', width: 155 },
      { field: 'Action', headerName: 'Action', width: 155 },
    ],
    rows: [
      {
        id: 1,
        Creditnote: '',
        Invoice: '',
        Name: '',
        Total: '',
        Creditnotedate: '',
        Status: '',
        Action: ''
      }
    ],
  };
  const VISIBLE_FIELDS = ['Creditnote', 'Invoice', 'Name', 'Total', 'Creditnotedate', 'Status', 'Action'];
  const columns = React.useMemo(
    () => dummyData.columns.filter(column => VISIBLE_FIELDS.includes(column.field)),
    [dummyData.columns]
  );
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="page-head-box">
                <h3>Credit Note</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active" aria-current="page">Credit Note</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
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

export default ClientCreditNote