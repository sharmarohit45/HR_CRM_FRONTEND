import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import AdminAddAppereciation from './AdminAddAppereciation';
import axios from 'axios';
import UpdateAppericiationForm from './UpdateAppericiationForm';
import { toast, ToastContainer } from 'react-toastify';

const AdminAppreciationSection = () => {
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    async function getData() {
        try {
            const response = await axios.get("http://localhost:8080/appericiation");
            setData(response.data);
        } catch (error) {
            console.log("Data fetching failed", error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const handleEditClick = (id) => {
        setSelectedId(id);
    };

    const handleDeleteClick = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/appericiation/${id}`);
            setData(data.filter(item => item.id !== id));
            toast.success("Data deleted successfully");
        } catch (error) {
            console.log('Error deleting data', error);
            toast.error("Failed to delete data");
        }
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Appreciation</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/admin">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Appreciation</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <button className='btn btn-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className='fa fa-plus'></i> Add Appreciation
                            </button>
                        </div>
                        <div className="col text-end">
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn-dark"><i className="fa fa-trophy"></i></button>
                                <button type="button" className="btn btn-white">
                                    <Link to='/admin/appreciation-award'><i className="fa fa-award"></i></Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card" style={{ minHeight: '520px' }}>
                                <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'ID', hideable: false, width: 100 },
                                        {
                                            field: 'givenTo', headerName: 'Given To', hideable: false, width: 300, renderCell: (params) => (
                                                <>
                                                    <img src={`data:image/png;base64,${params.row.imageData}`} alt={params.value} style={{ height: '30px', width: '30px', marginRight: '10px', borderRadius: '50%' }} />
                                                    &nbsp;&nbsp;{params.row.givenTo}
                                                </>
                                            )
                                        },
                                        {
                                            field: 'awardName',
                                            headerName: 'Award Name',
                                            hideable: false,
                                            width: 300,
                                            renderCell: (params) => (
                                                <div>
                                                    <i
                                                        style={{ backgroundColor: params.row.colorCode, fontSize: '18px', padding: '10px', borderRadius: '20%' }}
                                                        className={params.row.icon}
                                                    ></i>
                                                    &nbsp;&nbsp;{params.row.awardName}
                                                </div>
                                            ),
                                        },
                                        {
                                            field: 'givenOn', headerName: 'Given On', hideable: false, width: 300
                                        },
                                        {
                                            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                                                            <a className="dropdown-item"><i className="fa fa-eye"></i> View</a>
                                                        </li>
                                                        <li onClick={() => handleEditClick(params.row.id)} data-bs-toggle="offcanvas" data-bs-target="#update" aria-controls="update">
                                                            <a className="dropdown-item"><i className="fa fa-pen"></i> Edit</a>
                                                        </li>
                                                        <li onClick={() => handleDeleteClick(params.row.id)}>
                                                            <a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    rows={data.map(row => ({
                                        id: row.id,
                                        givenTo: row.employee.empName,
                                        imageData: row.employee.imageData,
                                        awardName: row.awardList.title,
                                        icon: row.awardList.icon,
                                        colorCode: row.awardList.colorCode,
                                        givenOn: row.givenDate,
                                    }))}
                                    components={{
                                        Toolbar: GridToolbar,
                                    }}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '85%' }}>
                        <div className="offcanvas-header">
                            <h2 id="offcanvasRightLabel" className='text-bold'><b>Appreciation Award</b></h2>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <AdminAddAppereciation />
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ width: '50%' }}>
                        <div className="offcanvas-header">
                            <h3 className="offcanvas-title" id="offcanvasBottomLabel"><b>Appreciation Details</b></h3>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            {/* Add content for Appreciation Details */}
                        </div>
                    </div>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="update" aria-labelledby="updateLabel" style={{ width: '50%' }}>
                        <div className="offcanvas-header">
                            <h3 className="offcanvas-title" id="updateLabel"><b>Update Appreciation Details</b></h3>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <UpdateAppericiationForm id={selectedId} />
                        </div>
                       
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default AdminAppreciationSection;
