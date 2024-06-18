import React from 'react'
import { Link } from 'react-router-dom'
const EmployeeSettings = () => {
  return (
    <>
            <div  className="page-wrapper">
                <div  className="content container-fluid">
                    <div  className="row">
                        <div  className="col-md-12">
                            {/* <!-- Page Header --> */}
                            <div  className="row">
                                <div  className="col-md-12">
                                    <div  className="page-head-box">
                                        <h3>Profile  Settings</h3>
                                        <nav aria-label="breadcrumb">
                                            <ol  className="breadcrumb">
                                                <li  className="breadcrumb-item"><Link to="/settings">Settings</Link></li>
                                                <li  className="breadcrumb-item active" aria-current="page">Profile Settings</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Page Header --> */}
                            <div  className="row">
                                <div  className="col-md-4 col-lg-3">
                                    <div  className="card settings-menu">
                                        <div  className="sidebar-menu">
                                            <ul>
                                                <li  className="menu-title">Settings</li>
                                                <li  className="active">
                                                <Link to="/employee/settings"><i  className="la la-building"></i> <span>Profile Settings</span></Link></li>
                                                <li> <Link to="/employee/security-settings"><i  className="la la-clock-o"></i> <span>Security Setting</span></Link></li>
                                               
                                                   
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div  className="col-md-8 col-lg-9 settings-cont">
                                    <div  className="card p-4">
                                        <form>
                                            <div  className="row">
                                                <div  className="col-sm-6">
                                                    <div  className="form-group">
                                                        <label>Company Name <span  className="text-danger">*</span></label>
                                                        <input  className="form-control" type="text" value="" />
                                                    </div>
                                                </div>
                                                <div  className="col-sm-6">
                                                    <div  className="form-group">
                                                        <label>Contact Person</label>
                                                        <input  className="form-control " value="" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="row">
                                                <div  className="col-sm-12">
                                                    <div  className="form-group">
                                                        <label>Address</label>
                                                        <input  className="form-control " value="" type="text" />
                                                    </div>
                                                </div>
                                                <div  className="col-sm-6 col-md-6 col-lg-3">
                                                    <div  className="form-group">
                                                        <label>Country</label>
                                                        <select  className="form-control select">
                                                            <option value="">--</option>
                                                            <option>USA</option>
                                                            <option>United Kingdom</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div  className="col-sm-6 col-md-6 col-lg-3">
                                                    <div  className="form-group">
                                                        <label>City</label>
                                                        <input  className="form-control" value="" type="text" />
                                                    </div>
                                                </div>
                                                <div  className="col-sm-6 col-md-6 col-lg-3">
                                                    <div  className="form-group">
                                                        <label>State/Province</label>
                                                        <select  className="form-control select">
                                                            <option value="">--</option>
                                                            <option>California</option>
                                                            <option>Alaska</option>
                                                            <option>Alabama</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div  className="col-sm-6 col-md-6 col-lg-3">
                                                    <div  className="form-group">
                                                        <label>Postal Code</label>
                                                        <input  className="form-control" value="" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="row">
                                                <div  className="col-sm-6">
                                                    <div  className="form-group">
                                                        <label>Email</label>
                                                        <input  className="form-control" value="" type="email" />
                                                    </div>
                                                </div>
                                                <div  className="col-sm-6">
                                                    <div  className="form-group">
                                                        <label>Phone Number</label>
                                                        <input  className="form-control" value="" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="row">
                                                <div  className="col-sm-6">
                                                    <div  className="form-group">
                                                        <label>Mobile Number</label>
                                                        <input  className="form-control" value="" type="text" />
                                                    </div>
                                                </div>
                                                <div  className="col-sm-6">
                                                    <div  className="form-group">
                                                        <label>Fax</label>
                                                        <input  className="form-control" value="" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="row">
                                                <div  className="col-sm-12">
                                                    <div  className="form-group">
                                                        <label>Website Url</label>
                                                        <input  className="form-control" value="" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="submit-section">
                                                <button  className="btn btn-white submit-btn">Save</button>
                                                
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

export default EmployeeSettings