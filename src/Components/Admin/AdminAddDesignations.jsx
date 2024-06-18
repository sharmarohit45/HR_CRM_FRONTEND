import React, { useState } from 'react';
import axios from 'axios';

const AddDesignationForm = () => {
    const [name, setName] = useState('');
    const [parent, setParent] = useState('Trainee'); // Default value for parent

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/designations', {
                name,
                parent
            });

            console.log('Saved successfully:', response.data);

            // Clear form after successful submission (optional)
            setName('');
            setParent('Trainee'); // Reset to default
        } catch (error) {
            console.error('Error saving:', error);
            // Handle error state or show error message to user
        }
    };

    return (
        <div className="row">
            <div className="card">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h3>Add Designations</h3>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className='form-control'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="parent">Parent</label>
                                <select id="parent" className="form-select"value={parent}onChange={(e) => setParent(e.target.value)}>
                                    <option>--</option>
                                    <option value="Trainee">Trainee</option>
                                    <option value="Senior">Senior</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Team Lead">Team Lead</option>
                                    <option value="Project Manager">Project Manager</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <button type="submit" className="btn btn-white">Save</button> &nbsp;
                                <button type="button" className="btn btn-white" data-bs-dismiss="offcanvas">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDesignationForm;
