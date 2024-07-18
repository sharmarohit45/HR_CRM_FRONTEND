import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const AdminProposalInvoice = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const proposalId = location.state ? location.state.proposalId : null;
  console.log("Proposal Id" , proposalId);
    useEffect(() => {
        if (proposalId) {
            getData();
        }
    }, [proposalId]);

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/proposals/${proposalId}`);
            setData(response.data);
        } catch (error) {
            console.log("Data fetching failed", error);
        } finally {
            setLoading(false);
        }
    };

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
    const calculateSubtotal = () => {
        if (!data || !data.proposalProducts) return 0;

        return data.proposalProducts.reduce((acc, product) => {
            return acc + product.unitPrice * product.quantity;
        }, 0);
    };

    const calculateTotalTax = () => {
        if (!data || !data.proposalProducts) return 0;
    
        return data.proposalProducts.reduce((acc, product) => {
            // Ensure all values are numbers before calculation
            const unitPrice = Number(product.unitPrice) || 0;
            const quantity = Number(product.quantity) || 0;
            const tax = Number(product.tax) || 0;
    
            const taxAmount = (unitPrice * quantity * tax) / 100;
            return acc + taxAmount;
        }, 0);
    };
    


    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }

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
                                                                <th style={{ backgroundColor: '#f1f1f3' }}>Proposal</th>
                                                                <td>{data.proposalId}</td>
                                                            </tr>
                                                            <tr>
                                                                <th style={{ backgroundColor: '#f1f1f3' }}>Valid Till</th>
                                                                <td>{data.validTill}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-lg-7 col-xl-8 m-b-20">
                                                    <h5>Billed To:</h5>
                                                    <ul className="list-unstyled">
                                                        <li><h5><strong>{data.lead?.name}</strong></h5></li>
                                                        <li><span>{data.deals?.dealName}</span></li>
                                                        <li>{data.lead?.address}</li>
                                                        <li>{data.lead?.city}, {data.lead?.state}, {data.lead?.country}, {data.lead?.postalCode}</li>
                                                        <li>{data.lead?.mobile}</li>
                                                        <li><a href={`mailto:${data.lead?.email}`}>{data.lead?.email}</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-lg-5 col-xl-4 m-b-20">
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="row p-2 mt-5" style={{ border: '2px solid green', textAlign: 'center', color: 'green' }}>
                                                                <h4 className='text-green'><b>Approved</b></h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <table className="table table-bordered table-hover">
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
                                                            {data.proposalProducts.map((product) => (
                                                                <>
                                                                    <tr key={product.id}>
                                                                        <td>{product.description}</td>
                                                                        <td>{product.quantity}</td>
                                                                        <td>₹ {product.unitPrice}</td>
                                                                        <td>{product.tax}</td>
                                                                        <td className="text-end">₹ {product.amount}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src={`data:image/png;base64,${product.fileData}`} style={{ borderRadius: '50%', height: '60px', width: '60px' }} alt="" /></td>
                                                                    </tr>
                                                                </>
                                                            ))}
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
                                                                            <td className="text-end">₹ {calculateSubtotal()}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Tax:</th>
                                                                            <td className="text-end">₹ {calculateTotalTax()}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Total:</th>
                                                                            <td className="text-end text-primary"><h5>₹ {data.total}</h5></td>
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
                                                        <p>{data.notes}</p>
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
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <div className="input-group dropend">
                                        <button type="button" className="btn btn-outline-secondary">Action</button>
                                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#"><i className='fa fa-edit'></i> Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className='fa fa-trash'></i> Delete</a></li>
                                            <li><a className="dropdown-item" href="#" onClick={handleDownload}><i className='fa fa-download'></i> Download</a></li>
                                            <li><a className="dropdown-item" href="#"><i className='fa fa-external-link-alt'></i> Public Link</a></li>
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

export default AdminProposalInvoice;
