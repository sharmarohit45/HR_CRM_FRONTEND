import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdminAddProductsFOrm from './AdminAddProductsFOrm';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AdminProductsSection = () => {
    const [rows, setRows] = useState([]);

    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/product");
            setRows(response.data);
        } catch (error) {
            console.log("Data fetching failed", error);
        }
    }
    
   
       
 
    const deleteData = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/product/${productId}`);
            console.log('Product deleted:', response.data);
            setRows(prevRows => prevRows.filter(row => row.productId !== productId));
            toast.success('Deleted Successfully');
        } catch (error) {
            console.error('There was an error deleting the product!', error);
            toast.warning('Failed Deletion');
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Products</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Products</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col">
                            <button type="button" className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className='fa fa-plus f-s'></i> Add Products
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '520px' }}>
                                <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'Id', hideable: false, width: 50 },
                                        {
                                            field: 'productImage', headerName: 'Product Image', hideable: true, width: 130, renderCell: (params) => (
                                                <div className='text-center'>
                                                    <img src={`data:image/png;base64,${params.row.productImage}`} alt={params.value} style={{ height: '30px', width: '30px', marginRight: '10px', borderRadius: '50%' }} />
                                                </div>
                                            )
                                        },
                                        { field: 'products', headerName: 'Products', hideable: true, width: 160 },
                                        { field: 'price', headerName: 'Price (inclusive of all taxes)', hideable: true, width: 160 },
                                        { field: 'stockOnHand', headerName: 'Stock On Hand', hideable: true, width: 160 },
                                        { field: 'unitType', headerName: 'Unit Type', hideable: true, width: 160 },
                                        { field: 'clientCanPurchase', headerName: 'Client Can Purchase', hideable: true, width: 160 },
                                        {
                                            field: 'status', headerName: 'Status', hideable: true, width: 300, renderCell: (params) => (
                                                <select name="" id="" className="form-select mt-2">
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                </select>
                                            )
                                        },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-edit"></i> Edit</a></li>
                                                        <li id="liveToastBtn"><a className="dropdown-item" href="#" onClick={() => deleteData(params.row.id)}><i className="fa fa-trash"></i> Delete</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-copy"></i> Duplicate</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    rows={rows.map(row => ({
                                        id: row.productId,
                                        productImage: row.addImages,
                                        products: row.name,
                                        price: row.costPrice,
                                        stockOnHand: row.openingStocks,
                                        unitType: row.type,
                                        clientCanPurchase: row.clientCanPurchase,
                                        status: row.status,
                                    }))}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Products</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminAddProductsFOrm />
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default AdminProductsSection;
