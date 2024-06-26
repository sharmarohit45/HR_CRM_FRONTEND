import React from 'react'

const AdminOfferLetterForm = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <form action="">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="">Job</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Job Aplicant</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Offer Expire On</label>
                                    <input type="date" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Expected Joining Date</label>
                                    <input type="date" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-3">
                                    <div className="form-check">
                                        <input type="checkbox" name="" id="" className='form-check-input' />
                                        <label htmlFor="" className='form-check-text'>Signature Required</label>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-check">
                                        <input type="checkbox" name="" id="" className='form-check-input' />
                                        <label htmlFor="" className='form-check-text'>Add Salery Structure</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <h4><b>Salary Structure</b></h4>
                                    <label htmlFor="" className='pt-2'>Select Salary Components</label>
                                </div>
                                <div className="col pt-5">
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Annual CTC </label>
                                </div>
                                <div className="col">
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Basic Salary</label>
                                    <input type="number" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Basic Value Type </label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                        <option value="">Fixed</option>
                                        <option value="">CTC Present</option>
                                    </select>
                                </div>
                            </div><hr />
                            <div className="row">
                                <div className="col">
                                    <h4><b>Earnings</b></h4>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Basic Salary</label>
                                </div>
                                <div className="col">
                                    <label htmlFor="">ctc_percent</label>
                                </div>
                                <div className="col">
                                    <input type="number" name="" id="" className='form-control' />
                                </div>
                                <div className="col">
                                    <input type="number" name="" id="" className='form-control' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminOfferLetterForm