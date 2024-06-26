import React from 'react'

const AdminAddBillForm = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <form action="">
                            <div className="row">
                                <div className="col">
                                    <h3><b>Bill</b></h3>
                                </div>
                            </div><hr />
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="">Bill Number </label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Select Vendor</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Bill Date</label>
                                    <input type="date" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-3">
                                    <label htmlFor="">Purchase Order</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-6">
                                    <label htmlFor="">Note For The Recipient</label>
                                    <textarea name="" id="" className="form-control"></textarea>
                                </div>
                            </div><hr />
                            <div className="row mt-2 mb-2">
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

export default AdminAddBillForm