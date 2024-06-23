import React from 'react'

const PayrollInvoice = () => {
    const handleDownload = () => {
    };
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Payroll</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Payroll</li>
                                        <li className="breadcrumb-item active" aria-current="page">Payroll-Invoice</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row" id='payslip'>
                        <div className="col">
                            <div className="card  p-3">
                                <div className="row">
                                    <div className="col">
                                        <h4><b>Salary Slip</b></h4>
                                        <h4 style={{ color: '#99a5b5' }}><b>Payslip For The Duration 01-06-2024 To 30-06-2024 (Monthly)</b></h4>
                                    </div>
                                    <div className="col-sm-2 text-end">
                                        <strong data-bs-toggle="dropdown" aria-expanded="false"><i className='fa fa-ellipsis-h'></i></strong>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#"><i className='fa fa-download' onClick={handleDownload}></i> Download</a></li>
                                            <li><a class="dropdown-item" href="#"><i className='fa fa-edit'></i> Edit</a></li>
                                        </ul>
                                    </div>
                                </div><hr />
                                <div className="row">
                                    <div className="col">
                                        <table className='table table-stripped'>
                                            <tr>
                                                <th>Employee Name</th>
                                                <td>Woodrow Gerhold </td>
                                            </tr>
                                            <tr>
                                                <th>Designation</th>
                                                <td>Junior</td>
                                            </tr>
                                            <tr>
                                                <th>Department</th>
                                                <td>Public Relations</td>
                                            </tr>
                                            <tr>
                                                <th>Salary Payment Method</th>
                                                <td>--</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="col">
                                        <table className='table table-stripped'>
                                            <tr>
                                                <th>Employee ID</th>
                                                <td>EMP-10</td>
                                            </tr>
                                            <tr>
                                                <th>Joining Date</th>
                                                <td>28-08-2023</td>
                                            </tr>
                                            <tr>
                                                <th>Paid On</th>
                                                <td>--</td>
                                            </tr>
                                            <tr>
                                                <th>Status</th>
                                                <td>Generated</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="col p-4">
                                        <div className='text-center p-5' style={{ border: '1px solid green' }}>
                                            <h6>Employee Net Pay</h6>
                                            <h4><b>$167.00</b></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Earnings</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tr>
                                                <td>Basic Salary</td>
                                                <td>$41.67</td>
                                            </tr>
                                            <tr>
                                                <td>Special Allowance</td>
                                                <td>$125.00</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Gross Earnings</strong></td>
                                                <td><strong>$166.67</strong></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="col">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Deductions</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td><strong>Total Deductions</strong></td>
                                                <td><strong>$0.00</strong></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <table className="table table-bordered" id="example">
                                            <thead>
                                                <tr>
                                                    <th>Reimbursements</th>
                                                    <th className="text-right">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Expense Claims</td>
                                                    <td className="text-right text-uppercase">
                                                        $0.00</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Total                                                Reimbursements</strong></td>
                                                    <td className="text-right">
                                                        <strong>$0.00</strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="col p-20 mt-3">
                                        <h3 class="text-center">
                                            <span class="text-uppercase mr-3">Net Salary:</span>
                                            $16.67
                                        </h3>
                                        <h5 class="text-center">Net Salary =
                                            (Gross Earnings -
                                            Total Deductions +
                                            Reimbursements)</h5>
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

export default PayrollInvoice