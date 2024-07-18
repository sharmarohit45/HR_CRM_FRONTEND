import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AdminCompanySettings = () => {
    const [row, setRows] = useState([])
    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyPhone, setCompanyPhone] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [companyLogo, setCompanyLogo] = useState(null);
    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/company");
            setRows(response.data);
        }
        catch (error) {
            console.log("data fetching failed")
        }
    }
    useEffect(() => {
        getData();
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('companyName', companyName);
        formData.append('companyEmail', companyEmail);
        formData.append('companyPhone', companyPhone);
        formData.append('companyWebsite', companyWebsite);
        formData.append('companyLogo', companyLogo);

         try {
            //  const response = await Axios.put(`http://localhost:8080/company/${companyId}`, formData, {
             const response = await Axios.post(`http://localhost:8080/company`, formData, {
                 headers: {
                     'Content-Type': 'multipart/form-data',
                 },
             });
             toast.success("Data Saved Successfully");
         } catch (error) {
            toast.error("Failed");
         }
        console.log("FORM DATA", formData);
    };

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col p-3">
                                    <h3 className='pt-3'><b>Company Settings</b></h3>
                                    <hr />
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col">
                                    <label htmlFor="companyName">Company Name </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        className="form-control"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="companyEmail">Company Email</label>
                                    <input
                                        type="email"
                                        id="companyEmail"
                                        className="form-control"
                                        value={companyEmail}
                                        onChange={(e) => setCompanyEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row p-3 mt-2">
                                <div className="col">
                                    <label htmlFor="companyPhone">Company Phone</label>
                                    <input
                                        type="text"
                                        id="companyPhone"
                                        className="form-control"
                                        value={companyPhone}
                                        onChange={(e) => setCompanyPhone(e.target.value)}
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="companyWebsite">Company Website</label>
                                    <input
                                        type="text"
                                        id="companyWebsite"
                                        className="form-control"
                                        value={companyWebsite}
                                        onChange={(e) => setCompanyWebsite(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row p-3 mt-3 mb-3">
                                <div className="col">
                                    <label htmlFor="companyLogo">Company Logo</label>
                                    <input
                                        type="file"
                                        id="companyLogo"
                                        className="form-control"
                                        onChange={(e) => setCompanyLogo(e.target.files[0])}
                                    />
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col">

                                    <button type="submit" className="btn btn-white">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <table className='table table-bordered overflow-x-scroll' style={{ fontSize: 'smaller' }}>
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Company Email</th>
                                    <th>Company Contact</th>
                                    <th>Company Website</th>
                                    <th>Company Logo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {row.map((rows) => (
                                    <tr key={rows.companyId}>
                                        <td>{rows.companyName}</td>
                                        <td>{rows.companyEmail}</td>
                                        <td>{rows.companyPhone}</td>
                                        <td>{rows.companyWebsite}</td>
                                        <td><img src={`data:image/jpeg;base64,${rows.fileData}`} style={{ borderRadius: '15px', height: '40px', width: '40px' }} alt="Company Logo" /></td>
                                        <td>
                                            <div class="dropdown text-center">
                                            <i class="fa fa-ellipsis-v" type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#"><i className='fa fa-eye'></i> View</a></li>
                                                    <li><Link to='edit-company' companyId={rows.companyId}><a class="dropdown-item" href="#"><i className='fa fa-edit'></i> Edit</a></Link></li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div> */}
            <ToastContainer />
        </>
    );
};

export default AdminCompanySettings;
