import { options } from '@fullcalendar/core/preact.js';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AdminDealsForm() {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        leadContacts: '',
        dealName: '',
        pipeline: '',
        dealStages: '',
        dealValue: '',
        closeDate: '',
        dealCategory: '',
        dealAgent: '',
        products: '',
        dealWatcher: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];
        const formDataWithDate = { ...formData, savedAt: currentDate };
        try {
            const response = await fetch('http://localhost:8080/deals', {
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
                    leadContacts: '',
                    dealName: '',
                    pipeline: '',
                    dealStages: '',
                    dealValue: '',
                    closeDate: '',
                    dealCategory: '',
                    dealAgent: '',
                    products: '',
                    dealWatcher: ''
                });
            } else {
                console.error('Failed to save lead contact');
            }
        } catch (error) {
            console.error('Error saving lead contact:', error);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/lead');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row mt-4">
                    <div className="col">
                        <h3>Deal Details</h3>
                        <hr />
                        <div className="row mt-4">
                            <div className="col">
                                <label htmlFor="">Lead Contacts</label>
                                <select className="form-select" name="leadContacts" value={formData.leadContacts} onChange={handleChange} required>
                                    <option>--</option>
                                    {data.map((item) => (

                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="">Deal Name</label>
                                <input type="text" className='form-control' name='dealName' value={formData.dealName} onChange={handleChange} required />
                            </div>
                            <div className="col">
                                <label htmlFor="">Pipeline</label>
                                <select className="form-select" name="pipeline" value={formData.pipeline} onChange={handleChange} required>
                                    <option value="Sales_Pipeline">Sales Pipeline</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <label htmlFor="">Deal Stages</label>
                                <select className="form-select" name="dealStages" value={formData.dealStages} onChange={handleChange} required>
                                    <option value="Generated">Generated</option>
                                    <option value="Qualified">Qualified</option>
                                    <option value="Initial_Contact">Initial Contact</option>
                                    <option value="Proposel_Sent">Proposel Sent</option>
                                    <option value="Win">Win</option>
                                    <option value="Lost">Lost</option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="">Deal Value</label>
                                <input type="text" className='form-control' name='dealValue' value={formData.dealValue} onChange={handleChange} required />
                            </div>
                            <div className="col">
                                <label htmlFor="">Close Date</label>
                                <input type="date" name="closeDate" id="" className='form-control' value={formData.closeDate} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <label htmlFor="">Deal Category</label>
                                <input type="text" className='form-control' name='dealCategory' value={formData.dealCategory} onChange={handleChange} required />
                            </div>
                            <div className="col">
                                <label htmlFor="">Deal Agent</label>
                                <input type="text" className='form-control' name='dealAgent' value={formData.dealAgent} onChange={handleChange} required />
                            </div>
                            <div className="col">
                                <label htmlFor="">Products</label>
                                <input type="text" className='form-control' name='products' value={formData.products} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-4">
                                <label htmlFor="Deal Watcher">Deal Watcher</label>
                                <select className="form-select" name="dealWatcher" value={formData.dealWatcher} onChange={handleChange} required>
                                    <option value="">--</option>
                                    <option value="Ravi">Ravi</option>
                                    <option value="Raj">Raj</option>
                                    <option value="Rajesh">Rajesh</option>
                                    <option value="Sudha">Sudha</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-4 pb-4">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-white form-control" type="submit" onClick={handleSubmit}>Save</button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-white form-control" type="reset">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AdminDealsForm