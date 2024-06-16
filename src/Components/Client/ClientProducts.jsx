import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
function ClientProducts() {
    const dummyData = {
        columns: [
            { field: 'id', headerName: 'Id', width: 100 },
            { field: 'Productimage', headerName: 'Product Image', width: 200 },
            { field: 'Products', headerName: 'Products', width: 200 },
            { field: 'Price', headerName: 'Price ( inclusive of all taxes )', width: 200 },
            { field: 'Action', headerName: 'Action', width: 100 },
        ],
        rows: [
            {
                id: '',
                Productimage: '',
                Products: '',
                Price: '',
                Action: ''
            }
        ],
    };
    const VISIBLE_FIELDS = ['id', 'Productimage', 'Products', 'Price', 'Action'];
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
                                <h3>Products</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Dashboard</li>
                                        <li className="breadcrumb-item active" aria-current="page">Products</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row filter-row">
                        <div className="col-md-8"></div>
                        <div className="col-md-4">
                            <div className="add-emp-section">
                                <Link to="/client/products-cart" className=" btn btn-white"><b>Cart</b></Link>
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

export default ClientProducts