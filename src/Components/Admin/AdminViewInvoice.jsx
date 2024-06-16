import React from 'react';
import html2pdf from 'html2pdf.js';
import { Link } from 'react-router-dom';

const AdminViewInvoice = () => {
    const handlePrint = () => {
        const printContents = document.getElementById('invoice-section').innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    };

    const handleDownload = () => {
        const element = document.getElementById('invoice-section');
        const opt = {
            margin: 0.5,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="content container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-head-box">
                                    <h3>Invoice</h3>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="admin-dashboard.html">Dashboard</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Invoice</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col-auto float-end ms-auto">
                                    <div className="btn-group btn-group-sm">
                                        <button className="btn btn-white" onClick={handlePrint}>
                                            <i className="fa fa-print fa-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="row" id="invoice-section">
                                <div className="col-md-12">
                                    <div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col m-b-20">
                                                    <img src="/assets/img/logo2.png" className="inv-logo" alt="Company Logo" />
                                                </div>
                                                <div className="col mt-5">
                                                    <div className="invoice-details">
                                                        <h3 className="text-uppercase"><b>Invoice</b></h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <ul className="list-unstyled mt-2">
                                                        <li>PSSPL</li>
                                                        <li>New Delhi</li>
                                                        <li>89XXXXXX00</li>
                                                        <li>GST No: ABCDEFGHIJKLMNO</li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <table className='table table-bordered' style={{ fontSize: 'smaller', textAlign: 'start' }}>
                                                        <tbody>
                                                            <tr>
                                                                <th style={{ backgroundColor: '#f1f1f3' }}>Invoice Number</th>
                                                                <td>#INV-0001</td>
                                                            </tr>
                                                            <tr>
                                                                <th style={{ backgroundColor: '#f1f1f3' }}>Invoice Date</th>
                                                                <td>June 12, 2024</td>
                                                            </tr>
                                                            <tr>
                                                                <th style={{ backgroundColor: '#f1f1f3' }}>Due date</th>
                                                                <td>June 16, 2024</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-lg-7 col-xl-8 m-b-20">
                                                    <h5>
                                                        Billed To:</h5>
                                                    <ul className="list-unstyled">
                                                        <li><h5><strong>Subham Mishra</strong></h5></li>
                                                        <li><span>Infinity Technologies</span></li>
                                                        <li>5754 Airport Rd</li>
                                                        <li>New Delhi</li>
                                                        <li>India</li>
                                                        <li>9152XXXXX0</li>
                                                        <li><a href="mailto:subham@example.com">subham@example.com</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-lg-5 col-xl-4 m-b-20">
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="row p-2 mt-5" style={{ border: '2px solid green', textAlign: 'center', color: 'green' }}>
                                                                <h4 className='text-green'><b>Paid</b></h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <table className="table table-bordered  table-hover">
                                                        <thead>
                                                            <tr style={{ backgroundColor: '#f1f1f3' }}>
                                                                <th className="d-none d-sm-table-cell">DESCRIPTION</th>
                                                                <th>QUANTITY</th>
                                                                <th>Unit Price (INR)</th>
                                                                <th>Tax</th>
                                                                <th className="text-end">Amount (INR)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Android Application</td>
                                                                <td>2</td>
                                                                <td>₹ 1000</td>
                                                                <td>--</td>
                                                                <td className="text-end">₹2000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>iOS Application</td>
                                                                <td>1</td>
                                                                <td>₹ 1750</td>
                                                                <td>--</td>
                                                                <td className="text-end">₹ 1750</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="row invoice-payment">
                                                    <div className="col-sm-7"></div>
                                                    <div className="col-sm-5">
                                                        <div className="m-b-20">
                                                            <div className="table-responsive no-border">
                                                                <table className="table mb-0">
                                                                    <tbody className='table table-bordered text-end'>
                                                                        <tr>
                                                                            <th>Subtotal:</th>
                                                                            <td className="text-end">₹ 3,750</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Tax: <span className="text-regular">(25%)</span></th>
                                                                            <td className="text-end">₹ 937.50</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Total:</th>
                                                                            <td className="text-end text-primary"><h5>₹ 4,687.5</h5></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col">
                                                        <label htmlFor=" "><b>Note</b></label>
                                                        <p>msmdk</p>
                                                    </div>
                                                    <div className="col text-end">
                                                        <label htmlFor=" "><b>Terms and Conditions</b></label>
                                                        <p>Thank you for your business.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="input-group m-3">
                                        <button type="button" className="btn btn-outline-secondary">Action</button>
                                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href=""><i className='fa fa-edit'></i> Edit</a></li>
                                            <li><a className="dropdown-item" href=""><i className='fa fa-trash'></i> Delete</a></li>
                                            <li><a className="dropdown-item" href="" onClick={handleDownload}><i className='fa fa-download'></i> Download</a></li>
                                            <li><a className="dropdown-item" href=""><i className='fa fa-paper-plane'></i> Send</a></li>
                                            <li><a className="dropdown-item" href=""><i className='fa fa-plus'></i> Add Shipping Address</a></li>
                                            <li><a className="dropdown-item" href=""><i className='fa fa-bell'></i> Payment Reminder</a></li>
                                            <li><a className="dropdown-item" href=""><i className='fa fa-plus'></i> Add Payment</a></li>
                                            <li><a className="dropdown-item" href=""><i className='fa fa-copy'></i> Copy Payment Link</a></li>
                                            <li><a className="dropdown-item" href=""><i className='fa fa-external-link-alt'></i> Copy Payment Link</a></li>
                                            <li><a className="dropdown-item" href=""><i className='fa fa-copy'></i> Create Duplicate</a></li>


                                        </ul> &nbsp; &nbsp;
                                        <Link to="/admin/proposal"><button type="button" className='btn btn-white'>Cancel</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default AdminViewInvoice;
