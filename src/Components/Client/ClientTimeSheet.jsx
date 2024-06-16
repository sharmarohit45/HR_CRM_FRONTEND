import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
function ClientTimeSheet() {
  const dummyData = {
    columns: [
      { field: 'id', headerName: 'id', width: 70 },
      { field: 'Code', headerName: 'Code', width: 155 },
      { field: 'Task', headerName: 'Task', width: 155 },
      { field: 'Employee', headerName: 'Employee', width: 155 },
      { field: 'StartTime', headerName: 'Start Timee', width: 150 },
      { field: 'EndTime', headerName: 'End Time', width: 155 },
      { field: 'TotalHours', headerName: 'Total Hours', width: 155 },
      { field: 'Action', headerName: 'Action', width: 155 },
    ],
    rows: [
      { id: 1, Code: 'OMFSNP', Task: 'Opinion mining for social networking platforms', Employee: 'JHON', StartTime: '06-02-2024 08:22 pm', EndTime: '07-02-2024 01:22 am',TotalHours:'5h' ,Action: '' },
      { id: 2, Code: 'SEO', Task: 'Search engine optimization (SEO) service', Employee: 'RAJU', StartTime: '08-01-2024 12:59 am', EndTime: '08-01-2024 04:59 am',TotalHours:'4h' ,Action: '' },
      // Add more rows as needed
    ],
  };

  // Define visible fields
  const VISIBLE_FIELDS = ['id', 'Code', 'Task', 'Employee', 'StartTime', 'EndTime','TotalHours', 'Action'];

  // Filter columns based on visible fields
  const columns = React.useMemo(
    () => dummyData.columns.filter(column => VISIBLE_FIELDS.includes(column.field)),
    [dummyData.columns]
  );

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* <!-- Page Header --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="page-head-box">
                <h3>Timesheet</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active" aria-current="page">Timesheet</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}
          <div className="row">
            <div className="row d-flex justify-content-end">
              <div className="col-2">
                <div className="row">
                  <div className="btn-group">
                    <Link to="/client/TimeSheet" className=" btn btn-white active text-white" aria-current="page"><ListIcon /></Link>
                    <Link to="/client/timelog-calendar" className=" btn btn-white"><CalendarTodayIcon /></Link>
                    <Link to="/client/timelog-byemployee" className=" btn btn-white" aria-current="page"><PersonIcon /></Link>
                    <Link to="/client/" className=" btn btn-white"><HelpOutlineRoundedIcon /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Box className="bg-white p-4">
                <DataGrid style={{fontSize:'smaller'}}
                  rows={dummyData.rows}
                  disableColumnFilter
                  disableColumnSelector
                  disableDensitySelector
                  columns={columns}
                  slots={{ toolbar: GridToolbar }}
                  slotProps={{
                    toolbar: {
                      showQuickFilter: true,
                    },
                  }}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientTimeSheet