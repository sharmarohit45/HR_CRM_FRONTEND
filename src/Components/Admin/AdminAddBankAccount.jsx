import React, { useState } from 'react';

const AdminAddBankAccount = () => {
    const [accountType, setAccountType] = useState('bank');

    const handleAccountTypeChange = (event) => {
        setAccountType(event.target.value);
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <div className="cart-title">
                                <h3>Add Bank Account</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="card-body">
                            <form action="">
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
                                        {/* Bank Section */}
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="bankName">Bank Name</label>
                                                <input type="text" name="bankName" id="bankName" className='form-control' />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="accountHolderName">Account Holder Name</label>
                                                <input type="text" name="accountHolderName" id="accountHolderName" className='form-control' />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="accountNumber">Account Number</label>
                                                <input type="text" name="accountNumber" id="accountNumber" className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="accountType">Account Type</label>
                                                <select name="accountType" id="accountType" className='form-select'>
                                                    <option value="Saving">Saving</option>
                                                    <option value="Current">Current</option>
                                                    <option value="Credit Card">Credit Card</option>
                                                    <option value="Loans">Loans</option>
                                                    <option value="Overdraft">Overdraft</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="currency">Currency</label>
                                                <select name="currency" id="currency" className="form-select">
                                                    <option value="USD($)">USD($)</option>
                                                    <option value="GBP(£)">GBP(£)</option>
                                                    <option value="EUR(€)">EUR(€)</option>
                                                    <option value="INR(₹)">INR(₹)</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="contactNumber">Contact Number</label>
                                                <input type="text" name="contactNumber" id="contactNumber" className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="openingBalance">Opening Balance</label>
                                                <input type="text" name="openingBalance" id="openingBalance" className='form-control' />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="status">Status </label>
                                                <select name="status" id="status" className='form-select'>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                </select>
                                            </div>
                                            <div className="col"></div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="bankLogo">Bank Logo </label>
                                                <input type="file" name="bankLogo" id="bankLogo" className='form-control' />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {accountType === 'cash' && (
                                    <>
                                        {/* Cash Section */}
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="cashAccountHolderName">Account Holder Name</label>
                                                <input type="text" name="cashAccountHolderName" id="cashAccountHolderName" className='form-control' />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="cashAccountNumber">Account Number</label>
                                                <input type="text" name="cashAccountNumber" id="cashAccountNumber" className='form-control' />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="cashContactNumber">Contact Number</label>
                                                <input type="text" name="cashContactNumber" id="cashContactNumber" className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="openingAmount">Opening Amount</label>
                                                <input type="text" name="openingAmount" id="openingAmount" className='form-control' />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="cashStatus">Status </label>
                                                <select name="cashStatus" id="cashStatus" className='form-select'>
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
            </div>
        </>
    );
};

export default AdminAddBankAccount;
