import React, { useState } from 'react'

const AdminProjectSetting = () => {
    const [visible, setVisible] = useState(false)
    const [visibleData, setVisibleData] = useState(false)

    function Visibility() {
        setVisible(!visible)
    }
    function VisibilityData() {
        setVisibleData(!visibleData)
    }
    return (
        <>
            <div className="row">
                <div className="card">
                    <div className="col">
                        <div className="row">
                           { visible && (<div className="col"><button type="button" className="btn btn-white"><i className="fa fa-plus"></i> Add Status</button></div> )} 
                           { visibleData && (<div className="col"><button type="button" className="btn btn-white"><i className="fa fa-plus"></i> Add Category</button></div> )} 
                        </div>
                        <div className="card tab-box mt-3">
                            <div className="row user-tabs">
                                <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                    <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                                        <li className="nav-item"><a href="#ProjectSettings" data-bs-toggle="tab" className="nav-link active">Project Settings</a></li>
                                        <li className="nav-item" ><a href="#ProjectStatusSettings" data-bs-toggle="tab" className="nav-link" onClick={Visibility}>Project Status Settings</a></li>
                                        <li className="nav-item" ><a href="#ProjectCategory" data-bs-toggle="tab" className="nav-link"onClick={VisibilityData}>Project Category</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="#ProjectSettings" className="pro-overview tab-pane fade show active">
                                <form action="">
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-check">
                                                <input type="checkbox" name="" id="" className="form-check-input" />
                                                <label htmlFor="" className="form-check-text"> Send Reminder</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <label htmlFor="" className='pb-2'>Send Reminder To</label><br />
                                            <div className="form-check form-check-inline">
                                                <input type="checkbox" name="" id="" className="form-check-input" />
                                                <label htmlFor="" className="form-check-text"> Administrators</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input type="checkbox" name="" id="" className="form-check-input" />
                                                <label htmlFor="" className="form-check-text"> project Members</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input type="checkbox" name="" id="" className="form-check-input" />
                                                <label htmlFor="" className="form-check-text"> All</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Remind before</label>
                                            <div className="input-group">
                                                <input type="text" name="" id="" className="form-control" />
                                                <label htmlFor="" className='input-group-text'>Day(s)</label>
                                            </div>
                                        </div>
                                    </div><hr />
                                    <div className="row mb-3">
                                        <div className="col text-end">
                                            <button type="button" className="btn btn-white">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="ProjectStatusSettings">
                                <div className="row">
                                    <h1>LEAVE DATA</h1>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ProjectCategory">
                                <div className="row">
                                    <div className="col">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminProjectSetting