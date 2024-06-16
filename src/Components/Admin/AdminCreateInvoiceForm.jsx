import React, { useState } from 'react';

const AdminCreateInvoiceForm = () => {
    const initialRow = {
        description: '',
        quantity: '',
        unitPrice: '',
        tax: 'GST 10%',
        amount: 0,
        notes: '',
        file: null
    };

    const initialFormState = {
        deal: '',
        validTill: '',
        currency: 'USD($)',
        calculateTax: 'After Discount',
        description: '',
        receivedPayment: false,
        product: '',
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        project: '',
        bankAccount: '',
        rows: [initialRow],
        discount: 0,
        discountType: '%',
    };

    const [formState, setFormState] = useState(initialFormState);

    const taxRates = {
        'GST 10%': 0.10,
        'CGST 18%': 0.18,
        'VAT 10%': 0.10
    };

    const handleInputChange = (name, value) => {
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRowChange = (index, field, value) => {
        const newRows = [...formState.rows];
        newRows[index][field] = value;
        if (field === 'quantity' || field === 'unitPrice' || field === 'tax') {
            const quantity = parseFloat(newRows[index].quantity) || 0;
            const unitPrice = parseFloat(newRows[index].unitPrice) || 0;
            const taxRate = taxRates[newRows[index].tax];
            newRows[index].amount = quantity * unitPrice * (1 + taxRate);
        }
        setFormState(prevState => ({
            ...prevState,
            rows: newRows
        }));
    };

    const handleFileChange = (index, file) => {
        const newRows = [...formState.rows];
        newRows[index].file = file;
        setFormState(prevState => ({
            ...prevState,
            rows: newRows
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Assuming successful submission
            console.log("Form Data:", formState);

            // Reset the form
            event.target.reset();
            setFormState(initialFormState);
        } catch (error) {
            console.error('Error:', error);
            // Handle error, show error message to the user, etc.
        }
    };

    const addItem = () => {
        setFormState(prevState => ({
            ...prevState,
            rows: [...prevState.rows, initialRow]
        }));
    };

    const removeItem = (index) => {
        const newRows = formState.rows.filter((_, rowIndex) => rowIndex !== index);
        setFormState(prevState => ({
            ...prevState,
            rows: newRows
        }));
    };

    const calculateSubtotal = () => {
        return formState.rows.reduce((sum, row) => sum + row.amount, 0).toFixed(2);
    };

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        const discountAmount = formState.discountType === '%' ? (subtotal * formState.discount / 100) : formState.discount;
        return (subtotal - discountAmount).toFixed(2);
    };

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <h3>Invoice Details</h3>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <label>Invoice Number</label>
                                <input type="text" className='form-control' value={formState.invoiceNumber}
                                    onChange={(e) => handleInputChange('invoiceNumber', e.target.value)} />
                            </div>
                            <div className="col">
                                <label>Invoice Date</label>
                                <input type="date" className='form-control' value={formState.invoiceDate}
                                    onChange={(e) => handleInputChange('invoiceDate', e.target.value)} />
                            </div>
                            <div className="col">
                                <label>Due Date</label>
                                <input type="date" className='form-control' value={formState.dueDate}
                                    onChange={(e) => handleInputChange('dueDate', e.target.value)} />
                            </div>
                            <div className="col">
                                <label>Currency</label>
                                <select className="form-select" value={formState.currency}
                                    onChange={(e) => handleInputChange('currency', e.target.value)}>
                                    <option value="USD($)">USD($)</option>
                                    <option value="GBP(£)">GBP(£)</option>
                                    <option value="EUR(€)">EUR(€)</option>
                                    <option value="INR(₹)">INR(₹)</option>
                                </select>
                            </div>
                            <div className="col">
                                <label>Exchange Rate</label>
                                <input type="text" className='form-control' readOnly />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label>Client</label>
                                <select className='form-select'>
                                    <option value="">--</option>
                                </select>
                            </div>
                            <div className="col">
                                <label>Project</label>
                                <input type="text" className='form-control' value={formState.project}
                                    onChange={(e) => handleInputChange('project', e.target.value)} />
                            </div>
                            <div className="col">
                                <label>Calculate Tax</label>
                                <select className="form-select" value={formState.calculateTax}
                                    onChange={(e) => handleInputChange('calculateTax', e.target.value)}>
                                    <option value="After Discount">After Discount</option>
                                    <option value="Before Discount">Before Discount</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-4">
                                <label>Bank Account</label>
                                <select className='form-select' value={formState.bankAccount}
                                    onChange={(e) => handleInputChange('bankAccount', e.target.value)}>
                                    <option value="">--</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label>Billing Address</label>
                                <textarea className='form-control' placeholder='Select the client to show the billing address' readOnly></textarea>
                            </div>
                            <div className="col">
                                <label>Shipping Address</label>
                                <textarea className='form-control' placeholder=''></textarea>
                            </div>
                            <div className="col">
                                <label>Generated By</label>
                                <select className='form-select'>
                                    <option value="">--</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-3 col-sm-6 mb-3">
                                <label>Product</label>
                                <select className='form-select' value={formState.product}
                                    onChange={(e) => handleInputChange('product', e.target.value)}>
                                    <option value="">A</option>
                                    <option value="">B</option>
                                    <option value="">C</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                {formState.rows.map((row, index) => (
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
                                                                onChange={(e) => handleRowChange(index, 'description', e.target.value)}
                                                                className='form-control'
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input
                                                                type="text"
                                                                value={row.quantity}
                                                                onChange={(e) => handleRowChange(index, 'quantity', e.target.value)}
                                                                className='form-control'
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <input
                                                                type="text"
                                                                value={row.unitPrice}
                                                                onChange={(e) => handleRowChange(index, 'unitPrice', e.target.value)}
                                                                className='form-control'
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <select
                                                                value={row.tax}
                                                                onChange={(e) => handleRowChange(index, 'tax', e.target.value)}
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
                                                        <button type="button" className="btn btn-danger" onClick={() => removeItem(index)}>
                                                            <i className="fa fa-times-circle"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3}>
                                                        <div className='p-3'>
                                                            <textarea
                                                                placeholder="Enter Description (optional)"
                                                                className="form-control"
                                                                value={row.notes}
                                                                onChange={(e) => handleRowChange(index, 'notes', e.target.value)}
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
                                        value={formState.discount}
                                        onChange={(e) => handleInputChange('discount', e.target.value)}
                                    />
                                    <select
                                        className='input-group-text form-select'
                                        value={formState.discountType}
                                        onChange={(e) => handleInputChange('discountType', e.target.value)}
                                    >
                                        <option value="%">%</option>
                                        <option value="Amount">Amount</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-3">
                                <label>Tax</label>
                                {formState.rows.map((row, index) => (
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
                                <label>Note For The Recipient</label>
                                <textarea className='form-control' value={formState.description} onChange={(e) => handleInputChange('description', e.target.value)}></textarea>
                            </div>
                            <div className="col">
                                <label>Terms and Conditions</label>
                                <p>Thank you for your business.</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label>Add File</label>
                                <input type="file" className='form-control' />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="receivedPayment"
                                        checked={formState.receivedPayment}
                                        onChange={(e) => handleInputChange('receivedPayment', e.target.checked)} />
                                    <label className="form-check-label" htmlFor="receivedPayment"> I have received the payment
                                    </label>
                                </div>
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
    );
};

export default AdminCreateInvoiceForm;
