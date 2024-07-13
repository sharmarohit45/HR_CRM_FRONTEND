import React from 'react'

const AdminAwardForm = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <label htmlFor="">Title</label>
                    <input type="text" name="" id="" className="form-control" />
                </div>
                <div className="col">
                    <label htmlFor="">Choose Icon</label>
                    <select name="" id="" className="form-select">
                        <option value="">6</option>
                        <option value="">6</option>
                        <option value="">6</option>
                        <option value="">6</option>
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-4">
                    <label htmlFor="">Color Code</label>
                    <input type="color" name="" id="" className="form-control" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="">Summary</label>
                    <textarea className="form-control" id=""></textarea>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col text-end">
                    <button className="btn btn-white" data-bs-dismiss="modal">Close</button> &nbsp;
                    <button className="btn btn-white">Save</button>
                </div>
            </div>
        </>
    )
}

export default AdminAwardForm