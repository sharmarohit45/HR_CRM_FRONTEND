import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
function ClientTickets() {
  const dummyData = {
    columns: [
      { field: 'id', headerName: 'id', width: 70 },
      { field: 'Ticket', headerName: 'Ticket', width: 155 },
      { field: 'Ticketsubject', headerName: 'Ticketsubject', width: 155 },
      { field: 'Requestedon', headerName: 'Requested On', width: 155 },
      { field: 'Others', headerName: 'Others', width: 155 },
      { field: 'Status', headerName: 'Status', width: 155 },
      { field: 'Action', headerName: 'Action', width: 155 },
    ],
    rows: [
      { id: '', Ticket: '', Ticketsubject: '', Requestedon: '', Others: '', Status: '', Action: '' },

    ],
  };
  const VISIBLE_FIELDS = ['id', 'Ticket', 'Ticketsubject', 'Requestedon', 'Others', 'Status', 'Action'];
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
                <h3>Tickets</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active" aria-current="page">Tickets</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}
          <div className="row ">
            <div className="col-3">
              <div className="card">
                <div className="row p-2">
                  <div className='col-10'>
                    <h4><b>Total Tickets</b></h4>
                    <p>0</p>
                  </div>
                  <div className="col-2">
                    <i className="fas fa-layer-group" style={{ fontSize: '25px', paddingTop: '10px' }}></i>
                  </div>
                </div>

              </div>

            </div>
            <div className="col-3">
              <div className="card">
                <div className="row p-2">
                  <div className='col-10'>
                    <h4><b>Closed Tickets</b></h4>
                    <p>0</p>
                  </div>
                  <div className="col-2">
                    <i className="fas fa-ticket-alt" style={{ fontSize: '25px', paddingTop: '10px' }}></i>
                  </div>
                </div>

              </div>

            </div>
            <div className="col-3">
              <div className="card">
                <div className="row p-2">
                  <div className='col-10'>
                    <h4><b>Open Signed</b></h4>
                    <p>0</p>
                  </div>
                  <div className="col-2">
                    <i className="fas fa-file-signature" style={{ fontSize: '25px', paddingTop: '10px' }}></i>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="row p-2">
                  <div className='col-10'>
                    <h4><b>Pending Signed</b></h4>
                    <p>0</p>
                  </div>
                  <div className="col-2">
                    <i className="fas fa-file-signature" style={{ fontSize: '25px', paddingTop: '10px' }}></i>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="row filter-row d-flex align-content-start">
            <div className="col-md-2">
              <div className="add-emp-section">
                <Link to="/client/create-tickets" className="btn btn-success btn-add-emp"><i className="fas fa-plus"></i> Create Ticket</Link>
              </div>
            </div>
            <div className="col-md-8"></div>
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

export default ClientTickets