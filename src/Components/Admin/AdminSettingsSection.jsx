import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './AdminSettingsSection.css'; // Import custom CSS file

const AdminSettingsSection = () => {
    const [activeItem, setActiveItem] = useState('/settings'); // Initialize with default active route
    const location = useLocation();

    useEffect(() => {
        setActiveItem(location.pathname); // Update activeItem whenever location changes
    }, [location]);
    return (
        <>
            <div className="page-wrapper">

                {/* Page Content */}
                <div className="content container-fluid">

                    <div className="row">
                        <div className="col-md-12">

                            {/* Page Header */}
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
                            {/* /Page Header */}

                            <div className="row" >
                                <div className="col-md-4 col-lg-3 overflow-y-auto">
                                    <div className="card settings-menu" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                                        <div className="sidebar-menu">
                                            <ul className="scrollable-menu">
                                                <li className="menu-title">Settings</li>
                                                <li className="">
                                                    <Link to=""><i className="la la-building"></i> <span>Company Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="buisnessSetting"><i className="la la-map-marker"></i> <span>Business Address</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="appSetting"><i className="la la-paint-brush"></i> <span>App Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="profileSetting"><i className="la la-user-secret"></i> <span>Profile Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="notification-setting"><i className="la la-envelope"></i> <span>Notification Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="currency-setting"><i className="la la-line-chart"></i> <span>Currency Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="payment-setting"><i className="la la-thumbs-up"></i> <span>Payment Credentials</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="finance-settings"><i className="la la-file-text"></i> <span>Finance Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="contract-settings"><i className="la la-money"></i> <span>Contract Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="tax-settings"><i className="la la-globe"></i> <span>Tax Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="ticket-settings"><i className="la la-lock"></i> <span>Ticket Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="project-settings"><i className="la la-cogs"></i> <span>Project Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="attendance-settings"><i className="la la-comment"></i> <span>Attendance Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="leaves-settings"><i className="la la-calendar"></i> <span>Leaves Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="custom-fields"><i className="la la-tasks"></i> <span>Custom Fields</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="Roles&Permissions"><i className="la la-key"></i> <span>Roles & Permissions</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="message-settings"><i className="la la-envelope-o"></i> <span>Message Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="lead-settings"><i className="la la-line-chart"></i> <span>Lead Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="time-log-settings"><i className="la la-clock-o"></i> <span>Time Log Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="task-settings"><i className="la la-tasks"></i> <span>Task Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="security-settings"><i className="la la-shield"></i> <span>Security Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="theme-settings"><i className="la la-adjust"></i> <span>Theme Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="module-settings"><i className="la la-cogs"></i> <span>Module Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="storage-settings"><i className="la la-database"></i> <span>Storage Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="language-settings"><i className="la la-language"></i> <span>Language Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="social-login-setting"><i className="la la-sign-in"></i> <span>Social Login Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="google-calendar-settings"><i className="la la-calendar"></i> <span>Google Calendar Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="custom-link-settings"><i className="la la-link"></i> <span>Custom Link Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="database-backup-settings"><i className="la la-hdd-o"></i> <span>Database Backup Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="sign-up-settings"><i className="la la-user-plus"></i> <span>Sign Up Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="asset-settings"><i className="la la-briefcase"></i> <span>Asset Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="payroll-settings"><i className="la la-paypal"></i> <span>Payroll Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="purchase-settings"><i className="la la-shopping-cart"></i> <span>Purchase Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="recruit-settings"><i className="la la-users"></i> <span>Recruit Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="Rest-API-Settings"><i className="la la-cloud-download"></i> <span>Rest API Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="zoom-settings"><i className="la la-video-camera"></i> <span>Zoom Settings</span></Link>
                                                </li>
                                                <li>
                                                    <Link to="Update-App"><i className="la la-refresh"></i> <span>Update App</span></Link>
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
        </>
    )
}

export default AdminSettingsSection
