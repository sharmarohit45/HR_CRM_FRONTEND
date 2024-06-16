import React from 'react'

const AdminAddDesignation = () => {
    return (
        <>
            <div className="row">
                <div className="card">
                    <form action="">
                        <div className="row">
                            <div className="col">
                                <h3>Add Designation</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Name</label>
                                <input type="text" name="" id="" className="form-control" />
                            </div>
                            <div className="col">
                                <label htmlFor="">Parent</label>
                                <select name="" id="" className="form-select">
                                    <option value="">Trainee</option>
                                    <option value="">Senior</option>
                                    <option value="">Junior</option>
                                    <option value="">Team Lead</option>
                                    <option value="">Project Manager</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <button type='submit' className='btn btn-white'>Submit</button> &nbsp;
                                <button type='button' className='btn btn-white' data-bs-dismiss="offcanvas">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminAddDesignation