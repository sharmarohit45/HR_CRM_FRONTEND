import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
function ClientCreateTicket() {
    const editor = useRef(null)
    const [content, setContent] = useState('')
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    {/* <!-- Page Header --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-head-box">
                                <h3>Create Tickets</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Dashboard</li>
                                        <li className="breadcrumb-item active" aria-current="page">Create Tickets</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}
                    <div className="row ">
                        <div className="col-3">
                            <div className="card">
                                <div className="row p-2">
                                    <div className='col-10'>
                                        <h4><b>Total Tickets</b></h4>
                                        <p>0</p>
                                    </div>
                                    <div className="col-2">
                                        <i className="fas fa-layer-group" style={{ fontSize: '25px', paddingTop: '10px' }}></i>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="row p-2">
                                    <div className='col-10'>
                                        <h4><b>Closed Tickets</b></h4>
                                        <p>0</p>
                                    </div>
                                    <div className="col-2">
                                        <i className="fas fa-ticket-alt" style={{ fontSize: '25px', paddingTop: '10px' }}></i>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="row p-2">
                                    <div className='col-10'>
                                        <h4><b>Open Signed</b></h4>
                                        <p>0</p>
                                    </div>
                                    <div className="col-2">
                                        <i className="fas fa-file-signature" style={{ fontSize: '25px', paddingTop: '10px' }}></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="row p-2">
                                    <div className='col-10'>
                                        <h4><b>Pending Signed</b></h4>
                                        <p>0</p>
                                    </div>
                                    <div className="col-2">
                                        <i className="fas fa-file-signature" style={{ fontSize: '25px', paddingTop: '10px' }}></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row filter-row d-flex align-content-start">
                        <div className="col-md-2">
                            <div className="add-emp-section">
                                <Link to="/client/tickets" className="btn btn-success btn-add-emp"><i className="fa fa-arrow-left"></i> All Ticket</Link>
                            </div>
                        </div>
                        <div className="col-md-8"></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card p-5">
                                <h4><b>Ticket Details</b></h4>
                                <hr />
                                <form>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <label htmlFor="">Assign Group</label>
                                            <select name="" id="" className="form-control">
                                                <option>--</option>
                                                <option value="">Legal</option>
                                                <option value="">Installation</option>
                                                <option value="">Spam</option>
                                                <option value="">Very Important</option>
                                                <option value="">Technical</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Project</label>
                                            <select name="" id="" className="form-control">
                                                <option>--</option>
                                                <option value="">SEO (Search Engine optimization )</option>
                                                <option value="">opinion mininf for social marketting</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <label htmlFor="">Ticket Subject</label>
                                            <input type="text" name="" id="" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <label htmlFor="">Description</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                onChange={newContent => setContent(newContent)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <label htmlFor="">Upload file</label>
                                            <input type="file" name="" id="" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col">
                                            <b>Other Details</b>
                                            <hr style={{ width: '40%' }} />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col">
                                            <label htmlFor="">Priority</label>
                                            <select name="" id="" className='form-control'>
                                                <option value="">--</option>
                                                <option value="">Low</option>
                                                <option value="">Medium</option>
                                                <option value="">High</option>
                                                <option value="">Urgent</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Type</label>
                                            <select name="" id="" className='form-control'>
                                                <option value="">--</option>
                                                <option value="">Bug</option>
                                                <option value="">Suggestion</option>
                                                <option value="">Quistion</option>
                                                <option value="">Problem</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="">Channel Name</label>
                                            <select name="" id="" className='form-control'>
                                                <option value="">--</option>
                                                <option value="">Email</option>
                                                <option value="">Phone</option>
                                                <option value="">Twitter</option>
                                                <option value="">Facebook</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <label htmlFor="">Tags</label>
                                            <input type="text" name="" id="" className='form-control' />
                                        </div>
                                    </div>
                                    <div className="row m-5">
                                        <div className="col">
                                        <button type='submit'className='btn btn-success'>Save</button>&nbsp;
                                        <button type='reset'className='btn btn-danger'>Reset</button>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ClientCreateTicket