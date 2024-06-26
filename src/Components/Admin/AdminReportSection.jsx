import React from 'react'

const AdminReportSection = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Reports</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Reports</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card tab-box">
                            <div className="row user-tabs">
                                <div className="col-12 line-tabs">
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                                                <li className="nav-item"><a href="#overview" data-bs-toggle="tab" className="nav-link active">Company Tds Report</a></li>
                                                <li className="nav-item"><a href="#files" data-bs-toggle="tab" className="nav-link">Employee Tds Report</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="overview" className="pro-overview tab-pane fade show active">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="card" style={{ height: '100px' }}>
                                            <div className="row">
                                                <div class="col text-center p-3">
                                                    <h5 class=""><b>Total TDS Paid</b></h5>
                                                    <div class="">
                                                        <p class=""><span id="tds"><b>$0.00</b></span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4 p-4" style={{ fontSize: '25px', color: '#99a5b5' }}>
                                                    <i class="fa fa-coins text-lightest f-18"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col">
                                        <div className="card p-5">
                                            <div className="row mb-2" >
                                                <div className="col">
                                                    <b>Month Wise TDS Calculation</b>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col">
                                                    <table class="table table-stripped" id="example" style={{ fontSize: 'smaller' }}>
                                                        <thead>
                                                            <tr style={{ border: 'none' }} >
                                                                <th>Month</th>
                                                                <th>TDS</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>June 2024</td>
                                                                <td>
                                                                    $0.00
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>July 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>August 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>September 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>October 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>November 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>December 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>January 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>February 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>March 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>April 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>May 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>June 2025</td>
                                                                <td>
                                                                    $0.00
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>July 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>August 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>September 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>October 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>November 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>December 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="files">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label htmlFor=""><b>Choose Member</b></label>
                                        <select name="" id="" className="form-select">
                                            <option value="">--</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-sm-3">
                                        <div className="card" style={{ height: '100px' }}>
                                            <div className="row">
                                                <div class="col text-center p-3">
                                                    <h5 class=""><b>TDS Charged</b></h5>
                                                    <div class="">
                                                        <p class=""><span id="tds"><b>$0.00</b></span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4 p-4" style={{ fontSize: '25px', color: '#99a5b5' }}>
                                                    <i class="fa fa-coins text-lightest f-18"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col">
                                        <div className="card p-5">
                                            <div className="row mb-2" >
                                                <div className="col">
                                                    <b>Month Wise TDS Calculation</b>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col">
                                                    <table class="table table-stripped" id="example" style={{ fontSize: 'smaller' }}>
                                                        <thead>
                                                            <tr style={{ border: 'none' }} >
                                                                <th>Month</th>
                                                                <th>TDS</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>June 2024</td>
                                                                <td>
                                                                    $0.00
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>July 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>August 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>September 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>October 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>November 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>December 2024</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>January 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>February 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>March 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>April 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>May 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>June 2025</td>
                                                                <td>
                                                                    $0.00
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>July 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>August 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>September 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>October 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>November 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>December 2025</td>
                                                                <td>
                                                                    -
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="followUp">
                                <div className="row">
                                    {/* <AdminDealsFollowUp /> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminReportSection