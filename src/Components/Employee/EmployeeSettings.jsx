import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AdminProfileSetting from '../Admin/AdminProfileSetting'
import EmployeeProfileSetting from './EmployeeProfileSetting'
const EmployeeSettings = () => {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-head-box">
                            <h3>Settings</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="settings">Settings</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Settings</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-4 col-lg-3 overflow-y-auto">
                        <div className="card settings-menu" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                            <div className="sidebar-menu">
                                <ul className="scrollable-menu">
                                    <li className="menu-title">Settings</li>
                                    <li className="">
                                        <Link to=""><i className="fa fa-user"></i> <span>Profile Settings</span></Link>
                                    </li>
                                    <li>
                                        <Link to="security-settings"><i className="fa fa-cog"></i> <span>Security Settings</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-9 settings-cont">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default EmployeeSettings