import React from 'react'

const AdminvendorPaymentForm = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <form action="">
                            <div className="row">
                                <div className="col">
                                    <h3><b>Vendor Payment Details</b></h3>
                                </div>
                            </div><hr />
                            <div className="row">
                                <div className="col"><label htmlFor="">Vendor </label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Payment Made</label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Payment Date</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Bank Account</label>
                                    <input type="date" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <h3><b>Bill Details</b></h3>
                                </div>
                            </div><hr />
                            <div className="row mt-3">
                                <div className="col">
                                    <table className='table table-stripped'>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Bill</th>
                                                <th>Purchase Order</th>
                                                <th>Bill Amount</th>
                                                <th>Amount Due</th>
                                                <th>Payment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td>0.00</td>
                                                <td><input type="text" name="" id="" className="form-control" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col"></div>
                                <div className="col-sm-4">
                                    <div className='' style={{ border: '3px dotted orange', height: '250px' }}>
                                        <table className='table table-stripped text-end' style={{fontSize:'smaller',border:'0'}}>
                                            <tr>
                                                <th style={{color:'orange'}}>Amount Paid</th>
                                                <td>0.00</td>
                                            </tr>
                                            <tr>
                                                <th style={{color:'orange'}}>Amount Used For Payments</th>
                                                <td>0.00</td>
                                            </tr>
                                            <tr>
                                                <th style={{color:'orange'}}>Amount Refunded	</th>
                                                <td>0.00</td>
                                            </tr>
                                            <tr>
                                                <th style={{color:'orange'}}>Amount In Excess</th>
                                                <td>0.00</td>
                                            </tr>
                                        </table>

                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Internal Note</label>
                                    <textarea name="" id="" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <div className="form-check">
                                        <input type="checkbox" name="" id="" className='form-check-input'/>
                                        <label htmlFor="" className='form-check-text'>Send Email Notification to Vendor</label>
                                    </div>
                                </div>
                            </div><hr />
                            <div className="row">
                                <div className="col">
                                    <button type="submit" className="btn btn-white">Save</button> &nbsp;
                                    <button type="button" className="btn btn-white">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminvendorPaymentForm