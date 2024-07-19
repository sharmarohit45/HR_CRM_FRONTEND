import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateAwardList = ({ id }) => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const [colorCode, setColorCode] = useState('#000000');
    const [summary, setSummary] = useState('');
    const [status, setStatus] = useState('Active'); // Added state for status
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (id) {
            const fetchAward = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/award/${id}`);
                    const { title, icon, colorCode, summary, status } = response.data;
                    setTitle(title);
                    setIcon(icon);
                    setColorCode(colorCode);
                    setSummary(summary);
                    setStatus(status); // Initialize status
                } catch (error) {
                    console.error("Error fetching award details", error);
                }
            };

            fetchAward();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.put(`http://localhost:8080/award/${id}`, {
                title,
                icon,
                colorCode,
                summary,
                status, // Include status in the update
            });
            toast.success("Award updated successfully!");
        } catch (error) {
            console.error("Error updating award", error);
            toast.error("Failed to update award. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <h3><b>Update Award Details</b><hr /></h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="icon">Choose Icon</label>
                            <div className="input-group">
                                <select
                                    className="form-control"
                                    name="icon"
                                    id="icon"
                                    value={icon}
                                    onChange={(e) => setIcon(e.target.value)}
                                >
                                    <option value="">--</option>
                                    <option value="fa fa-trophy">Trophy</option>
                                    <option value="fa fa-thumbs-up">Thumbs Up</option>
                                    <option value="fa fa-award">Award</option>
                                    <option value="fa fa-book">Book</option>
                                    <option value="fa fa-gift">Gift</option>
                                    <option value="fa fa-clock">Watch</option>
                                    <option value="fa fa-mug-hot">Cup</option>
                                    <option value="fa fa-plane">Plane</option>
                                    <option value="fa fa-piggy-bank">Money</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-1 p-4">
                            <i className={icon}
                                style={{ backgroundColor: colorCode, fontSize: '18px', padding: '10px', borderRadius: '20%' }}></i>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-2">
                            <label htmlFor="colorCode">Color Code</label>
                            <input
                                type="color"
                                id="colorCode"
                                className="form-control"
                                value={colorCode}
                                onChange={(e) => setColorCode(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-2">
                            <label htmlFor="status">Status</label>
                            <select
                                className="form-select"
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <label htmlFor="summary">Summary</label>
                            <textarea
                                className="form-control"
                                id="summary"
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="row mt-3 mb-3">
                        <div className="col text-end">
                            <button
                                className="btn btn-white"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    );
};

export default UpdateAwardList;
