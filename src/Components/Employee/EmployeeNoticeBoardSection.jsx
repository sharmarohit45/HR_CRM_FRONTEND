import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeNoticeBoardSection = () => {
  return (
    <>
    <div className="page-wrapper">
        <div className="content container-fluid pb-0">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-head-box">
                        <h3>Notice Board</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/employee">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Notice Board</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default EmployeeNoticeBoardSection