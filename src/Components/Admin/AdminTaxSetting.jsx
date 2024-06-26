import React from 'react'

const AdminTaxSetting = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-white" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-plus"></i> Add Tax</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="card">
            <div class="s-b-inner s-b-notifications bg-white b-shadow-4 rounded">
              <div class="s-b-n-header" id="tabs">
                <h3 class="pt-3"><b>Tax Settings</b></h3>
              </div><hr />
              <div class="">
                <div class="tab-content" id="nav-tabContent">
                  <table class="table table-bordered table-hover" id="example">
                    <thead class="text-center" style={{ fontSize: 'smaller' }}>
                      <tr>
                        <th>#</th>
                        <th>Tax Name</th>
                        <th>Rate %</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <tr id="tax-1">
                        <td>1</td>
                        <td>GST</td>
                        <td>10</td>
                        <td>
                          <div class="task_view">
                            <a class="task_view_more d-flex align-items-center justify-content-center edit-tax" href="javascript:;" data-tax-id="1">
                              <i class="fa fa-edit icons mr-2" style={{ fontSize: '15px' }}></i> &nbsp;
                              <i class="fa fa-trash text-danger icons mr-2" style={{ fontSize: '15px' }}></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr id="tax-2">
                        <td>2</td>
                        <td>CGST</td>
                        <td>18</td>
                        <td>
                          <div class="task_view">
                            <a class="task_view_more d-flex align-items-center justify-content-center edit-tax" href="javascript:;" data-tax-id="2">
                              <i class="fa fa-edit icons mr-2" style={{ fontSize: '15px' }}></i> &nbsp;
                              <i class="fa fa-trash text-danger icons mr-2" style={{ fontSize: '15px' }}></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr id="tax-3">
                        <td>3</td>
                        <td>VAT</td>
                        <td>10</td>
                        <td>
                          <div class="task_view">
                            <a class="task_view_more d-flex align-items-center justify-content-center edit-tax" href="javascript:;" data-tax-id="3">
                              <i class="fa fa-edit icons mr-2" style={{ fontSize: '15px' }}></i>
                              &nbsp;
                              <i class="fa fa-trash text-danger icons mr-2" style={{ fontSize: '15px' }}></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr id="tax-4">
                        <td>4</td>
                        <td>IGST</td>
                        <td>10</td>
                        <td>
                          <div class="task_view">
                            <a class="task_view_more d-flex align-items-center justify-content-center edit-tax" href="javascript:;" data-tax-id="4">
                              <i class="fa fa-edit icons mr-2" style={{ fontSize: '15px' }}></i> &nbsp;
                              <i class="fa fa-trash text-danger icons mr-2" style={{ fontSize: '15px' }}></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr id="tax-5">
                        <td>5</td>
                        <td>UTGST</td>
                        <td>10</td>
                        <td>
                          <div class="task_view">
                            <a class="task_view_more d-flex align-items-center justify-content-center edit-tax" href="javascript:;" data-tax-id="5">
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
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Add Tax</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form action="">
                    <div className="row">
                      <div className="col">
                        <label htmlFor="">Tax Name</label>
                        <input type="text" name="" id="" className="form-control" />
                      </div>
                      <div className="col">
                        <label htmlFor="">Tax Rate</label>
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

export default AdminTaxSetting