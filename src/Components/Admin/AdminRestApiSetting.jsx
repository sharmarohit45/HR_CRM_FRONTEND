import React from 'react'

const AdminRestApiSetting = () => {
  return (
    <>
    <div className="row">
      <div className="col">
        <div className="card">
          <form action="">
            <div className="row">
              <div className="col">
                <h3 className='pt-3'><b>Rest API Setting</b></h3>
              </div>
            </div><hr />
            <div className="row">
              <div className="col">
                <label htmlFor="">FCM Key</label>
                <div className="input-group">
                <input type="password" name="" id="" className='form-control'/>
                <label htmlFor="" className='input-group-text'><i className='fa fa-eye'></i></label>
                </div>
                
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col text-end">
                <button type="submit" className="btn btn-white">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminRestApiSetting