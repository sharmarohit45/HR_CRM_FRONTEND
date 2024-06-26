import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const AdminEmployeeSalerySection = () => {
  return (
    <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Employee Salery</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Employee Salery</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card" style={{ minHeight: '520px'}}>
                                <DataGrid
                                    columns={[
                                        // { field: 'designationId', headerName: 'ID', width: 100 },
                                        { field: 'name', headerName: 'Name', width: 190 },
                                        { field: 'employeeSaleryCycle', headerName: 'Employee Salery Cycle', width: 250 },
                                        { field: 'saleryGroup', headerName: 'Salery Group', width: 190 },
                                        { field: 'allowPayrollGenerate', headerName: 'Allow Payroll Generate', width: 250 },
                                        { field: 'netSalery', headerName: 'Net Salery (Monthly)', width: 190 },
                                        {
                                            field: 'action', headerName: 'Action', width: 140, renderCell: (params) => (
                                                <div>
                                                    <MoreVertIcon className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li data-bs-toggle="modal" data-bs-target="#viewModal"><a className="dropdown-item" ><i className="fa fa-eye"></i> View</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-pen"></i> Edit</a></li>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-trash" aria-hidden="true"></i> Delete</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    // rows={designations.map(designation => ({
                                    //     id: designation.designationId,
                                    //     name: designation.name,
                                    //     parent: designation.parent,
                                    //     action: '', // You can customize action buttons here if needed
                                    // }))}
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

export default AdminEmployeeSalerySection