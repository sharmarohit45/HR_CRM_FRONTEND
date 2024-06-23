import React from 'react'

const AdminCompanySettings = () => {
    return (
        <>
        <div className="row">
            <div className="col">
                <div className="card">
                <form action="">
                    <div className="row">
                        <div className="col p-3">
                            <h3>Company Settings</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col">
                            <label htmlFor="">Company Name </label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="col">
                            <label htmlFor="">Company Email</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                    </div>
                    <div className="row p-3 mt-2">
                        <div className="col">
                            <label htmlFor="">Company Phone</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="col">
                            <label htmlFor="">Company Website</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col">
                            <button type="submit" className="btn btn-white"> Save</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminCompanySettings