import React from 'react'

function Otp() {
  return (
    <>
      <div  className="account-page">

        {/*  Main Wrapper  */}
        <div  className="main-wrapper">
          <div  className="account-content">
            <div  className="container">
              <div  className="account-box">
                <div  className="account-wrapper">
                  <h3  className="account-title">OTP</h3>
                  <p  className="account-subtitle">Verification your account</p>

                  {/*  Account Form  */}
                  <form action="admin-dashboard.html">
                    <div  className="otp-wrap">
                      <input type="text" placeholder="0" maxlength="1"  className="otp-input" />
                      <input type="text" placeholder="0" maxlength="1"  className="otp-input" />
                      <input type="text" placeholder="0" maxlength="1"  className="otp-input" />
                      <input type="text" placeholder="0" maxlength="1"  className="otp-input" />
                    </div>
                    <div  className="form-group text-center">
                      <button  className="btn btn-primary account-btn" type="submit">Enter</button>
                    </div>
                    <div  className="account-footer">
                      <p>Not yet received? <a href="">Resend OTP</a></p>
                    </div>
                  </form>
                  {/*  /Account Form  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Otp