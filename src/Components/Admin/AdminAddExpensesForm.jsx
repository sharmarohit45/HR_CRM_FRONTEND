import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css';  // Assuming this file is required for custom styles
import axios from 'axios';

const AdminAddExpensesForm = () => {
    const [formData, setFormData] = useState({
        itemName: '',
        currency: 'USD($)',
        exchangeRate: 1, // default exchange rate
        price: '',
        purchaseDate: '',
        employee: '',
        project: '',
        expenseCategory: '',
        purchasedFrom: '',
        bankAccount: '',
        description: '',
        bill: null
    });

    const [editorData, setEditorData] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'currency') {
            // Fetch and set the exchange rate based on the selected currency
            // For simplicity, hardcoding the exchange rates
            const exchangeRates = {
                'USD($)': 1,
                'GBP(£)': 0.75,
                'EUR(€)': 0.85,
                'INR(₹)': 75
            };
            setFormData({ ...formData, exchangeRate: exchangeRates[value], currency: value });
        }
    };

    const handleEditorChange = (value) => {
        setEditorData(value);
        setFormData({ ...formData, description: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, bill: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formPayload = new FormData();
        for (const key in formData) {
            formPayload.append(key, formData[key]);
        }

        try {
            const response = await axios.post('/api/expenses', formPayload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }

        // Log the form data to the console
        for (const key in formData) {
            console.log(`${key}: ${formData[key]}`);
        }
    };

    const handleReset = () => {
        setFormData({
            itemName: '',
            currency: 'USD($)',
            exchangeRate: 1,
            price: '',
            purchaseDate: '',
            employee: '',
            project: '',
            expenseCategory: '',
            purchasedFrom: '',
            bankAccount: '',
            description: '',
            bill: null
        });
        setEditorData('');
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],
            ['clean']
        ]
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'link', 'image', 'video'
    ];

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <h3>Expenses Details</h3>
                        </div>
                        <hr />
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="itemName">Item Name</label>
                                        <input type="text" name="itemName" className="form-control" value={formData.itemName} onChange={handleInputChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="currency">Currency</label>
                                        <select name="currency" className="form-select" value={formData.currency} onChange={handleInputChange}>
                                            <option value="USD($)">USD($)</option>
                                            <option value="GBP(£)">GBP(£)</option>
                                            <option value="EUR(€)">EUR(€)</option>
                                            <option value="INR(₹)">INR(₹)</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="exchangeRate">Exchange Rate</label>
                                        <input type="text" name="exchangeRate" className="form-control" value={formData.exchangeRate} readOnly />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="price">Price</label>
                                        <input type="number" name="price" className="form-control" min={0} value={formData.price} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="purchaseDate">Purchase Date</label>
                                        <input type="date" name="purchaseDate" className="form-control" value={formData.purchaseDate} onChange={handleInputChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="employee">Employee</label>
                                        <select name="employee" className="form-select" value={formData.employee} onChange={handleInputChange}>
                                            <option value="">--</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="project">Project</label>
                                        <select name="project" className="form-select" value={formData.project} onChange={handleInputChange}>
                                            <option value="">--</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="expenseCategory">Expense Category</label>
                                        <select name="expenseCategory" className="form-select" value={formData.expenseCategory} onChange={handleInputChange}>
                                            <option value="">--</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="purchasedFrom">Purchased From</label>
                                        <input type="text" name="purchasedFrom" className="form-control" value={formData.purchasedFrom} onChange={handleInputChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="bankAccount">Bank Account</label>
                                        <select name="bankAccount" className="form-select" value={formData.bankAccount} onChange={handleInputChange}>
                                            <option value="">--</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="description">Description</label>
                                        <ReactQuill
                                            value={editorData}
                                            onChange={handleEditorChange}
                                            theme="snow"
                                            modules={modules}
                                            formats={formats}
                                            className="form-control quill-editor"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="bill">Bill</label>
                                        <input type="file" name="bill" className="form-control" onChange={handleFileChange} />
                                    </div>
                                </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col">
                                        <button type="submit" className="btn btn-white">Save</button> &nbsp;
                                        <button type="reset" className="btn btn-white" onClick={handleReset}>Reset</button> &nbsp;
                                        <button type="button" className="btn btn-white" data-bs-dismiss="offcanvas">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAddExpensesForm;
