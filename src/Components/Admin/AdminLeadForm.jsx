import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeightIcon from '@mui/icons-material/Height';

const AdminLeadForm = () => {
    // State to manage the visibility of each field
    const [fields, setFields] = useState({
        name: false,
        companyName: true,
        email: true,
        website: true,
        address: true,
        mobile: true,
        message: true,
        city: true,
        state: true,
        country: true,
        postalCode: true,
        product: true,
        source: true,
    });

    // Handler to toggle the visibility of a field
    const handleFieldToggle = (field) => {
        setFields({
            ...fields,
            [field]: !fields[field],
        });
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Lead Form</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Lead Form</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <div className="card">
                                <table className='table table-stripped'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Field</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(fields).map((field, index) => (
                                            <tr key={index}>
                                                <td><HeightIcon /></td>
                                                <td>{field.charAt(0).toUpperCase() + field.slice(1)}</td>
                                                <td>
                                                    <div className="form-check form-switch">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id={`flexSwitchCheck${field}`}
                                                            checked={fields[field]}
                                                            onChange={() => handleFieldToggle(field)}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-3">
                                <div className="row">
                                    <h4><b>Preview</b></h4>
                                </div>
                                <form action="">

                                    <div className="row mt-3">
                                        <div className="col">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" id="name" className='form-control' />
                                        </div>
                                    </div>

                                    {fields.companyName && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="companyName">Company Name</label>
                                                <input type="text" name="companyName" id="companyName" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {fields.email && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="email">Email</label>
                                                <input type="text" name="email" id="email" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {fields.website && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="website">Website</label>
                                                <input type="text" name="website" id="website" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {fields.address && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="address">Address</label>
                                                <input type="text" name="address" id="address" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {fields.mobile && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="mobile">Mobile</label>
                                                <input type="text" name="mobile" id="mobile" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {fields.message && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="message">Message</label>
                                                <input type="text" name="message" id="message" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {fields.city && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="city">City</label>
                                                <input type="text" name="city" id="city" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {fields.state && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="state">State</label>
                                                <input type="text" name="state" id="state" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {fields.country && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="country">Country</label>
                                                <input type="text" name="country" id="country" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {fields.postalCode && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="postalCode">Postal Code</label>
                                                <input type="text" name="postalCode" id="postalCode" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {fields.product && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="product">Product</label>
                                                <input type="text" name="product" id="product" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {fields.source && (
                                        <div className="row mt-3">
                                            <div className="col">
                                                <label htmlFor="source">Source</label>
                                                <input type="text" name="source" id="source" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    <div className="row mt-3">
                                        <div className="col text-end">
                                            <button type='submit' className='btn btn-white'>Save</button>&nbsp;
                                            <button type='button' className='btn btn-dark'>Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLeadForm;
