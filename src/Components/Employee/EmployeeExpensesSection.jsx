import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
const EmployeeExpensesSection = () => {
  return (
    <>
    <div className="page-wrapper">
        <div className="content container-fluid pb-0">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-head-box">
                        <h3>Expenses</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Expenses</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row">
                        <div className="col-sm-12">
                            <div className="card" style={{ minHeight: '520px' }}>
                                <DataGrid
                                    columns={[
                                        { field: 'id', headerName: 'id', hideable: false, width: 100 },
                                        { field: 'itemName', headerName: 'Item Name', hideable: false, width: 155 },
                                        {
                                            field: 'price', headerName: 'Price', hideable: false, width: 155
                                        },
                                        {
                                            field: 'employee', headerName: 'Employee', hideable: false, width: 155
                                        },
                                        {
                                            field: 'purchaseFrom', headerName: 'Purchase From', hideable: false, width: 155
                                        },
                                        {
                                            field: 'purchaseDate', headerName: 'Purchase Date', hideable: false, width: 155
                                        },
                                        {
                                            field: 'status', headerName: 'Status', hideable: false, width: 155
                                        },
                                        {
                                            field: 'action', headerName: 'Action', width: 100, renderCell: (params) => (
                                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                    <MoreVertIcon style={{ fontSize: '15px' }} className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />
                                                    <ul className="dropdown-menu btn" aria-labelledby="dropdownMenuLink" style={{ fontSize: 'smaller' }}>
                                                        <li><a className="dropdown-item" href="#"><i className="fa fa-eye"></i> View</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        },
                                    ]}
                                    // rows={rows
                                    //          rows.map(row => ({
                                    //             id: row.id,
                                    //     //     name: row.name,
                                    //     //     companyName: row.companyName,
                                    //     //     email: row.email,
                                    //     //     addedBy: row.addedBy,
                                    //     //     savedAt: row.savedAt,
                                    //     //     action: row.action
                                    //      }))
                                    // }
                                    slots={{
                                        toolbar: GridToolbar,
                                    }}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
        </div>
    </div>
    </>
  )
}

export default EmployeeExpensesSection