import React, { useEffect, useState } from 'react'

const AdminLeadContactProfileTab = ({data}) => {
    return (
        <>
            <div className="row">
                <div className="card text-start">
                    <div className="row p-4">
                        <div className="col">
                            <p>Name</p>
                            <p>Email</p>
                            <p>Source</p>
                            <p>Lead Category</p>
                            <p>Company Name</p>
                            <p>Website</p>
                            <p>Mobile</p>
                            <p>Office Phone Number</p>
                            <p>Country</p>
                            <p>State</p>
                            <p>City</p>
                            <p>Postal Code</p>
                            <p>Address</p>
                        </div>
                        <div className="col">
                            <p>{data.name}</p>
                            <p>{data.email}</p>
                            <p>{data.leadSource}</p>
                            <p>{data.addedBy}</p>
                            <p>{data.companyName}</p>
                            <p>{data.website}</p>
                            <p>{data.mobile}</p>
                            <p>{data.officePhone}</p>
                            <p>{data.country}</p>
                            <p>{data.state}</p>
                            <p>{data.city}</p>
                            <p>{data.postalCode}</p>
                            <p>{data.address}</p>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    )
}

export default AdminLeadContactProfileTab