import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminAssetsForm = () => {
    const [assetName, setAssetName] = useState('');
    const [assetType, setAssetType] = useState('Electronics');
    const [assetPicture, setAssetPicture] = useState(null);
    const [serialNumber, setSerialNumber] = useState('');
    const [value, setValue] = useState('');
    const [location, setLocation] = useState('Office');
    const [status, setStatus] = useState('Active');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = (error) => reject(error);
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('assetName', assetName);
        formData.append('assetType', assetType);
        formData.append('serialNumber', serialNumber);
        formData.append('value', value);
        formData.append('location', location);
        formData.append('status', status);
        formData.append('description', description);
    
        // Check if assetPicture is not null or undefined
        if (assetPicture) {
            formData.append('assetPicture', assetPicture);
        }
    
        try {
            setLoading(true);
            await axios.post('http://localhost:8080/assets', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Asset added successfully');
            resetForm(); // Clear the form fields
        } catch (error) {
            console.error('Error adding asset:', error);
            toast.error('Error adding asset');
        } finally {
            setLoading(false);
        }
    };
    
    const resetForm = () => {
        setAssetName('');
        setAssetType('Electronics');
        setAssetPicture(null);
        setSerialNumber('');
        setValue('');
        setLocation('Office');
        setStatus('Active');
        setDescription('');
    };

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <h3>Add Asset Info</h3>
                        </div>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="assetName">Asset Name</label>
                                <input
                                    type="text"
                                    id="assetName"
                                    className="form-control"
                                    value={assetName}
                                    onChange={(e) => setAssetName(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="assetType">Asset Type</label>
                                <select
                                    id="assetType"
                                    className="form-select"
                                    value={assetType}
                                    onChange={(e) => setAssetType(e.target.value)}
                                >
                                    <option value="Electronics">Electronics</option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="assetPicture">Asset Picture</label>
                                <input
                                    type="file"
                                    id="assetPicture"
                                    className="form-control"
                                    onChange={(e) => setAssetPicture(e.target.files[0])}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="serialNumber">Serial Number</label>
                                <input
                                    type="text"
                                    id="serialNumber"
                                    className="form-control"
                                    value={serialNumber}
                                    onChange={(e) => setSerialNumber(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="value">Value</label>
                                <input
                                    type="text"
                                    id="value"
                                    className="form-control"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    className="form-control"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label>Status</label><br />
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        id="active"
                                        value="Active"
                                        checked={status === 'Active'}
                                        onChange={() => setStatus('Active')}
                                    />
                                    <label className="form-check-label" htmlFor="active">Active</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        id="nonFunctional"
                                        value="Non Functional"
                                        checked={status === 'Non Functional'}
                                        onChange={() => setStatus('Non Functional')}
                                    />
                                    <label className="form-check-label" htmlFor="nonFunctional">Non Functional</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        id="lost"
                                        value="Lost"
                                        checked={status === 'Lost'}
                                        onChange={() => setStatus('Lost')}
                                    />
                                    <label className="form-check-label" htmlFor="lost">Lost</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        id="damaged"
                                        value="Damaged"
                                        checked={status === 'Damaged'}
                                        onChange={() => setStatus('Damaged')}
                                    />
                                    <label className="form-check-label" htmlFor="damaged">Damaged</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        id="underMaintenance"
                                        value="Under Maintenance"
                                        checked={status === 'Under Maintenance'}
                                        onChange={() => setStatus('Under Maintenance')}
                                    />
                                    <label className="form-check-label" htmlFor="underMaintenance">Under Maintenance</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? 'Saving...' : 'Save'}
                                </button> &nbsp;
                                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AdminAssetsForm;
