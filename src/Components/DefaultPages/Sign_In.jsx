import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Sign_In() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordMatch(event.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setPasswordMatch(event.target.value === password);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!passwordMatch) {
            // Passwords don't match, do not proceed with form submission
            return;
        }
        // Add your logic to handle form submission, e.g., sending data to server
        console.log('Form submitted successfully');
    };

    return (
        <div className="account-page">
            {/* Main Wrapper */}
            <div className="main-wrapper">
                <div className="account-content">
                    <div className="container">
                        <div className="account-box">
                            <div className="account-wrapper">
                                <h3 className="account-title">Register</h3>
                                <p className="account-subtitle">Access to our dashboard</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Email<span className="mandatory">*</span></label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password<span className="mandatory">*</span></label>
                                        <div className="password-input-container">
                                            <div className="d-flex justify-content-center">
                                                <input
                                                    className="form-control"
                                                    type={showPassword ? "text" : "password"}
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                />
                                                <FontAwesomeIcon className='m-3'
                                                    icon={showPassword ? faEyeSlash : faEye}
                                                    onClick={toggleShowPassword}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Repeat Password<span className="mandatory">*</span></label>
                                        <div className="password-input-container">
                                            <div className='d-flex justify-content-center'>
                                                <input
                                                    className="form-control"
                                                    type={showConfirmPassword ? "text" : "password"}
                                                />
                                                <FontAwesomeIcon className='m-3'
                                                    icon={showConfirmPassword ? faEyeSlash : faEye}
                                                    onClick={toggleShowConfirmPassword}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    {!passwordMatch && <p>Passwords do not match</p>}
                                    <div className="form-group text-center">
                                        <button className="btn btn-primary account-btn" type="submit">Register</button>
                                    </div>
                                    <div className="account-footer">
                                        <p>Already have an account? <Link to="/log-in">Login</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sign_In;
