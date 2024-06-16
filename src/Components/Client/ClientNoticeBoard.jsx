import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
function ClientNoticeBoard() {
  const dummyData = {
    columns: [
      { field: 'id', headerName: 'id', width: 70 },
      { field: 'Notice', headerName: 'Notice', width: 350 },
      { field: 'Date', headerName: 'Date', width: 400 },
      { field: 'Action', headerName: 'Action', width: 400 },
    ],
    rows: [
      { id:'',Notice: '',Date: '',  Action: ''}
    ],
  };

  // Define visible fields
  const VISIBLE_FIELDS = ['Notice', 'Date','Action'];

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
              <h3>Notice Board</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Dashboard</li>
                  <li className="breadcrumb-item active" aria-current="page">Notice Board</li>
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

export default ClientNoticeBoard