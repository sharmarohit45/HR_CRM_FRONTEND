import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LogInSection = () => {
    const [email, emailupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [empData,setEmpData] =useState([]);
     



    const proceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            const loginData = {
                email: email,
                password: password,
            };

            axios.post('http://localhost:8080/authenticate', loginData)
                .then(response => {
                    console.log('Logged in successfully:', response.data);
                    toast.success('Login successful');
                    localStorage.setItem('token', response.data.jwtToken);
                    const role = response.data?.user?.role;
                    if (role === 'Client') {
                        localStorage.setItem('email', response.data.user.email);
                        navigate('/client', { client: response.data.user.clientId });
                    } else if (role === 'Employee') {
                        localStorage.setItem('email', response.data.user.email);
                        navigate('/employee');
                    }
                    else {
                        navigate('/admin');
                    }
                })
                .catch(error => {
                    console.error('There was an error logging in!', error);
                    toast.error('Login failed. Please try again.');
                });
        }
    };

    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            toast.warning('Please enter email');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please enter password');
        }
        return result;
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="account-page">
                <div className="main-wrapper">
                    <div className="account-content">
                        <div className="container">
                            <div className="account-box">
                                <div className="account-wrapper">
                                    <div className="row">
                                        <div className="col text-center">
                                            <img src="/assets/img/logo2.png" alt="" style={{ minHeight: '100px', width: '300px' }} />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <h3 className="account-title">Login</h3>
                                            <p className="account-subtitle">Access to our dashboard</p>
                                            <form onSubmit={proceedLogin}>
                                                <div className="form-group">
                                                    <label>Email Address</label>
                                                    <input className="form-control" type="text" value={email} onChange={e => emailupdate(e.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col">
                                                            <label>Password</label>
                                                        </div>
                                                        <div className="col-auto">
                                                            <Link className="text-muted" to="/forget-password">
                                                                Forgot password?
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <input type={showPassword ? "text" : "password"} className="form-control" name="password" value={password} onChange={e => passwordupdate(e.target.value)} />
                                                        <span className="input-group-text" onClick={togglePasswordVisibility}>
                                                            {showPassword ? <i className='fa fa-eye'></i> : <i className='fa fa-eye-slash'></i>}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form-group text-center">
                                                    <button className="btn btn-primary account-btn" type="submit">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogInSection