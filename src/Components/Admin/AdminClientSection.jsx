import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupsIcon from '@mui/icons-material/Groups';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckIcon from '@mui/icons-material/Check';
import EditNoteIcon from '@mui/icons-material/EditNote';
import axios from 'axios';
function AdminClientSection() {
    const [getLeadData, setLeadData] = useState(0)
    const [data, setData] = useState(0);
    const [clientData, setClientData] = useState(0);

    async function apiData() {
        try {
            const response = await axios.get("http://localhost:8080/deal-count");
            setData(response.data);
            const clientResponse = await axios.get("http://localhost:8080/client-count"); // Assuming a different endpoint
            setClientData(clientResponse.data);
            const LeadResponse =await axios.get("http://localhost:8080/lead-count")
            setLeadData(LeadResponse.data);
        } catch (error) {
            console.log("Data fetching failed", error);
        }
    }

    useEffect(() => {
       apiData();
    }, []);
  return (
    <>
           <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Client Dashboard</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Client Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    <div className="card">
                        <div className="row">
                            <div className="col">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <div className="container-fluid">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <MoreVertIcon />
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <Link className="nav-link" aria-current="page" to="/admin">Overview</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/Lead-tab">Lead</Link>
                                                </li>
                                                <li className="nav-item" style={{borderBottom:'2px solid orange'}}>
                                                    <Link className="nav-link active" to="/admin/client-tab">Client</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/hr-tab">HR</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/ticket-tab">Ticket</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/finance-tab">Finance</Link>
                                                </li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Total Clients</b></h4>
                                            <h4><b>{clientData}</b></h4>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <GroupsIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Total Leads</b></h4>
                                            <h4><b>{getLeadData}</b></h4>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <GroupsIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row fs-6">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Total Deals</b></h4>
                                            <h4><b>{data}</b></h4>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <DescriptionIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Deal Conversions</b></h4>
                                            <p>58 Hrs</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <CheckIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Contracts Generated</b></h4>
                                            <p>37</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <DescriptionIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-sm-8 p-3">
                                            <h4 className='text-dark'><b>Contracts Signed</b></h4>
                                            <p>0/0</p>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <EditNoteIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Client Wise Earnings</b></h4>
                                <div className='row text-center d-flex align-items-center justify-content-center' style={{ color: 'gray', fontSize: '15px', height: '100%' }}>
                                    <div className="col">
                                    <i className='fa fa-list'></i>
                                    <p>- No record found. -</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Client Wise Timelogs</b></h4>
                                <div className='row text-center d-flex align-items-center justify-content-center' style={{ color: 'gray', fontSize: '15px', height: '100%' }}>
                                    <div className="col">
                                    <i className='fa fa-list'></i>
                                    <p>- No record found. -</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Deal Count By Stages And Pipeline</b></h4>
                                <div className='row text-center d-flex align-items-center justify-content-center' style={{ color: 'gray', fontSize: '15px', height: '100%' }}>
                                    <div className="col">
                                    <i className='fa fa-list'></i>
                                    <p>- No record found. -</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Leads Count By Source</b></h4>
                                <div className='row text-center d-flex align-items-center justify-content-center' style={{ color: 'gray', fontSize: '15px', height: '100%' }}>
                                    <div className="col">
                                    <i className='fa fa-list'></i>
                                    <p>- No record found. -</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Latest Clients</b></h4>
                                <div className="row">
                                <div className="col-sm-12 p-2">
                                       <div className="card">
                                       <table className='table table-hover table-stgripped text-center' style={{fontSize:'smaller'}}>
                                            <thead>
                                                <tr>
                                                    <th>Client</th>
                                                    <th>Email</th>
                                                    <th>Created</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
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
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Recent Login Activities</b></h4>
                                <div className="row">
                                    <div className="col-sm-12 p-2">
                                      <div className="card">
                                      <table className='table table-hover table-stgripped text-center' style={{fontSize:'smaller'}}>
                                            <thead>
                                                <tr>
                                                    <th>Client</th>
                                                    <th>Email</th>
                                                    <th>Last login at</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
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
                    </div>

                </div>
           
            </div>
        </>
  )
}

export default AdminClientSection