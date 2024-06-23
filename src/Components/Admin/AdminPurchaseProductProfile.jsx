import React from 'react'

const AdminPurchaseProductProfile = () => {
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
                                        <li className="breadcrumb-item">
                                            <a href="admin-dashboard.html">Dashboard</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Products</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="card tab-box mt-3">
                        <div className="row user-tabs">
                            <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                                    <li className="nav-item">
                                        <a href="#OverView" data-bs-toggle="tab" className="nav-link active">OverView</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#Images" data-bs-toggle="tab" className="nav-link">Images</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#emp_tasks" data-bs-toggle="tab" className="nav-link">History</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content">
                        <div className='tab-pane fade' id="OverView">
                            <div className="row">
                                <div class="card">
                                    <div className="col">
                                        <div class="row">
                                            <div class="col">
                                                <h3><b>Product Info</b>
                                                </h3>
                                            </div>
                                            <div className="col text-end">
                                            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Name</p>
                                                        <p>--</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Product Type</p>
                                                        <p>--</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Unit Type</p>
                                                        <p>--</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Tax</p>
                                                        <p>--                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Hsn/Sac</p>
                                                        <p>--</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Product Category</p>
                                                        <p>--</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Product Sub Category</p>
                                                        <p>--</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Client Can Purchase</p>
                                                        <p>--</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Downloadable</p>
                                                        <p>--</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Description</p>
                                                        <p>--</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p><b>Sales Information</b></p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Selling Price</p>
                                                        <p>--</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p><b>Purchase Information</b></p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col d-flex justify-content-between">
                                                        <p>Cost Price</p>
                                                        <p>--</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="row">
                                            <div class="col d-flex justify-content-between">
                                                <p>Opening Stock</p>
                                                <p>--</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col d-flex justify-content-between">
                                                <p>Stock On Hand</p>
                                                <p>--</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col d-flex justify-content-between">
                                                <p>Committed Stock</p>
                                                <p>--</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col d-flex justify-content-between">
                                                <p>Available For Sale</p>
                                                <p>--</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='tab-pane fade' id="Images">
                            <div className="row">
                                <h2>kdncnk</h2>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}

export default AdminPurchaseProductProfile