import React, { useState } from 'react';

const AdminPurchaseOrderForm = () => {
    const [currency, setCurrency] = useState("USD($)");
    const [calculateTax, setCalculateTax] = useState("After Discount");
    const [product, setProduct] = useState("");
    const [rows, setRows] = useState([{ description: "", quantity: "", unitPrice: "", tax: "", amount: 0, notes: "", file: null }]);
    const [discount, setDiscount] = useState(0);
    const [discountType, setDiscountType] = useState("%");

    const taxRates = {
        "No Tax": 0,
        "5%": 0.05,
        "10%": 0.10,
        "15%": 0.15,
        "20%": 0.20,
    };

    const handleInputChange = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        if (field === "quantity" || field === "unitPrice" || field === "tax") {
            newRows[index].amount = calculateAmount(newRows[index]);
        }
        setRows(newRows);
    };

    const handleFileChange = (index, file) => {
        const newRows = [...rows];
        newRows[index].file = file;
        setRows(newRows);
    };

    const calculateAmount = (row) => {
        const quantity = parseFloat(row.quantity) || 0;
        const unitPrice = parseFloat(row.unitPrice) || 0;
        const taxRate = taxRates[row.tax] || 0;
        const amount = quantity * unitPrice * (1 + taxRate);
        return amount;
    };

    const addItem = () => {
        setRows([...rows, { description: "", quantity: "", unitPrice: "", tax: "", amount: 0, notes: "", file: null }]);
    };

    const removeItem = (index) => {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
    };

    const calculateSubtotal = () => {
        return rows.reduce((acc, row) => acc + row.amount, 0).toFixed(2);
    };

    const handleDiscountChange = (value) => {
        setDiscount(value);
    };

    const handleDiscountTypeChange = (value) => {
        setDiscountType(value);
    };

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        let discountValue = parseFloat(discount) || 0;
        if (discountType === "%") {
            discountValue = (subtotal * discountValue) / 100;
        }
        const total = subtotal - discountValue;
        return total.toFixed(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="row">
                            <div className="col">
                                <h3>Purchase Order</h3>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row mt-3  mb-3">
                                <div className="col">
                                    <label htmlFor="lead">Order Number</label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>

                                <div className="col">
                                    <label>Select Vendor</label>
                                    <select className='form-control'>
                                        <option value="">--</option>
                                    </select>
                                </div>
                                <div className="col mb-3">
                                    <label>Currency</label>
                                    <select className="form-select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                                        <option value="USD($)">USD($)</option>
                                        <option value="GBP(£)">GBP(£)</option>
                                        <option value="EUR(€)">EUR(€)</option>
                                        <option value="INR(₹)">INR(₹)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <label>Exchange Rate </label>
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Order Date</label>
                                    <input type="date" name="" id="" className="form-control" />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Expected Delivery Date</label>
                                    <input type="date" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="">Delivery Address</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                        <option value="PSSPL">PSSPL</option>
                                    </select>
                                </div>

                                <div className="col mb-3">
                                    <label>Calculate Tax</label>
                                    <select className="form-select" value={calculateTax} onChange={(e) => setCalculateTax(e.target.value)}>
                                        <option value="After Discount">After Discount</option>
                                        <option value="Before Discount">Before Discount</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Delivery Status</label>
                                    <select name="" id="" className="form-select">
                                        <option value="">--</option>
                                        <option value="PSSPL">PSSPL</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-3 col-sm-6 mb-3">
                                    <label htmlFor="">Product</label>
                                    <select className='form-select' value={product} onChange={(e) => setProduct(e.target.value)}>
                                        <option value="">A</option>
                                        <option value="">B</option>
                                        <option value="">C</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    {rows.map((row, index) => (
                                        <React.Fragment key={index}>
                                            <table className='table table-bordered table-responsive'>
                                                <thead>
                                                    <tr>
                                                        <th>Description</th>
                                                        <th>Quantity</th>
                                                        <th>Unit Price</th>
                                                        <th>Tax</th>
                                                        <th>Amount</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div>
                                                                <input
                                                                    type="text"
                                                                    value={row.description}
                                                                    onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                                                    className='form-control'
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <input
                                                                    type="text"
                                                                    value={row.quantity}
                                                                    onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                                                                    className='form-control'
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <input
                                                                    type="text"
                                                                    value={row.unitPrice}
                                                                    onChange={(e) => handleInputChange(index, 'unitPrice', e.target.value)}
                                                                    className='form-control'
                                                                />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <select
                                                                    value={row.tax}
                                                                    onChange={(e) => handleInputChange(index, 'tax', e.target.value)}
                                                                    className='form-select'
                                                                >
                                                                    {Object.keys(taxRates).map((taxOption) => (
                                                                        <option key={taxOption} value={taxOption}>{taxOption}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td rowSpan={2}>
                                                            <div style={{ minWidth: '150px' }}>
                                                                {row.amount.toFixed(2)}
                                                            </div>
                                                        </td>
                                                        <td rowSpan={2}>
                                                                <i className="fa fa-times-circle text-danger" onClick={() => removeItem(index)}></i> 
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}>
                                                            <div className='p-3'>
                                                                <textarea
                                                                    placeholder="Enter Description (optional)"
                                                                    className="form-control"
                                                                    value={row.notes}
                                                                    onChange={(e) => handleInputChange(index, 'notes', e.target.value)}
                                                                ></textarea>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="row p-3">
                                                                <input
                                                                    type="file"
                                                                    className='form-control'
                                                                    onChange={(e) => handleFileChange(index, e.target.files[0])}
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <button type="button" className="btn btn-link" onClick={addItem}>
                                        <i className='fa fa-plus-circle'></i> Add Item
                                    </button>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-3 col-sm-6 mb-3">
                                    <label>Subtotal</label>
                                    <input type="text" className='form-control' value={calculateSubtotal()} readOnly />
                                </div>
                                <div className="col-md-3 col-sm-6 mb-3">
                                    <label>Discount</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={discount}
                                            onChange={(e) => handleDiscountChange(e.target.value)}
                                        />
                                        <select
                                            className='input-group-text form-select'
                                            value={discountType}
                                            onChange={(e) => handleDiscountTypeChange(e.target.value)}
                                        >
                                            <option value="%">%</option>
                                            <option value="Amount">Amount</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 mb-3">
                                    <label>Tax</label>
                                    {rows.map((row, index) => (
                                        <div key={index}>
                                            <input type="text" value={row.tax} className='form-control' readOnly />
                                        </div>
                                    ))}
                                </div>
                                <div className="col-md-3 col-sm-6 mb-3">
                                    <label>Total</label>
                                    <input type="text" className='form-control' value={calculateTotal()} readOnly />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Note For The Recipient</label>
                                    <textarea className='form-control'></textarea>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Terms and Conditions</label>
                                    <p>Thank you for your business.</p>
                                </div>
                            </div>
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <button type="submit" className='btn btn-white'>Save</button> &nbsp;
                                    <button type="button" className='btn btn-white' data-bs-dismiss="offcanvas">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPurchaseOrderForm;
