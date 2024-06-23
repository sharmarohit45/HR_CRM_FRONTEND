import React from 'react'

const AdminAddPaymentForm = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <form action="">
                            <div className="row">
                                <div className="col">
                                    <h3>Payment Details</h3>
                                </div>
                            </div><hr />
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="">Project</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Payment</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Paid On</label>
                                    <input type="date" name="" id="" className="form-control" />

                                </div>
                                <div className="col">
                                    <label htmlFor="">Amount</label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Currency</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Exchange Rate</label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Transaction Id</label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Payment Gateway</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Bank Account</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Receipt</label>
                                    <input type="file" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Remark</label>
                                    <textarea name="" id="" className='form-control'></textarea>
                                </div>
                            </div>
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <button type="submit" className='btn btn-white'>Submit</button> &nbsp;
                                    <button type="button" className='btn btn-white' data-bs-dismiss="offcanvas">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAddPaymentForm