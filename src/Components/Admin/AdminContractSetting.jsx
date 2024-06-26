import React from 'react'

const AdminContractSetting = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
          <form>
            <div className="row"><div className="col"><h3 className='pt-3'><b>Contract Settings</b></h3></div></div><hr />
            <div className="row">
              <div className="col">
                <label htmlFor="">Contract Prefix</label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col">
                <label htmlFor="">Contract Number Separator</label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col">
                <label htmlFor="">Contract Number Digits</label>
                <input type="text" name="" id="" className="form-control" />
              </div>
              <div className="col">
                <label htmlFor="">Contract Number Example</label>
                <input type="text" name="" id="" className="form-control" />
              </div>
            </div><hr />
            <div className="row mb-3">
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

export default AdminContractSetting