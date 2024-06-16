import React from 'react'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    return (
        <>
            <div className='account-page'>
                {/* <!-- Main Wrapper --> */}
                <div className="main-wrapper">

                    <div className="account-content">
                        <div className="container">

                            <div className="account-box">
                                <div className="account-wrapper">
                                    <h3 className="account-title">Forgot Password?</h3>
                                    <p className="account-subtitle">Enter your email to get a password reset link</p>

                                    {/* <!-- Account Form --> */}
                                    <form>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="form-group text-center">
                                            <button className="btn btn-primary account-btn" type="submit">Reset Password</button>
                                        </div>
                                        <div className="account-footer">
                                            <p>Remember your password? <Link to="/">Login</Link></p>
                                        </div>
                                    </form>
                                    {/* <!-- /Account Form --> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Main Wrapper --> */}

            </div>
        </>
    )
}

export default ForgetPassword