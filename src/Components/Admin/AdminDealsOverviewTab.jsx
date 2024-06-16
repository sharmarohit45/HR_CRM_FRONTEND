import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const AdminDealsOverviewTab = () => {
    const location = useLocation();
    const id = location.state ? location.state.id : null;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the async function to fetch data
        const fetchData = async (id) => {
            try {
                const response = await axios.get(`http://localhost:8080/deals/${id}`);
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData(id);
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    console.log(id)
    return (
        <>
            <div className="row">
                <div className="col-sm-9">
                    <div className="card text-start">
                        <div className="row">
                            <div className="col p-4">
                                <h4><b>Deal Info</b></h4>
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col">
                                <p>Deal Name</p>
                                <p>Lead Contact</p>
                                <p>Email</p>
                                <p>Company Name</p>
                                <p>Deal Agent</p>
                                <p>Deal Watcher</p>
                                <p>Close Date</p>
                                <p>Deal Value</p>
                                <p>Products</p>
                            </div>
                            <div className="col">
                                <p>{data.dealName}</p>
                                <p>{data.leadContacts}</p>
                                <p>--</p>
                                <p>--</p>
                                <p>--</p>
                                <p>{data.dealWatcher}</p>
                                <p>{data.closeDate}</p>
                                <p>{data.dealValue}</p>
                                <p>{data.products}</p>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card p-3">
                        <h4><b>Lead Contact Detail</b></h4>
                        <div className="row">
                            <div className="col">
                                <p>Lead</p>
                                <p>Contact</p>
                                <p>Email</p>
                                <p>Mobile</p>
                                <p>Company Name</p>
                            </div>
                            <div className="col">
                                <p>--</p>
                                <p>--</p>
                                <p>--</p>
                                <p>--</p>
                                <p>--</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a href="mailto:"><button className='btn btn-white'><i className="fa fa-envelope"></i> Email</button></a> &nbsp;
                                <a href="tel:"><button className='btn btn-white'><i className="fa fa-phone"></i> Mobile</button></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminDealsOverviewTab