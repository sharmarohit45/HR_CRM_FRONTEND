import React, { useState } from 'react';

const AdminTimelogTimer = () => {
    const [visible, setVisible] = useState(true);

    const toggleVisibility = () => {
        setVisible(prevVisible => !prevVisible);
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <h3><b>Timer Info</b></h3>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label>Project</label>
                                    <select className="form-select">
                                        <option value="a">a</option>
                                        <option value="b">b</option>
                                        <option value="c">c</option>
                                    </select>
                                </div>
                            </div>
                            {visible && (
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="taskSelect">Task</label>
                                        <select id="taskSelect" className="form-select">
                                            <option value="a">a</option>
                                            <option value="b">b</option>
                                            <option value="c">c</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                            <div className="row mt-3">
                                <div className="col">
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            id="createNewTaskCheckbox" 
                                            onClick={toggleVisibility} 
                                        />
                                        <label className="form-check-label" htmlFor="createNewTaskCheckbox">
                                            Create New Task
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label>Memo</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mt-3 mb-3 text-end">
                                    <button type="button" data-bs-dismiss="offcanvas"className='btn btn-white'>Close</button> &nbsp;
                                    <button type="button" data-bs-dismiss="offcanvas" className='btn btn-dark'>Start Timer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminTimelogTimer;
