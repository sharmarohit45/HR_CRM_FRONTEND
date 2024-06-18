import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const AdminAddQrCode = () => {
    const [qrData, setQrData] = useState('');
    const [qrTitle, setQrTitle] = useState('');
    const [qrType, setQrType] = useState('');
    const [qrMessage, setQrMessage] = useState('');

    const generateQRCode = () => {
        // Assuming you have some data to generate QR code
        const data = `${qrTitle} ${qrType} ${qrMessage}`;
        setQrData(data);
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="row">
                            <div className="col">
                                <h3><b>Create QR Code</b></h3>
                                <hr />
                            </div>
                        </div>
                        <form action="">
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="qrTitle">QR Title</label>
                                            <input type="text" id="qrTitle" value={qrTitle} onChange={(e) => setQrTitle(e.target.value)} className='form-control' />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="qrType">Type</label>
                                            <div className="dropdown">
                                                <button type="button" className="form-select" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                    {qrType ? qrType : "Select Type"}
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <li><button className="dropdown-item" onClick={() => setQrType("Email")}><i className="fa fa-envelope"></i> Email</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("Event")}><i className="fa fa-calendar"></i> Event</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("location")}><i className="fa fa-map-marker-alt"></i> location</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("Paypal")}><i className="fab fa-paypal"></i> Paypal</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("Skype")}><i className="fab fa-skype"></i> Skype</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("Sms")}><i className="fa fa-sms" aria-hidden="true"></i> Sms</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("Phone")}><i className="fa fa-phone"></i> Phone</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("Text")}><i className="fa fa-align-left"></i> Text</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("Upi")}><i className="fa fa-money-bill-alt"></i> Upi</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("Url")}><i className="fa fa-link"></i> Url</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("Whatsapp")}><i className="fab fa-whatsapp"></i> Whatsapp</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("WiFi")}><i className="fa fa-wifi"></i> Wi Fi</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setQrType("Zoom")}><i className="fa fa-video"></i> Zoom</button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {qrType === "Email" && (
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="">Email </label>
                                                <input type="email" name="" id="" className='form-control' />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="">Subject</label>
                                                <input type="text" name="" id="" className='form-control' />
                                            </div>
                                        </div>
                                    )}
                                    {
                                        qrType === "Event" && (
                                            <>
                                                <div className="row mt-2">
                                                    <div className="col">
                                                        <label htmlFor="">Event Title</label>
                                                        <input type="text" name="" id="" className='form-control' />
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor="">Location</label>
                                                        <input type="text" name="" id="" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col">
                                                        <label htmlFor="">Starts On Date </label>
                                                        <input type="date" name="" id="" className='form-control' />
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor="">Starts On Time</label>
                                                        <input type="time" name="" id="" className='form-control' />
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor="">Ends On Date </label>
                                                        <input type="date" name="" id="" className='form-control' />
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor="">Ends On Time</label>
                                                        <input type="time" name="" id="" className='form-control' />
                                                    </div>
                                                </div>
                                            </>

                                        )
                                    }
                                    {
                                        qrType === "location" && (
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="">Latitude</label>
                                                    <input type="number" name="" id="" className='form-control'/>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="">Longitude</label>
                                                    <input type="number" name="" id="" className='form-control'/>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="qrMessage">Message</label>
                                            <textarea id="qrMessage" value={qrMessage} onChange={(e) => setQrMessage(e.target.value)} className='form-control'></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="row p-3" style={{ border: '1px solid gray' }}>
                                                <div className="col">
                                                    {qrData && <QRCode value={qrData} />}
                                                    {!qrData && <p>No QR code generated</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col mt-2">
                                            <button type='button' className='btn btn-white' onClick={generateQRCode}>Generate QR Preview</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <h3><b>Logo</b></h3>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <label htmlFor="">Logo</label>
                                                <input type="file" name="" id="" className='form-control' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="Design">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDesign" aria-expanded="true" aria-controls="collapseOne">
                                                <h3><b>Design</b></h3>
                                            </button>
                                        </h2>
                                        <div id="collapseDesign" className="accordion-collapse collapse show" aria-labelledby="Design" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <label htmlFor="">Size </label>
                                                        <input type="number" name="" id="" className='form-control' />
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor="">Margin</label>
                                                        <input type="number" name="" id="" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <label htmlFor="">Background Color </label>
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor="">Foreground Color</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="row mt-5 mb-5">
                                <div className="col">
                                    <button type="submit" className='btn btn-white'>Save</button> &nbsp;
                                    <button type="reset" className='btn btn-dark' data-bs-dismiss='offcanvas'>Cancel</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminAddQrCode;
