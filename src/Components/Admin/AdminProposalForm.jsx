import React, { useState } from 'react';
const AdminProposalForm = () => {
    const [lead, setLead] = useState('');
    const [deal, setDeal] = useState('');
    const [validTill, setValidTill] = useState('');
    const [currency, setCurrency] = useState('USD($)');
    const [calculateTax, setCalculateTax] = useState('After Discount');
    const [description, setDescription] = useState('');
    const [requireSignature, setRequireSignature] = useState(false);
    const [product, setProduct] = useState('');
    const [rows, setRows] = useState([
        {
            description: '',
            quantity: '',
            unitPrice: '',
            tax: 'GST 10%',
            amount: 0,
            notes: '',
            file: null
        }
    ]);

    const [discount, setDiscount] = useState(0);
    const [discountType, setDiscountType] = useState('%');

    const taxRates = {
        'GST 10%': 0.10,
        'CGST 18%': 0.18,
        'VAT 10%': 0.10
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Assuming successful submission
            console.log("Form Data:", { deal, validTill, currency, calculateTax, description, requireSignature, product, rows, discount, discountType });

            // Reset the form
            event.target.reset();

            // Reset the state
            setDeal('');
            setValidTill('');
            setCurrency('USD($)');
            setCalculateTax('After Discount');
            setDescription('');
            setRequireSignature(false);
            setProduct('');
            setRows([
                {
                    description: '',
                    quantity: '',
                    unitPrice: '',
                    tax: 'GST 10%',
                    amount: 0,
                    notes: '',
                    file: null
                }
            ]);
            setDiscount(0);
            setDiscountType('%');
        } catch (error) {
            console.error('Error:', error);
            // Handle error, show error message to the user, etc.
        }
    };
    const handleInputChange = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        if (field === 'quantity' || field === 'unitPrice' || field === 'tax') {
            const quantity = parseFloat(newRows[index].quantity) || 0;
            const unitPrice = parseFloat(newRows[index].unitPrice) || 0;
            const taxRate = taxRates[newRows[index].tax];
            newRows[index].amount = quantity * unitPrice * (1 + taxRate);
        }
        setRows(newRows);
    };

    const handleFileChange = (index, file) => {
        const newRows = [...rows];
        newRows[index].file = file;
        setRows(newRows);
    };

    const handleDiscountChange = (value) => {
        setDiscount(parseFloat(value) || 0);
    };

    const handleDiscountTypeChange = (value) => {
        setDiscountType(value);
    };

    const addItem = () => {
        setRows([
            ...rows,
            {
                description: '',
                quantity: '',
                unitPrice: '',
                tax: 'GST 10%',
                amount: 0,
                notes: '',
                file: null
            }
        ]);
    };

    const removeItem = (index) => {
        const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
        setRows(newRows);
    };

    const calculateSubtotal = () => {
        return rows.reduce((sum, row) => sum + row.amount, 0).toFixed(2);
    };

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        const discountAmount = discountType === '%' ? (subtotal * discount / 100) : discount;
        return (subtotal - discountAmount).toFixed(2);
    };

    return (
       <>
       <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="row">
                            <div className="col">
                                <h3>Proposal Details</h3>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row mt-3  mb-3">
                                <div className="col">
                                    <label htmlFor="">Lead</label>
                                    <select name="" id="" className='form-select' value={lead}
                                        onChange={(e) => setLead(e.target.value)}>
                                        <option>--</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label>Deal</label>
                                    <input type="text" className='form-control' value={deal}
                                        onChange={(e) => setDeal(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label>Valid Till</label>
                                    <input type="date" className='form-control' value={validTill}
                                        onChange={(e) => setValidTill(e.target.value)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <label>Currency</label>
                                    <select className="form-select" value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}>
                                        <option value="USD($)">USD($)</option>
                                        <option value="GBP(£)">GBP(£)</option>
                                        <option value="EUR(€)">EUR(€)</option>
                                        <option value="INR(₹)">INR(₹)</option>
                                    </select>
                                </div>
                                <div className="col mb-3">
                                    <label>Calculate Tax</label>
                                    <select className="form-select" value={calculateTax}
                                        onChange={(e) => setCalculateTax(e.target.value)}>
                                        <option value="After Discount">After Discount</option>
                                        <option value="Before Discount">Before Discount</option>
                                    </select>
                                </div>
                                <div className="col"></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label>Description</label>
                                    <input type="text" className='form-control' value={description}
                                        onChange={(e) => setDescription(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="requireSignature" value={requireSignature}
                                            onChange={(e) => setRequireSignature(e.target.value)} />
                                        <label className="form-check-label" htmlFor="requireSignature"> Require customer signature for approval
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-3 col-sm-6 mb-3">
                                    <label htmlFor=""> Product</label>
                                    <select className='form-select' value={product}
                                        onChange={(e) => setProduct(e.target.value)}>
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
                                            {/* <p><strong>Description:</strong> {row.description}</p> */}
                                            <input type="text" value={row.tax} className='form-control' readOnly />
                                            {/* <p><strong>Amount:</strong> {row.amount.toFixed(2)}</p> */}
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
    );
};

export default AdminProposalForm