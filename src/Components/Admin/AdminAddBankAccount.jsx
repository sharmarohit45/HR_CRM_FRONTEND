import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminAddBankAccount = () => {
    const [accountType, setAccountType] = useState('bank');
    const [formData, setFormData] = useState({
        bankName: '',
        accountHolderName: '',
        accountNumber: '',
        accountType: 'Savings',
        currency: 'USD',
        contactNumber: '',
        openingBalance: '',
        status: 'Active',
        cashAccountHolderName: '',
        cashAccountNumber: '',
        openingAmount: '',
        cashContactNumber: '',
        cashStatus: 'Active',
        bankData: '',
    });

    const handleAccountTypeChange = (event) => {
        setAccountType(event.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (event) => {
        const { files } = event.target;
        const file = files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const blobString = reader.result.split(',')[1];
            setFormData((prevState) => ({
                ...prevState,
                bankData: blobString,
            }));
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/account', formData);
            toast.success('Account added successfully');
        } catch (error) {
            toast.error('Error adding account');
            if (error.response) {
                console.error('Server response:', error.response.data);
            }
        }
    };

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">
                            <h3>Add Bank Account</h3>
                        </div>
                    </div>
                    <hr />
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="accountType">Type</label><br /><br />
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="accountType"
                                            id="bankOption"
                                            value="bank"
                                            checked={accountType === 'bank'}
                                            onChange={handleAccountTypeChange}
                                        />
                                        <label className="form-check-label" htmlFor="bankOption">Bank</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="accountType"
                                            id="cashOption"
                                            value="cash"
                                            checked={accountType === 'cash'}
                                            onChange={handleAccountTypeChange}
                                        />
                                        <label className="form-check-label" htmlFor="cashOption">Cash</label>
                                    </div>
                                </div>
                            </div>
                            {accountType === 'bank' && (
                                <>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="bankName">Bank Name</label>
                                            <input type="text" name="bankName" id="bankName" className='form-control' onChange={handleChange} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="accountHolderName">Account Holder Name</label>
                                            <input type="text" name="accountHolderName" id="accountHolderName" className='form-control' onChange={handleChange} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="accountNumber">Account Number</label>
                                            <input type="text" name="accountNumber" id="accountNumber" className='form-control' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="accountType">Account Type</label>
                                            <select name="accountType" id="accountType" className='form-select' onChange={handleChange}>
                                                <option value="Savings">Savings</option>
                                                <option value="Current">Current</option>
                                                <option value="Credit Card">Credit Card</option>
                                                <option value="Loans">Loans</option>
                                                <option value="Overdraft">Overdraft</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="currency">Currency</label>
                                            <select name="currency" id="currency" className="form-select" onChange={handleChange}>
                                                <option value="USD">USD</option>
                                                <option value="GBP">GBP</option>
                                                <option value="EUR">EUR</option>
                                                <option value="INR">INR</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="contactNumber">Contact Number</label>
                                            <input type="text" name="contactNumber" id="contactNumber" className='form-control' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="openingBalance">Opening Balance</label>
                                            <input type="text" name="openingBalance" id="openingBalance" className='form-control' onChange={handleChange} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="status">Status </label>
                                            <select name="status" id="status" className='form-select' onChange={handleChange}>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <label htmlFor="file">Bank Logo </label>
                                            <input type="file" className='form-control' name="file" onChange={handleFileChange} />
                                        </div>
                                    </div>
                                </>
                            )}
                            {accountType === 'cash' && (
                                <>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="cashAccountHolderName">Account Holder Name</label>
                                            <input type="text" name="cashAccountHolderName" id="cashAccountHolderName" className='form-control' onChange={handleChange} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="cashAccountNumber">Account Number</label>
                                            <input type="text" name="cashAccountNumber" id="cashAccountNumber" className='form-control' onChange={handleChange} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="cashContactNumber">Contact Number</label>
                                            <input type="text" name="cashContactNumber" id="cashContactNumber" className='form-control' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="openingAmount">Opening Amount</label>
                                            <input type="text" name="openingAmount" id="openingAmount" className='form-control' onChange={handleChange} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="cashStatus">Status </label>
                                            <select name="cashStatus" id="cashStatus" className='form-select' onChange={handleChange}>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <button type="submit" className='btn btn-white'>Save</button> &nbsp;
                                    <button type="button" className='btn btn-white' data-bs-dismiss='offcanvas'>Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AdminAddBankAccount;
