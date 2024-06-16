import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
function ClientOrders() {
    const dummyData = {
      columns: [
        { field: 'id', headerName: 'Id', width:100 }, // Adjust width as needed
        { field: 'Orderno', headerName: 'Order No', width:250 }, // Adjust width as needed
        { field: 'Total', headerName: 'Total', width:250 }, // Adjust width as needed
        { field: 'Orderdate', headerName: 'Order Date', width:250 }, // Adjust width as needed
        { field: 'Status', headerName: 'Status', width:250 }, // Adjust width as needed
        { field: 'Action', headerName: 'Action', width:100 }, // Adjust width as needed
    ],
      rows: [
        {
          id: '',
          Orderno: '',
          Total: '',
          Orderdate: '',
          Status:'',
          Action: ''
        }
      ],
    };
    const VISIBLE_FIELDS = ['Orderno', 'Total', 'Orderdate','Status', 'Action'];
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
                <h3>Orders</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active" aria-current="page">Orders</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row filter-row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="add-emp-section">
                <Link to="/client/products" className="btn btn-success btn-add-emp"><i className="fas fa-plus"></i> Add New Order</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Box className="bg-white p-4">
                <DataGrid style={{ fontSize: 'smaller'}}
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

export default ClientOrders