import React from 'react'

const AdminAddVendorForm = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="row">
                            <div className="col"><h3>Account Details</h3></div>
                        </div>
                        <hr />
                        <form action="">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="">Primary Contact Name</label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Company Name</label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Email</label>
                                    <input type="email" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Phone</label>
                                    <input type="number" name="" id="" min={0} className="form-control" />
                                </div>
                            </div><hr />
                            <div className="row mt-3">
                                <div className="col">
                                    <h3>Other Details</h3>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Official Website</label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Opening Balance</label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Currency</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col"></div>
                            </div><hr />
                            <div className="row mt-3">
                                <div className="col">
                                    <h3>Address</h3>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Billing Address</label>
                                    <textarea name="" id="" className="form-control"></textarea>

                                </div>
                                <div className="col">
                                    <label htmlFor="">Shipping Address</label>
                                    <textarea name="" id="" className="form-control"></textarea>

                                </div>
                            </div>
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <button type="submit" className="btn btn-white">Save</button> &nbsp;
                                    <button type="button" className="btn btn-white" data-bs-dismiss="offcanvas">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAddVendorForm