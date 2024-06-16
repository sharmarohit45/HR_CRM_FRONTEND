import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
function ClientProjectRoadmap() {
  const dummyData = {
    columns: [
      { field: 'id', headerName: 'id', width: 70 },
      { field: 'Code', headerName: 'Code', width: 155 },
      { field: 'Projectname', headerName: 'Project Name', width: 155 },
      { field: 'Members', headerName: 'Members', width: 155 },
      { field: 'Startdate', headerName: 'Start date', width: 155 },
      { field: 'Deadline', headerName: 'Deadline', width: 155 },
      { field: 'Progress', headerName: 'Progress', width: 155 },
      { field: 'Status', headerName: 'Status', width: 155 },
      { field: 'Action', headerName: 'Action', width: 155 },
    ],
    rows: [
      { id: 1, Code: 'SEO', Projectname: 'Search engine optimization (SEO) service', Members: 'JHON,SMITH', Startdate: '2023-05-10', Deadline: '15-12-2023',Progress: '82%',Status: 'in progress', Action: '' },
      { id: 2, Code: 'OMFSNP', Projectname: 'Opinion mining for social networking platforms', Members: 'SMITH,JHON', Startdate: '2023-06-15', Deadline: '15-11-2023',Progress: '90%',Status: 'in progress', Action: '' },
      // Add more rows as needed
    ],
  };

  // Define visible fields
  const VISIBLE_FIELDS = ['id', 'Code', 'Projectname', 'Members', 'Startdate', 'Deadline','Progress','Status', 'Action'];

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
                <h3>Project Roadmap</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Dashboard</li>
                    <li className="breadcrumb-item active" aria-current="page">Project Roadmap</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- /Page Header --> */}
          <div className="row">
            <div className="col-md-12">
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

export default ClientProjectRoadmap