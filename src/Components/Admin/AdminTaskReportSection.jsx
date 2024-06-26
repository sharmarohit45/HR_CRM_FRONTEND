import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Chart from "react-apexcharts";
const AdminTaskReportSection = () => {
    const [subject, setSubject] = useState([

    ]);
    const [Percentage, setPercentage] = useState([
    ]);


    useEffect(() => {
        const sSubject = [];
        const sMarks = [];
        const getStudentdata = async () => {
            const resData = [

                { "id": 1, "subject": "in Progress", "percentage": 29 },
                { "id": 2, "subject": "not Started", "percentage":31 },
                { "id": 3, "subject": "on hold", "percentage": 15 },
                { "id": 4, "subject": "cancelled", "percentage": 25 },
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
                <div className="content container-fluid pb-0">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Task Report</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Task Report</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col" >
                            <div className="card" >
                                <div className="row">
                                    <div className="col" style={{ height: '250px',fontSize:'smaller' }}>
                                    <Chart  
                                    type="pie"
                                    series={Percentage}
                                    options={{
                                        noData: { text: "Empty Data" },
                                        labels: subject
                                    }}
                                    height="100%"
                                    width="100%"
                                />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-sm-12">
                            <div className="card text-dark" style={{ minHeight: '590px' }}>
                                <DataGrid
                                    columns={[
                                        // { field: 'id', headerName: 'Id', hideable: false, width: 150 },
                                        { field: 'code', headerName: 'Code', hideable: true, width: 250 },
                                        { field: 'task', headerName: 'Task', hideable: true, width: 230 },
                                        { field: 'project', headerName: 'Project', hideable: true, width: 230 },
                                        { field: 'dueDate', headerName: 'Due Date', hideable: true, width: 230 },
                                        { field: 'assignedTo', headerName: 'Assigned To', hideable: true, width: 130 },
                                        { field: 'status', headerName: 'Status', hideable: true, width: 130 },
                                    ]}
                                    // rows={rows}
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminTaskReportSection