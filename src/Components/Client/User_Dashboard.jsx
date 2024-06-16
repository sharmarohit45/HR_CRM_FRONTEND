import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Chart from "react-apexcharts";

function User_Dashboard() {
    const [subject, setSubject] = useState([

    ]);
    const [Percentage, setPercentage] = useState([
    ]);


    useEffect(() => {
        const sSubject = [];
        const sMarks = [];
        const getStudentdata = async () => {
            const resData = [

                { "id": 1, "subject": "in Progress", "percentage": 100 },
                { "id": 2, "subject": "not Started", "percentage": 0 },
                { "id": 3, "subject": "on hold", "percentage": 0 },
                { "id": 3, "subject": "cancelled", "percentage": 0 },
                { "id": 3, "subject": "finished", "percentage": 0 }
            ]
            
            for (let i = 0; i < resData.length; i++) {
                sSubject.push(resData[i].subject);
                sMarks.push(parseInt(resData[i].percentage));
            }
            setSubject(sSubject);
            setPercentage(sMarks);
            //console.log(resData); 
        }

        getStudentdata();

    }, []);

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h4>Dashboard</h4>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-4">
                            <div className="card">
                                <div className="row p-2">
                                    <div className='col-10'>
                                        <h4><b>Total Projects</b></h4>
                                        <p>2</p>
                                    </div>
                                    <div className="col-2">
                                        <i className="fas fa-layer-group" style={{ fontSize: '25px', paddingTop: '10px',color:'gray'}}></i>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="row p-2">
                                    <div className='col-10'>
                                        <h4><b>Unresolved Tickets</b></h4>
                                        <p>0</p>
                                    </div>
                                    <div className="col-2">
                                        <i className="fas fa-ticket-alt" style={{ fontSize: '25px', paddingTop: '10px',color:'gray' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="row p-2">
                                    <div className='col-10'>
                                        <h4><b>Contract Signed</b></h4>
                                        <p>0</p>
                                    </div>
                                    <div className="col-2">
                                        <i className="fas fa-file-signature" style={{ fontSize: '25px', paddingTop: '10px',color:'gray' }}></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-sm-10">
                                        <h4><b>Invoices</b></h4>
                                        <div className="row">
                                            <div className="col-6">
                                                <h6><b>1</b></h6>
                                                <p>Paid Invoices</p>
                                            </div>
                                            <div className="col-6">
                                                <h6><b>2</b></h6>
                                                <p>Due Invoices</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <i className="fas fa-file-alt" style={{ fontSize: '25px', paddingTop: '10px',color:'gray' }}></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-8">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="card p-5" style={{ height: '500px' }}>
                            <h4><b>Status wise Project</b></h4>
                                <div className="row p-5">
                                <Chart
                                    type="pie"
                                    series={Percentage}
                                    options={{
                                        noData: { text: "Empty Data" },
                                        labels: subject

                                    }}
                                />
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User_Dashboard