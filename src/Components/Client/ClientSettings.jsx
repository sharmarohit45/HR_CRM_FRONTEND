import React from 'react'
import { Link } from 'react-router-dom'

function ClientSettings() {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <!-- Page Header --> */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-head-box">
                                        <h3>Profile  Settings</h3>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/settings">Settings</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Page Header --> */}
                            <div className="row">
                                <div className="col-md-4 col-lg-3">
                                    <div className="card settings-menu">
                                        <div className="sidebar-menu">
                                            <ul>
                                                <li className="menu-title">Settings</li>
                                                <li className="active">
                                                    <Link to="/client/settings"><i className="la la-building"></i> <span>Profile Settings</span></Link></li>
                                                <li>
                                                    <Link to="/client/security-settings"><i className="la la-clock-o"></i> <span>Security Setting</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-lg-9 settings-cont">
                                    <div className="card p-4">
                                        <h3>Profile Setting</h3>
                                        <hr />
                                        <form>
                                            <div className="row mt-3">
                                                <div className="col">
                                                    <label htmlFor="">Profile picture</label>
                                                    <input type="file" name="" id="" className='form-control' />
                                                    <div className="dropify-errors-container"><ul></ul></div>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col">
                                                    <label htmlFor="">Your Name</label>
                                                    <input type="text" name="" id="" className='form-control' />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="">Your Email</label>
                                                    <input type="email" name="" id="" className='form-control' />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="">Your password</label>
                                                    <input type="password" name="" id="" className='form-control' />
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col">
                                                    <label htmlFor="">Country</label>
                                                    <select name="" id="" className='form-control'>
                                                        <option value="">--</option>
                                                        <option value="">--</option>
                                                        <option value="">--</option>
                                                        <option value="">--</option>
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="">Mobile</label>
                                                    <input type="email" name="" id="" className='form-control' />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="">Language</label>
                                                    <select name="" id="" className='form-control'>
                                                        <option value="">--</option>
                                                        <option value="">--</option>
                                                        <option value="">--</option>
                                                        <option value="">--</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col">
                                                    <label htmlFor="">Gender</label>
                                                    <select name="" id="" className='form-control'>
                                                        <option value="">Male</option>
                                                        <option value="">Female</option>
                                                        <option value="">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col">
                                                    <label htmlFor="">Address</label>
                                                    <textarea name="" id="" className='form-control'></textarea>
                                                </div>
                                            </div>
                                            <div className="submit-section">
                                                <button className=" btn btn-white submit-btn">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Page Content --> */}
            </div>
        </>
    )
}

export default ClientSettings