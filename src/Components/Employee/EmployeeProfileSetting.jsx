import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const EmployeeProfileSetting = () => {
  return (
    <>
      <div className="card">
      <div className="row">
        <div className="col">
          <div className="card tab-box mt-3">
            <div className="row user-tabs">
              <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                  <li className="nav-item">
                    <a href="#Profile" data-bs-toggle="tab" className="nav-link active">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a href="#Emergency_Contacts" data-bs-toggle="tab" className="nav-link">Emergency Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            {/* <!-- Profile Info Tab --> */}
            <div id="Profile" className="pro-overview tab-pane fade show active">
              <form action="">
                <div className="row">
                  <div className="col">
                    <label htmlFor="">Profile Picture</label>
                    <input type="file" name="" id="" className="form-control" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">Your Name</label>
                    <div className="input-group">
                      {/* <select name="" id="" className="form-select input-group-text">
                        <option value="">--</option>
                      </select> */}
                      <input type="text" name="" id="" className="form-control" />
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="">Your Email</label>
                    <input type="email" name="" id="" className="form-control" />
                  </div>
                  <div className="col">
                    <label htmlFor="">Your Password</label>
                    <div className="input-group">
                      <input type="password" name="" id="" className="form-control" />
                      <i className="fa fa-eye input-group-text pt-3"></i>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">Receive email notifications?</label>
                    <div className="input-check">
                      <input type="radio" name="" id="" className='form-check-input' /> Yes &nbsp;
                      <input type="radio" name="" id="" className='form-check-input' /> No
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="">Enable Google Calendar</label>
                    <div className="input-check">
                      <input type="radio" name="" id="" className='form-check-input' /> Yes &nbsp;
                      <input type="radio" name="" id="" className='form-check-input' /> No
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="">Gender</label>
                    <div className="input-check">
                      <input type="radio" name="" id="" className='form-check-input' /> Male &nbsp;
                      <input type="radio" name="" id="" className='form-check-input' /> Female
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">Country</label>
                    <select name="" id="" className="form-select">
                      <option value="">--</option>
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="">Mobile</label>
                    <input type="number" name="" id="" className="form-control" />
                  </div>
                  <div className="col">
                    <label htmlFor="">Change Language</label>
                    <input type="text" name="" id="" className="form-control" />
                  </div>
                </div><hr />
                <div className="row">
                  <div className="col text-end">
                    <button type="submit" className='btn btn-white'>Save</button>
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- /Profile Info Tab --> */}

            {/* <!-- Projects Tab --> */}
            <div className="tab-pane fade" id="Emergency_Contacts">
              <div className="row">
                <div className="col">
                  <form action="">
                    <DataGrid pageSizeOptions={[5, 10, { value: 100, label: '100' }]}
                      columns={[
                        { field: 'name', headerName: 'Name', hideable: false, width: 100 },
                        { field: 'email', headerName: 'Email', hideable: false, width: 100 },
                        { field: 'mobile', headerName: 'Mobile', hideable: false, width: 190 },
                        { field: 'relationship', headerName: 'Relationship', width: 190 },
                        {
                          field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                            <div>
                              <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                              <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                <li><a className="dropdown-item"><i className="fa fa-eye"></i> View</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                              </ul>
                            </div>
                          )
                        },
                      ]}
                      // rows={rows.map(row => ({
                      //   id: row.empId,
                      //   empId: row.empId,
                      //   employeeIdentity: row.employeeIdentity,
                      //   empName: row.empName,
                      //   email: row.email,
                      //   empUserRole: row.empUserRole,
                      //   reportingTo: row.reportingTo,
                      //   Status: row.Status,
                      //   imageData: row.imageData,
                      //   action: row.action,
                      // }))}
                      slots={{
                        toolbar: GridToolbar,
                      }}
                      checkboxSelection
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default EmployeeProfileSetting