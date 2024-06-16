import React, { useState } from 'react';

const AdminReccurenceExpenseForm = () => {
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
        itemName: '',
        currency: 'USD($)',
        price: '',
        purchaseDate: '',
        employee: '',
        project: '',
        expenseCategory: '',
        purchasedFrom: '',
        bankAccount: '',
        description: '',
        bill: null,
        billingFrequency: 'Monthly',
        startDate: '',
        totalCount: '',
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

    const handleFileChange = (file) => {
        setFormState(prevState => ({
            ...prevState,
            bill: file
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log("Form Data:", formState);
            // Reset form after submission
            event.target.reset();
            setFormState(initialFormState);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getNextInvoiceDate = () => {
        const { startDate, billingFrequency } = formState;
        if (!startDate || !billingFrequency) return '';

        const start = new Date(startDate);
        let nextDate;

        switch (billingFrequency) {
            case 'Daily':
                nextDate = new Date(start.setDate(start.getDate() + 1));
                break;
            case 'Weekly':
                nextDate = new Date(start.setDate(start.getDate() + 7));
                break;
            case 'Bi-Weekly':
                nextDate = new Date(start.setDate(start.getDate() + 14));
                break;
            case 'Monthly':
                nextDate = new Date(start.setMonth(start.getMonth() + 1));
                break;
            case 'Quarterly':
                nextDate = new Date(start.setMonth(start.getMonth() + 3));
                break;
            case 'Half-Yearly':
                nextDate = new Date(start.setMonth(start.getMonth() + 6));
                break;
            case 'Annually':
                nextDate = new Date(start.setFullYear(start.getFullYear() + 1));
                break;
            default:
                nextDate = '';
        }
        return nextDate.toISOString().split('T')[0];
    };

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3>Expense Details</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <label>Item Name</label>
                                    <input type="text" className="form-control" value={formState.itemName} onChange={(e) => handleInputChange('itemName', e.target.value)} />
                                </div>
                                <div className="col">
                                    <label>Currency</label>
                                    <select className="form-select" value={formState.currency} onChange={(e) => handleInputChange('currency', e.target.value)}>
                                        <option value="USD($)">USD($)</option>
                                        <option value="GBP(£)">GBP(£)</option>
                                        <option value="EUR(€)">EUR(€)</option>
                                        <option value="INR(₹)">INR(₹)</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label>Price</label>
                                    <input type="number" className="form-control" value={formState.price} onChange={(e) => handleInputChange('price', e.target.value)} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Purchase Date</label>
                                    <input type="date" className="form-control" value={formState.purchaseDate} onChange={(e) => handleInputChange('purchaseDate', e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Employee</label>
                                    <select className="form-select" value={formState.employee} onChange={(e) => handleInputChange('employee', e.target.value)}>
                                        <option value="">--</option>
                                        {/* Populate options as per your requirements */}
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Project</label>
                                    <select className="form-select" value={formState.project} onChange={(e) => handleInputChange('project', e.target.value)}>
                                        <option value="">--</option>
                                        {/* Populate options as per your requirements */}
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Expense Category</label>
                                    <select className="form-select" value={formState.expenseCategory} onChange={(e) => handleInputChange('expenseCategory', e.target.value)}>
                                        <option value="">--</option>
                                        {/* Populate options as per your requirements */}
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Purchased From</label>
                                    <input type="text" className="form-control" value={formState.purchasedFrom} onChange={(e) => handleInputChange('purchasedFrom', e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Bank Account</label>
                                    <select className="form-select" value={formState.bankAccount} onChange={(e) => handleInputChange('bankAccount', e.target.value)}>
                                        <option value="">--</option>
                                        {/* Populate options as per your requirements */}
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Description</label>
                                    <textarea className="form-control" rows="3" value={formState.description} onChange={(e) => handleInputChange('description', e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Bill</label>
                                    <input type="file" className="form-control" onChange={(e) => handleFileChange(e.target.files[0])} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="">Billing Frequency</label>
                                            <select className="form-select" value={formState.billingFrequency} onChange={(e) => handleInputChange('billingFrequency', e.target.value)}>
                                                <option value="Daily">Daily</option>
                                                <option value="Weekly">Weekly</option>
                                                <option value="Bi-Weekly">Bi-Weekly</option>
                                                <option value="Monthly">Monthly</option>
                                                <option value="Quarterly">Quarterly</option>
                                                <option value="Half-Yearly">Half-Yearly</option>
                                                <option value="Annually">Annually</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Start Date</label>
                                            <input type="date" className="form-control" value={formState.startDate} onChange={(e) => handleInputChange('startDate', e.target.value)} />
                                            <p style={{ fontSize: '13px' }}>Date from which invoices will start</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <label htmlFor="">Total Count</label>
                                            <input type="number" className="form-control" value={formState.totalCount} onChange={(e) => handleInputChange('totalCount', e.target.value)} />
                                            <p style={{ fontSize: '11px' }}>No. of billing cycles to be charged (set -1 for infinite cycles)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row">
                                        <div className="col p-3" style={{ border: '1px dotted black', height: '200px' }}>
                                            <p>The expense will be generated <b>{formState.billingFrequency}</b></p>
                                            <p>First Expense will be generated on <b>{formState.startDate}</b></p>
                                            <p>Next Expense Date will be <b>{getNextInvoiceDate()}</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <button type="submit" className="btn btn-white">Save</button> &nbsp;
                                    <button type="button" className="btn btn-white" data-bs-dismiss="offcanvas">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
);
}
export default AdminReccurenceExpenseForm;