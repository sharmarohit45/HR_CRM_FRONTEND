import React from 'react'

const AdminIncomevsExpenseReportSection = () => {
  return (
    <>
    <div className="page-wrapper">
        <div className="content container-fluid pb-0">
            
            <div className="row">
                <div className="col-md-12">
                    <div className="page-head-box">
                        <h3>Income vs Expense Report</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Income vs Expense Report</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row">
                        <div className="col-sm-3">
                            <div className="card" style={{ height: '100px' }}>
                                <div className="row">
                                    <div class="col text-center p-3">
                                        <h5 class=""><b>Total Earnings</b></h5>
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
                        <div className="col-sm-3">
                            <div className="card" style={{ height: '100px' }}>
                                <div className="row">
                                    <div class="col text-center p-3">
                                        <h5 class=""><b>Total Expenses</b></h5>
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
                    <div className="row">
                        <div className="col">
                            <div className="card" style={{height:'400px'}}>

                            </div>
                        </div>
                    </div>
        </div>
    </div>
</>
  )
}

export default AdminIncomevsExpenseReportSection