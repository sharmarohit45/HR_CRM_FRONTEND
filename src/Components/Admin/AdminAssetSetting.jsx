import React from 'react'

const AdminAssetSetting = () => {
  return (
    <>
    <div className="row">
      <div className="col">
        <button type="button" className="btn btn-white" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-plus"></i> Add Assets Type</button>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col">
        <div className="card">
          <div class="s-b-inner s-b-notifications bg-white b-shadow-4 rounded">
            <div class="s-b-n-header" id="tabs">
              <h3 className='pt-3'><b>Assets Type</b></h3>
            </div><hr />
            <div class="">
              <div class="tab-content" id="nav-tabContent">
                <table class="table table-bordered table-hover" id="example">
                  <thead class="text-center" style={{ fontSize: 'smaller' }}>
                    <tr>
                      <th>#</th>
                      <th>Assets Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody class="text-center">
                    <tr id="tax-1">
                      <td></td>
                      <td></td>
                      <td>
                        <div class="task_view">
                          <a class="task_view_more d-flex align-items-center justify-content-center edit-tax" href="javascript:;" data-tax-id="1">
                            <i class="fa fa-edit icons mr-2" style={{ fontSize: '15px' }}></i> &nbsp;
                            <i class="fa fa-trash text-danger icons mr-2" style={{ fontSize: '15px' }}></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add Asset Type</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="">Name</label>
                      <input type="text" name="" id="" className="form-control" />
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
      </div>
    </div>
  </>
  )
}

export default AdminAssetSetting