import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLeadContactsForm() {
    const [formData, setFormData] = useState({
        salutation: '',
        name: '',
        email: '',
        leadSource: '',
        addedBy: '',
        companyName: '',
        website: '',
        mobile: '',
        officePhone: '',
        country: '',
        state: '',
        city: '',
        postalCode: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];
        const formDataWithDate = { ...formData, savedAt: currentDate };
        try {
            const response = await fetch('http://localhost:8080/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataWithDate),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Lead contact saved:', data);
                setFormData({
                    salutation: '',
                    name: '',
                    email: '',
                    leadSource: '',
                    addedBy: '',
                    companyName: '',
                    website: '',
                    mobile: '',
                    officePhone: '',
                    country: '',
                    state: '',
                    city: '',
                    postalCode: '',
                    address: '',
                });
                // navigate("/admin/lead-contacts")
            } else {
                console.error('Failed to save lead contact');
            }
        } catch (error) {
            console.error('Error saving lead contact:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row mt-4">
                <div className="col">
                    <h3>Lead Contact Detail</h3>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <label htmlFor="salutation">Salutation</label>
                            <select className="form-select" aria-label="Default select example" name="salutation" value={formData.salutation} onChange={handleChange}>
                                <option value="">--</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Miss">Miss</option>
                                <option value="Dr">Dr</option>
                                <option value="Sir">Sir</option>
                                <option value="Madam">Madam</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. raj singh"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="e.g. xyx@gmail.com"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <label htmlFor="leadSource">Lead Source</label>
                            <input
                                type="text"
                                className="form-control"
                                name="leadSource"
                                value={formData.leadSource}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="addedBy">Added By</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                name="addedBy"
                                value={formData.addedBy}
                                onChange={handleChange}
                            >
                                <option value="">--</option>
                                <option value="Raj">Raj Rastogi</option>
                                <option value="Ramesh">Ramesh Singh</option>
                                <option value="Shweta">Shweta Mishra</option>
                                <option value="Vikas Pandey">Vikas Pandey</option>
                            </select>
                        </div>
                        <div className="col"></div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12" style={{ padding: '20px' }}>
                            <h3>Company Details</h3>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <label htmlFor="companyName">Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. Acme Corporation"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="website">Website</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. https://www.example.com"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="mobile">Mobile</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. 1234567890"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="officePhone">Office Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="officePhone"
                                value={formData.officePhone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. India, Japan, Dubai"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. California, Rajasthan, Dubai"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. New York, Jaipur, Dubai"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="postalCode">Postal Code</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. 90250"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <label htmlFor="address">Address</label>
                            <textarea
                                className="form-control"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className="row mt-4 pb-4">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-white form-control" type="submit">Save</button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-white form-control" type="reset">Cancel</button>
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AdminLeadContactsForm;
