import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios'; // Import axios for making HTTP requests

const EmployeeAppreciationSection = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        // Function to fetch data from the backend
        const fetchData = async () => {
            try {
                // Make a GET request to fetch employee appreciation data
                const response = await axios.get('http://localhost:8080/employee-appreciation');

                // Check if the response is successful
                if (response.status === 200) {
                    // Set the rows state with the fetched data
                    setRows(response.data);
                }
            } catch (error) {
                console.error('Error fetching employee appreciation data:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    {/* Page Header */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Appreciation</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Appreciation</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* Lead Contacts DataGrid */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <DataGrid
                                    columns={[
                                        // { field: 'id', headerName: 'ID', width: 100 },
                                        { field: 'givenTo', headerName: 'Given To', width: 370 },
                                        { field: 'awardName', headerName: 'Award Name', width: 290 },
                                        { field: 'givenOn', headerName: 'Given On', width: 240 },
                                        {
                                            field: 'action',
                                            headerName: 'Action',
                                            width: 100,
                                            renderCell: () => <MoreVertIcon className='f-s' />
                                        },
                                    ]}
                                    rows={rows}
                                    slots={{ toolbar: GridToolbar }}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployeeAppreciationSection;