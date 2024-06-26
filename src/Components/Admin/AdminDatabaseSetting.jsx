import React from 'react'

const AdminDatabaseSetting = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-white"><i className='fa fa-plus'></i> Create Database Backup</button> &nbsp;
          <button type="button" className="btn btn-white" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className='fa fa-cog'></i> Auto Backup Setting</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="card">
            <div className="row">
              <div className="col">
                <h3 className='pt-3'><b>Database Backup Settings</b></h3>
              </div>
            </div><hr />
            <div className="row">
              <div className="col">
                <table className='table table-stripped'>
                  <thead>
                    <tr>
                      <th>Backup</th>
                      <th>Backup Size</th>
                      <th>Date & Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Auto Backup Settings</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form action="">
                <div className="row">
                  <div className="col">
                    <label htmlFor="">Hour of day to perform backup</label>
                    <input type="time" name="" id="" className="form-control" />
                  </div>

                </div>
                <div className="row mt-2">
                  <div className="col">
                    <label htmlFor="">Create a backup every X days</label>
                    <input type="number" name="" id="" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col mt-2">
                    <label htmlFor="">Auto delete backups older than X days (set -1 to disable)</label>
                    <input type="number" name="" id="" className="form-control" />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-white" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-white">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDatabaseSetting