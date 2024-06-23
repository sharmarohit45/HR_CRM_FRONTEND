import React from 'react'

const AdminAssetsForm = () => {
    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <h3>Add Asset Info</h3>
                        </div>
                    </div>
                    <hr />
                    <form action="">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Asset Name</label>
                                <input type="text" name="" id="" className="form-control" />
                            </div>
                            <div className="col">
                                <label htmlFor="">Asset Type</label>
                                <select name="" id="" className="form-select">
                                    <option value=""> -- </option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="">Asset Picture</label>
                                <input type="file" name="" id="" className="form-control" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="">Serial Number</label>
                                <input type="text" name="" id="" className="form-control" />
                            </div>
                            <div className="col">
                                <label htmlFor="">Value</label>
                                <input type="text" name="" id="" className="form-control" />
                            </div>
                            <div className="col">
                                <label htmlFor="">Location</label>
                                <input type="text" name="" id="" className="form-control" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="">Status</label><br />
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label class="form-check-label" for="inlineRadio1">Available</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label class="form-check-label" for="inlineRadio2">Non FUnctional</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                    <label class="form-check-label" for="inlineRadio3">Lost</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option3" />
                                    <label class="form-check-label" for="inlineRadio4">Damaged</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option3" />
                                    <label class="form-check-label" for="inlineRadio4">Under Maintainence</label>
                                </div>

                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="">Description</label>
                                <textarea name="" id="" className='form-control'></textarea>
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
    )
}

export default AdminAssetsForm