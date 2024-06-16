import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
function ClientEstimates() {
  const dummyData = {
    columns: [
      { field: 'id', headerName: 'id', width: 70 },
      { field: 'Estimates', headerName: 'Estimates', width: 70 },
      { field: 'Total', headerName: 'Total', width: 155 },
      { field: 'Validtill', headerName: 'Valid Till', width: 155 },
      { field: 'Created', headerName: 'Created', width: 155 },
      { field: 'Status', headerName: 'Status', width: 150 },
      { field: 'Action', headerName: 'Action', width: 155 },
    ],
    rows: [
      { id:1,Estimates: 'EST#001', Total: '$4,100.00', Validtill: '10-02-2023', Created: '15-02-2024', Status: 'waiting',  Action: '' },
      { id:2, Estimates: 'EST#002', Total: '$1,200.00', Validtill: '10-04-2023', Created: '15-02-2024', Status: 'waithing', Action: '' },
      // Add more rows as needed
    ],
  };

  // Define visible fields
  const VISIBLE_FIELDS = ['Estimates', 'Total', 'Validtill', 'Created', 'Status',  'Action'];

  // Filter columns based on visible fields
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
                <h3>Estimates</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active" aria-current="page">Estimates</li>
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

export default ClientEstimates