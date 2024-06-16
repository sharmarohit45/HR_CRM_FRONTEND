import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const EmployeeMyLeaveSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Leaves</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Leaves</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    {/* Page Content */}
                    <div className="row mb-3">
                        <div className="row mb-3">
                            {/* <div className="col-8">
                         <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> New Leave</button>
                    </div> */}
                            <div className="col-sm-4">
                                <div className="btn-group">
                                    <Link to="/employee/leaves" className="btn btn-white" aria-current="page"><ListIcon /></Link>
                                    <Link to="/employee/leaves-calendar" className="btn btn-white" aria-current="page"><CalendarTodayIcon /></Link>
                                    <Link to="/employee/my-leaves" className="btn btn-primary active" aria-current="page"><PersonIcon /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col">
                                        <div className="card p-3">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <img src="https://i.pravatar.cc/300?u=admin@example.com" alt="" style={{ height: '60px', width: '60px' }} />
                                                </div>
                                                <div className="col-sm-9" style={{ fontSize: 'smaller' }}>
                                                    <h6><b>Mr. AKHIL BHARTI</b></h6>
                                                    <h5>Junior</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card p-3">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h6><b>Remaining Leaves</b></h6>
                                                    <p>15</p>
                                                </div>
                                                <div className="col-sm-4 text-center pt-2">
                                                    <ExitToAppIcon  style={{color:'gray'}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col"></div>
                                </div>

                            </div>

                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-12 p-4">
                                            <h4><b>Leaves Quota</b></h4>
                                            <div className="p-2">
                                                <table className="table table-bordered" style={{ fontSize: 'smaller' }}>
                                                    <thead style={{ color: 'gray' }}>
                                                        <tr>
                                                            <th>Leave Type</th>
                                                            <th>No of Leaves</th>
                                                            <th>Monthly Limit</th>
                                                            <th>Total Leaves Taken</th>
                                                            <th>Remaining Leaves</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='text-center'>
                                                        <tr>
                                                            <td>Casual</td>
                                                            <td>5</td>
                                                            <td>--</td>
                                                            <td>0</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Sick</td>
                                                            <td>5</td>
                                                            <td>--</td>
                                                            <td>0</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Earned</td>
                                                            <td>3</td>
                                                            <td>--</td>
                                                            <td>0</td>
                                                            <td>5</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Page Content*/}
                </div>
            </div>
        </>
    )
}

export default EmployeeMyLeaveSection