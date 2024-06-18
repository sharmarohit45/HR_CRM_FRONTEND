import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeightIcon from '@mui/icons-material/Height';
const AdminAddTicketForm = () => {
  const [fields, setFields] = useState({
    name: false,
    email: true,
    ticketSubject: true,
    ticketDescription: true,
    type: true,
    priority: true,
    assignGroup: true,
  });

  // Handler to toggle the visibility of a field
  const handleFieldToggle = (field) => {
    setFields({
      ...fields,
      [field]: !fields[field],
    });
  };

  return (
    <>
     <div className="row mt-3">
            <div className="col">
              <div className="card">
                <table className='table table-stripped'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Field</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(fields).map((field, index) => (
                      <tr key={index}>
                        <td><HeightIcon /></td>
                        <td>{field.charAt(0).toUpperCase() + field.slice(1)}</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`flexSwitchCheck${field}`}
                              checked={fields[field]}
                              onChange={() => handleFieldToggle(field)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col">
              <div className="card p-3">
                <div className="row">
                  <h4><b>Preview</b></h4>
                </div>
                <form action="">
                  <div className="row mt-3">
                    <div className="col">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" className='form-control' />
                    </div>
                  </div>
                  {fields.email && (
                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" className='form-control' />
                      </div>
                    </div>
                  )}
                  {fields.ticketSubject && (
                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="ticketSubject">Ticket Subject</label>
                        <input type="text" name="ticketSubject" id="ticketSubject" className='form-control' />
                      </div>
                    </div>
                  )}
                  {fields.ticketDescription && (
                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="ticketDescription">Ticket Description</label>
                        <input type="text" name="ticketDescription" id="ticketDescription" className='form-control' />
                      </div>
                    </div>
                  )}
                  {fields.type && (
                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="type">Type</label>
                        <input type="text" name="type" id="type" className='form-control' />
                      </div>
                    </div>
                  )}
                  {fields.priority && (
                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="priority">Priority</label>
                        <input type="text" name="priority" id="priority" className='form-control' />
                      </div>
                    </div>
                  )}
                  {fields.assignGroup && (
                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="assignGroup">Assign Group</label>
                        <input type="text" name="assignGroup" id="assignGroup" className='form-control' />
                      </div>
                    </div>
                  )}
                  <div className="row mt-3">
                    <div className="col text-end">
                      <button type='submit' className='btn btn-white'>Save</button>&nbsp;
                      <button type='button' className='btn btn-dark' data-bs-dismiss="offcanvas">Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </>
  )
}

export default AdminAddTicketForm