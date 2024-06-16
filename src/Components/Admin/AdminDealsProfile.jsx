import React from 'react'
import AdminDealsOverviewTab from './AdminDealsOverviewTab'
import AdminDealsFileTab from './AdminDealsFileTab'
import AdminDealsFollowUp from './AdminDealsFollowUp'
import AdminCreateProposalTab from './AdminCreateProposalTab'
import AdminAddNotes from './AdminAddNotes'
import AdminHistoryTab from './AdminHistoryTab'

const AdminDealsProfile = () => {

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Deal Name</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Dashboard</li>
                                        <li className="breadcrumb-item">Deals</li>
                                        <li className="breadcrumb-item active" aria-current="page">Deal Name</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card tab-box">
                            <div className="row user-tabs">
                                <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                    <ul className="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                                        <li className="nav-item"><a href="#overview" data-bs-toggle="tab" className="nav-link active">Overview</a></li>
                                        <li className="nav-item"><a href="#files" data-bs-toggle="tab" className="nav-link">Files</a></li>
                                        <li className="nav-item"><a href="#followUp" data-bs-toggle="tab" className="nav-link">Follow Up</a></li>
                                        <li className="nav-item"><a href="#proposal" data-bs-toggle="tab" className="nav-link">Proposal</a></li>
                                        <li className="nav-item"><a href="#notes" data-bs-toggle="tab" className="nav-link">Notes</a></li>
                                        <li className="nav-item"><a href="#history" data-bs-toggle="tab" className="nav-link">History</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="overview" className="pro-overview tab-pane fade show active">
                                <AdminDealsOverviewTab />
                            </div>
                            <div className="tab-pane fade" id="files">
                                <div className="row">
                                    {/* <AdminLeadContactDealsTab  data={data}/> */}
                                    <AdminDealsFileTab />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="followUp">
                                <div className="row">
                                    <AdminDealsFollowUp />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="proposal">
                                <div className="row">
                                    <AdminCreateProposalTab />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="notes">
                                <div className="row">
                                    <AdminAddNotes />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="history">
                                <div className="row">
                                    <AdminHistoryTab />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default AdminDealsProfile