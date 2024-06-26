import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LayersIcon from '@mui/icons-material/Layers';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import axios from 'axios';
function AdminProjectTab() {
    const [getProjectData, setProjectData] = useState(0)
    async function projectdata() {
        try {
            const response = await axios.get("http://localhost:8080/project-count")
            setProjectData(response.data);
        } catch (error) {
            console.log("Data fetching failed", error)
        }

    }
    useEffect(() => {
        projectdata();
    }, [])
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Project Dashboard</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Project Dashboard</li>
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
                                                <li className="nav-item" style={{ borderBottom: '2px solid orange' }}>
                                                    <Link className="nav-link  active" to="/admin/project-tab">Project</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/admin/client-tab">Client</Link>
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
                                            <h4 className='text-dark'><b>Total Projects</b></h4>
                                            <h4><b>{getProjectData}</b></h4>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <LayersIcon style={{ fontSize: '35px', color: 'gray' }} />
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
                                            <h4 className='text-dark'><b>Overdue Projects</b></h4>
                                            <h4><b>0</b></h4>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <LayersIcon style={{ fontSize: '35px', color: 'gray' }} />
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
                                            <h4 className='text-dark'><b>Hours logged</b></h4>
                                            <h4><b>0</b></h4>
                                        </div>
                                        <div className="col-sm-4 pt-4 text-center">
                                            <WatchLaterIcon style={{ fontSize: '35px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <div className="card" style={{ height: '500px', padding: '15px' }}>
                                <h4><b>Status Wise Projects</b></h4>
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
                                <h4><b>Pending Milestone</b></h4>
                                {/* <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            {/* <table className='table table-hover table-stripped text-center' style={{fontSize:'smaller'}}>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Milestone Title</th>
                                                <th>Milestone Cost</th>
                                                <th>Project</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>XYZ</td>
                                                <td>$12,33,3</td>
                                                <td>SEO</td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                            <div className='row text-center d-flex align-items-center justify-content-center' style={{ color: 'gray', fontSize: '15px', height: '100%' }}>
                                                <div className="col">
                                                    <i className='fa fa-list'></i>
                                                    <p>- No record found. -</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className='row text-center d-flex align-items-center justify-content-center' style={{ color: 'gray', fontSize: '15px', height: '100%' }}>
                                    <div className="col">
                                    <i className='fa fa-list'></i>
                                    <p>- No record found. -</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- /Page Content --> */}
            </div>
        </>
    )
}

export default AdminProjectTab