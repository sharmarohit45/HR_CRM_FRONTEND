import React from 'react'

const AdminAddDepartment = () => {
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
                                    <option value="">--</option>
                                    <option value="Marketting">Marketting</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Human Resources">Human Resources</option>
                                    <option value="Public Relations">Public Relations</option>
                                    <option value="Research">Research</option>
                                    <option value="Finance">Finance</option>
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

export default AdminAddDepartment