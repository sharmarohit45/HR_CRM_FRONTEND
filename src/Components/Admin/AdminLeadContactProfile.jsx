import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import AdminLeadContactProfileTab from './AdminLeadContactProfileTab';
import AdminLeadContactDealsTab from './AdminLeadContactDealsTab';

const AdminLeadContactProfile = () => {
    const [data, setData] = useState(null);
    const location = useLocation();
    const id = location.state ? location.state.id : null;

    useEffect(() => {
        if (id) {
            console.log("Fetching data for id:", id);
            profileOnchange(id);
        }
    }, [id]);

    async function profileOnchange(id) {
        try {
            const response = await axios.get(`http://localhost:8080/lead/${id}`);
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>{data.name}</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Dashboard</li>
                                        <li className="breadcrumb-item">Lead Contact</li>
                                        <li className="breadcrumb-item active" aria-current="page">{data.name}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card tab-box">
                            <div className="row user-tabs">
                                <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                    <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                                        <li className="nav-item"><a href="#profile" data-bs-toggle="tab" className="nav-link active">Profile</a></li>
                                        <li className="nav-item"><a href="#deals" data-bs-toggle="tab" className="nav-link">Deals</a></li>
                                        <li className="nav-item"><a href="#notes" data-bs-toggle="tab" className="nav-link">Notes</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="profile" className="pro-overview tab-pane fade show active">
                                <AdminLeadContactProfileTab data={data} />
                            </div>
                            <div className="tab-pane fade" id="deals">
                                <div className="row">
                                    <AdminLeadContactDealsTab  data={data}/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="notes">
                                <div className="row">
                                    <div className="col">
                                        <button className='btn btn-white'> <i className='fa fa-plus'></i> Add Note</button>
                                    </div>

                                </div>
                                <div className="row mt-1">
                                    <div className="col">
                                        <div className="card">

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

export default AdminLeadContactProfile