import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AdminCreateTicketForm from './AdminCreateTicketForm';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AdminAddProjectForm from './AdminAddProjectForm';

function AdminClientSectionProfile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const { clientId } = useParams();
  const visibility = () => {
    setVisible(!visible)
  }
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (clientId) {
          const response = await axios.get(`http://localhost:8080/client/${clientId}`);
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [clientId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data found for clientId: {clientId}</div>;

  return (
    <div className="page-wrapper">
      <div className="content container-fluid pb-0">
        <div className="row">
          <div className="col-md-12">
            <div className="page-head-box">
              <h3>{data.clientName}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">Dashboard</li>
                  <li className="breadcrumb-item">Clients</li>
                  <li className="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="card tab-box mt-3">
          <div className="row user-tabs">
            <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
              <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                <li className="nav-item"><a href="#emp_profile" data-bs-toggle="tab" className="nav-link active">Profile</a></li>
                <li className="nav-item"><a href="#emp_projects" data-bs-toggle="tab" className="nav-link">Projects</a></li>
                <li className="nav-item"><a href="#client_invoice" data-bs-toggle="tab" className="nav-link">Invoices</a></li>
                <li className="nav-item"><a href="#client_estimate" data-bs-toggle="tab" className="nav-link">Estimates</a></li>
                <li className="nav-item"><a href="#client_creditNote" data-bs-toggle="tab" className="nav-link">Credit Note</a></li>
                <li className="nav-item"><a href="#client_Payments" data-bs-toggle="tab" className="nav-link">Payments</a></li>
                <li className="nav-item"><a href="#client_Contacts" data-bs-toggle="tab" className="nav-link">Contacts</a></li>
                <li className="nav-item"><a href="#client_Documents" data-bs-toggle="tab" className="nav-link">Documents</a></li>
                <li className="nav-item"><a href="#client_Notes" data-bs-toggle="tab" className="nav-link">Notes</a></li>
                <li className="nav-item"><a href="#client_Tickets" data-bs-toggle="tab" className="nav-link">Tickets</a></li>
                <li className="nav-item"><a href="#client_Orders" data-bs-toggle="tab" className="nav-link">Orders</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content">
          {/* <!-- Profile Info Tab --> */}
          <div id="emp_profile" className="pro-overview tab-pane fade show active">
            <div className="row">
              <div className="col-sm-4">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-10">
                      <div className="row p-3">
                        <div className="col-sm-4">
                          <div className="profile-img">
                            <a href="#"><img src={`data:image/png;base64,${data.imageProfileData}`} style={{ borderRadius: '15px' }} /></a>
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <div className='profile-info'>
                            <h4><b>{data.clientName}</b></h4>
                            {/* <p>web developer</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2 p-3">
                      <MoreHorizIcon className='dropdown-toggle' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                      <ul className="dropdown-menu  text-center" aria-labelledby="dropdownMenuButton1">
                        <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Edit</li>
                      </ul>
                      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ widp: '70%' }}>
                        <div className="offcanvas-header">
                          <h5 id="offcanvasRightLabel">Update Client</h5>
                          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                          ...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-8 p-3">
                      <h4 className='text-dark'><b>Total Projects</b></h4>
                      <p>11</p>
                    </div>
                    <div className="col-sm-4 pt-4 text-center">
                      <i className='fas fa-layer-group' style={{ fontSize: '30px', color: 'gray' }}></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-8 p-3">
                      <h4 className='text-dark'><b>Total Earnings</b></h4>
                      <p>63773</p>
                    </div>
                    <div className="col-sm-4 pt-4 text-center">
                      <i className='fas fa-coins' style={{ fontSize: '30px', color: 'gray' }}></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-8 p-3">
                      <h4 className='text-dark'><b>Due Invoices</b></h4>
                      <p>11</p>
                    </div>
                    <div className="col-sm-4 pt-4 text-center">
                      <i className="fas fa-file-alt" style={{ fontSize: '30px', color: 'gray' }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="row p-2">
                    <div className="col">
                      <h3><b>Profile Info</b></h3>
                    </div>
                  </div>
                  <div className="row  p-3">
                    <div className="col">
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>Full Name</p>
                          <p>{data.clientName}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>Email</p>
                          <p>{data.email}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>Company Name</p>
                          <p>{data.companyName}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>Company Logo</p>
                          <p><img src={`data:image/png;base64,${data.imageLogoData}`} style={{ borderRadius: '15px', height: '70px' }} /></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>Mobile</p>
                          <p>{data.mobileNo}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>Office Phone Number</p>
                          <p>{data.officeNumber}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>Official Website</p>
                          <p><a href={data.officialWebsite}>{data.officialWebsite}</a></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>GST/VAT Number</p>
                          <p>{data.gstVatNumber}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>Address</p>
                          <p>{data.shoppingAddress}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>State</p>
                          <p>{data.state}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>City</p>
                          <p>{data.city}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>Postal Code</p>
                          <p>{data.postalCode}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-between">
                          <p>Language</p>
                          <p>{data.changeLanguage}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="card">
                    <h4>Projects</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="card">
                    <h4>Invoices</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="emp_projects">
            <div className="row">
              <div className="col">
                <button type='button' className='btn btn-white mb-2' data-bs-toggle="offcanvas" data-bs-target="#AddProject" aria-controls="offcanvasRight">Add Project</button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card" style={{ minHeight: '520px' }}>
                  <DataGrid
                    columns={[
                      { field: 'id', headerName: 'id', hideable: false, width: 100 },
                      { field: 'code', headerName: 'Code', hideable: false, width: 155 },
                      {
                        field: 'projectName', headerName: 'Project Name', hideable: false, width: 155
                      },
                      {
                        field: 'members', headerName: 'Members', hideable: false, width: 155
                      },
                      {
                        field: 'startDate', headerName: 'Start Date', hideable: false, width: 155
                      },
                      {
                        field: 'deadline', headerName: 'Deadline', hideable: false, width: 155
                      },
                      {
                        field: 'client', headerName: 'Client', hideable: false, width: 155
                      },
                      {
                        field: 'status', headerName: 'Status', hideable: false, width: 155
                      },
                      {
                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                          <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                            </ul>
                          </div>
                        )
                      },
                    ]}
                    // rows={rows
                    //          rows.map(row => ({
                    //             id: row.id,
                    //     //     name: row.name,
                    //     //     companyName: row.companyName,
                    //     //     email: row.email,
                    //     //     addedBy: row.addedBy,
                    //     //     savedAt: row.savedAt,
                    //     //     action: row.action
                    //      }))
                    // }
                    slots={{
                      toolbar: GridToolbar,
                    }}
                    checkboxSelection
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Invoice Tab --> */}
          <div className="tab-pane fade" id="client_invoice">
            <div className="row">
              <div className="col">
                <button type='button' className='btn btn-white mb-2' data-bs-toggle="offcanvas" data-bs-target="#CreateInvoice" aria-controls="offcanvasRight"><i className="fa fa-plus"></i> Create Invoice</button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card" style={{ minHeight: '520px' }}>
                  <DataGrid
                    columns={[
                      // { field: 'id', headerName: 'id', hideable: false, width: 100 },
                      { field: 'code', headerName: 'Code', hideable: false, width: 155 },
                      {
                        field: 'invoice', headerName: 'Invoice', hideable: false, width: 155
                      },
                      {
                        field: 'project', headerName: 'Project', hideable: false, width: 155
                      },
                      {
                        field: 'client', headerName: 'Client', hideable: false, width: 155
                      },
                      {
                        field: 'total', headerName: 'Deadline', hideable: false, width: 155
                      },
                      {
                        field: 'invoiceDate', headerName: 'Invoice Date', hideable: false, width: 155
                      },
                      {
                        field: 'status', headerName: 'Status', hideable: false, width: 155
                      },
                      {
                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                          <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                            </ul>
                          </div>
                        )
                      },
                    ]}
                    // rows={rows
                    //          rows.map(row => ({
                    //             id: row.id,
                    //     //     name: row.name,
                    //     //     companyName: row.companyName,
                    //     //     email: row.email,
                    //     //     addedBy: row.addedBy,
                    //     //     savedAt: row.savedAt,
                    //     //     action: row.action
                    //      }))
                    // }
                    slots={{
                      toolbar: GridToolbar,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Invoice Tab --> */}
          <div className="tab-pane fade" id="client_estimate">
            <div className="row">
              <div className="col">
                <button type='button' className='btn btn-white mb-2' data-bs-toggle="offcanvas" data-bs-target="#AddEstimate" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Create Estimates</button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card" style={{ minHeight: '520px' }}>
                  <DataGrid
                    columns={[
                      // { field: 'id', headerName: 'id', hideable: false, width: 100 },
                      { field: 'estimate', headerName: 'Estimate', hideable: false, width: 155 },
                      {
                        field: 'client', headerName: 'Client', hideable: false, width: 155
                      },
                      {
                        field: 'total', headerName: 'Total', hideable: false, width: 155
                      },
                      {
                        field: 'validTill', headerName: 'valid Till', hideable: false, width: 155
                      },
                      {
                        field: 'created', headerName: 'Created', hideable: false, width: 155
                      },
                      {
                        field: 'status', headerName: 'Status', hideable: false, width: 155
                      },
                      {
                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                          <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                            </ul>
                          </div>
                        )
                      },
                    ]}
                    // rows={rows
                    //          rows.map(row => ({
                    //             id: row.id,
                    //     //     name: row.name,
                    //     //     companyName: row.companyName,
                    //     //     email: row.email,
                    //     //     addedBy: row.addedBy,
                    //     //     savedAt: row.savedAt,
                    //     //     action: row.action
                    //      }))
                    // }
                    slots={{
                      toolbar: GridToolbar,
                    }}
                    checkboxSelection
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="client_creditNote">
            <div className="row">
              <div className="col-sm-12">
                <div className="card" style={{ minHeight: '520px' }}>
                  <DataGrid
                    columns={[
                      // { field: 'id', headerName: 'id', hideable: false, width: 100 },
                      { field: 'creditNote', headerName: 'Credit Note', hideable: false, width: 155 },
                      {
                        field: 'invoice', headerName: 'Invoice', hideable: false, width: 155
                      },
                      {
                        field: 'name', headerName: 'Name', hideable: false, width: 155
                      },
                      {
                        field: 'total', headerName: 'Total', hideable: false, width: 155
                      },
                      {
                        field: 'creditNoteDate', headerName: 'Credit Note Date', hideable: false, width: 155
                      },
                      {
                        field: 'status', headerName: 'Status', hideable: false, width: 155
                      },
                      {
                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                          <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                            </ul>
                          </div>
                        )
                      },
                    ]}
                    // rows={rows
                    //          rows.map(row => ({
                    //             id: row.id,
                    //     //     name: row.name,
                    //     //     companyName: row.companyName,
                    //     //     email: row.email,
                    //     //     addedBy: row.addedBy,
                    //     //     savedAt: row.savedAt,
                    //     //     action: row.action
                    //      }))
                    // }
                    slots={{
                      toolbar: GridToolbar,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="client_Payments">
            <div className="row">
              <div className="col">
                <button type='button' className='btn btn-white mb-2' data-bs-toggle="offcanvas" data-bs-target="#AddPayment" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Payment</button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card" style={{ minHeight: '520px' }}>
                  <DataGrid
                    columns={[
                      { field: 'id', headerName: 'id', hideable: false, width: 100 },
                      { field: 'code', headerName: 'Code', hideable: false, width: 155 },
                      {
                        field: 'project', headerName: 'Project', hideable: false, width: 155
                      },
                      {
                        field: 'invoice', headerName: 'Invoice', hideable: false, width: 155
                      },
                      {
                        field: 'client', headerName: 'Client', hideable: false, width: 155
                      },
                      {
                        field: 'order', headerName: 'Order', hideable: false, width: 155
                      },
                      {
                        field: 'amount', headerName: 'Amount', hideable: false, width: 155
                      },
                      {
                        field: 'paidOn', headerName: 'Paid On', hideable: false, width: 155
                      },
                      {
                        field: 'paymentGateway', headerName: 'Payment Gateway', hideable: false, width: 155
                      },
                      {
                        field: 'status', headerName: 'Status', hideable: false, width: 155
                      },
                      {
                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                          <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                            </ul>
                          </div>
                        )
                      },
                    ]}
                    // rows={rows
                    //          rows.map(row => ({
                    //             id: row.id,
                    //     //     name: row.name,
                    //     //     companyName: row.companyName,
                    //     //     email: row.email,
                    //     //     addedBy: row.addedBy,
                    //     //     savedAt: row.savedAt,
                    //     //     action: row.action
                    //      }))
                    // }
                    slots={{
                      toolbar: GridToolbar,
                    }}
                    checkboxSelection
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="client_Contacts">
            <div className="row">
              <div className="col">
                <button type='button' className='btn btn-white mb-2' data-bs-toggle="offcanvas" data-bs-target="#AddContacts" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add Contacts</button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card" style={{ minHeight: '520px' }}>
                  <DataGrid
                    columns={[
                      // { field: 'id', headerName: 'id', hideable: false, width: 100 },
                      { field: 'title', headerName: 'Title', hideable: false, width: 155 },
                      {
                        field: 'name', headerName: 'Name', hideable: false, width: 155
                      },
                      {
                        field: 'email', headerName: 'Email', hideable: false, width: 155
                      },
                      {
                        field: 'phone', headerName: 'Phone', hideable: false, width: 155
                      },
                      {
                        field: 'created', headerName: 'created', hideable: false, width: 155
                      },
                      {
                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                          <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                            </ul>
                          </div>
                        )
                      },
                    ]}
                    // rows={rows
                    //          rows.map(row => ({
                    //             id: row.id,
                    //     //     name: row.name,
                    //     //     companyName: row.companyName,
                    //     //     email: row.email,
                    //     //     addedBy: row.addedBy,
                    //     //     savedAt: row.savedAt,
                    //     //     action: row.action
                    //      }))
                    // }
                    slots={{
                      toolbar: GridToolbar,
                    }}
                    checkboxSelection
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="client_Documents">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="row">
                    <div className="col p-3">
                      <h3>Documents</h3>
                      <p style={{ color: 'blue', cursor: 'pointer' }} onClick={visibility}><i className='fa fa-plus'></i> Add File</p>
                      {
                        visible ?
                          <div className="row">
                            <div className="col">
                              <form action="">
                                <div className="row mb-2">
                                  <div className="col">
                                    <label htmlFor="">File Name</label>
                                    <input type="text" name="" id="" className='form-control' />
                                  </div>
                                </div>
                                <div className="row mb-2">
                                  <div className="col">
                                    <label htmlFor="">Upload File</label>
                                    <input type="file" name="" id="" className='form-control' />
                                  </div>
                                </div>
                                <div className="row mb-2">
                                  <div className="col text-end">
                                    <button type="button" className='btn btn-white'>Cancel</button>&nbsp;
                                    <button type="submit" className='btn btn-white'>Submit</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div> : ''
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="client_Notes">
            <div className="row">
              <div className="col">
                <button type='button' className='btn btn-white mb-2' data-bs-toggle="offcanvas" data-bs-target="#AddNote" aria-controls="offcanvasRight"><i className='fa fa-plus'></i>Add Note</button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card" style={{ minHeight: '520px' }}>
                  <DataGrid
                    columns={[
                      // { field: 'id', headerName: 'id', hideable: false, width: 100 },
                      { field: 'code', headerName: 'Code', hideable: false, width: 155 },
                      {
                        field: 'noteTitle', headerName: 'note Title', hideable: false, width: 155
                      },
                      {
                        field: 'noteType', headerName: 'Note Type', hideable: false, width: 155
                      },
                      {
                        field: 'created', headerName: 'Created', hideable: false, width: 155
                      },
                      {
                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                          <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                            </ul>
                          </div>
                        )
                      },
                    ]}
                    // rows={rows
                    //          rows.map(row => ({
                    //             id: row.id,
                    //     //     name: row.name,
                    //     //     companyName: row.companyName,
                    //     //     email: row.email,
                    //     //     addedBy: row.addedBy,
                    //     //     savedAt: row.savedAt,
                    //     //     action: row.action
                    //      }))
                    // }
                    slots={{
                      toolbar: GridToolbar,
                    }}
                    checkboxSelection
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="client_Tickets">
            <div className="row">
              <div className="col">
                <Link to="" className="btn btn-white" data-bs-toggle="offcanvas" data-bs-target="#AddTicket" aria-controls="offcanvasRight"><i className="fa fa-plus"></i> Create Ticket</Link> &nbsp;
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="card" style={{ minHeight: '520px' }}>
                  <DataGrid
                    columns={[
                      { field: 'ticket', headerName: 'Ticket', hideable: false, width: 185 },
                      { field: 'ticketSubject', headerName: 'Ticket Subject', hideable: true, width: 170 },
                      { field: 'requesterName', headerName: 'Requester Name', hideable: true, width: 175 },
                      { field: 'requestedOn', headerName: 'Requested On', hideable: true, width: 155 },
                      { field: 'others', headerName: 'Others', hideable: true, width: 155 },
                      {
                        field: 'status', headerName: 'Status', hideable: true, width: 155, renderCell: (params) => (
                          <div>
                            <select name="" id="" className="form-select">
                              <option value="">Open</option>
                              <option value="">Resolved</option>
                              <option value="">Pending</option>
                              <option value="">Closed</option>
                            </select>
                          </div>
                        )
                      },
                      {
                        field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                          <div>
                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true" />
                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                              <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                            </ul>
                          </div>
                        )
                      },
                    ]}
                    rows={''}
                    components={{
                      Toolbar: GridToolbar,
                    }}
                    checkboxSelection
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="client_Orders">
            <div className="row mb-3">
              <div className="col">
                <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#AddOrder" aria-controls="offcanvasRight"><i className='fa fa-plus'></i> Add New Orders</button> &nbsp;
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card" style={{ minHeight: '520px' }}>
                  <DataGrid
                    columns={[
                      { field: 'orderNumber', headerName: 'Order Number', hideable: false, width: 185 },
                      { field: 'client', headerName: 'Client', hideable: false, width: 155 },
                      { field: 'total', headerName: 'Total', hideable: false, width: 155 },
                      { field: 'orderDate', headerName: 'Order Date', hideable: false, width: 155 },
                      { field: 'status', headerName: 'Status', hideable: false, width: 155 },
                      {
                        field: 'action', headerName: 'Action', width: 180, renderCell: (params) => (
                          <div>
                            <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                              <li><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                              <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                            </ul>
                          </div>
                        )
                      },
                    ]}
                    rows={''}
                    components={{
                      Toolbar: GridToolbar,
                    }}
                    checkboxSelection
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="AddTicket" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
        <div className="offcanvas-header">
          <h2 id="offcanvasRightLabel" className='text-bold'><b>Create Ticket</b></h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="card">
            <AdminCreateTicketForm />
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="AddProject" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
        <div className="offcanvas-header">
          <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Project</b></h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="card">
            <AdminAddProjectForm />
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="AddNote" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
        <div className="offcanvas-header">
          <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Note</b></h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="card">
            {/*  */}
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="AddContacts" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
        <div className="offcanvas-header">
          <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Contacts</b></h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="card">
            {/*  */}
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="AddPayment" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
        <div className="offcanvas-header">
          <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Payments</b></h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="card">
            {/*  */}
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="CreateInvoice" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
        <div className="offcanvas-header">
          <h2 id="offcanvasRightLabel" className='text-bold'><b>Create Invoice</b></h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="card">
            {/*  */}
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="AddEstimate" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
        <div className="offcanvas-header">
          <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Estimate</b></h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="card">
            {/*  */}
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="AddOrder" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
        <div className="offcanvas-header">
          <h2 id="offcanvasRightLabel" className='text-bold'><b>Add Order</b></h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="card">
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminClientSectionProfile;
