import React from 'react'
import { Link } from 'react-router-dom'

function ClientProductsCart() {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Cart</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Dashboard</li>
                                        <li className="breadcrumb-item active" aria-current="page">Cart</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row filter-row">
                        <div className="col-md-8"></div>
                        <div className="col-md-4">
                            <div className="add-emp-section">
                                <Link to="/client/products" className="btn btn-danger"> Empty Cart </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card w-full">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card h-700">

                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-end">
                                <div className="col-sm-2">
                                   <Link to='/client/products'><button className="btn btn-info w-100">All Products</button></Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientProductsCart