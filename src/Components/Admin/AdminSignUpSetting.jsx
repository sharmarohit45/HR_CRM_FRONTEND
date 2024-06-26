import React, { useState } from 'react'

const AdminSignUpSetting = () => {
  const [visible,setVisible]=useState(false);
  function visibility(){
    setVisible(!visible)
  }
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="row">
            <div className="col">
              <h3 className='pt-4'><b>Sign Up Settings</b></h3>
            </div>
          </div> <hr />
          <div className="row">
            <div className="col">
              <label htmlFor="">Sign-up terms and conditions</label>
              <div class="form-check form-switch mt-1">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={visibility}/>
              </div>
            </div>
            {visible && (<div className="col">
              <label htmlFor="">Sign-up terms and conditions</label>
              <input type="text" name="" id="" className="form-control" placeholder='URL'/>
            </div>)}
          </div><hr />
          <div className="row pb-3">
            <div className="col text-end">
              <button type="submit" className="btn btn-white">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSignUpSetting