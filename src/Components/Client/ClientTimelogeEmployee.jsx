import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
function ClientTimelogeEmployee() {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>TimeSheet</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Dashboard</li>
                                        <li className="breadcrumb-item active" aria-current="page">TimeSheet </li>
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
                                        <Link to="/client/TimeSheet" className=" btn btn-white" aria-current="page"><ListIcon /></Link>
                                        <Link to="/client/timelog-calendar" className=" btn btn-white"><CalendarTodayIcon /></Link>
                                        <Link to="/client/timelog-byemployee" className=" btn btn-white active text-white" aria-current="page"><PersonIcon /></Link>
                                        <Link to="/client/" className=" btn btn-white"><HelpOutlineRoundedIcon /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 m-5">
                            <h4>No Record Found</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientTimelogeEmployee