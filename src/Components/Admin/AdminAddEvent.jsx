// import React, { useState } from 'react'
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import './quill.css'
// import axios from 'axios';
// const AdminAddEvent = () => {
//     const [visible, setVisible] = useState(false);
//     const [remind, setRemind] = useState(false);
//     const [eventName, setEventName] = useState('');
//     const [labelColor, setLabelColor] = useState('#000000'); // Default color
//     const [location, setlocation] = useState('');
//     const [description, setDescription] = useState('');
//     const [startsOnDate, setStartsOnDate] = useState('');
//     const [startsOnTime, setStartsOnTime] = useState('');
//     const [endsOnDate, setEndsOnDate] = useState('');
//     const [endsOnTime, setEndsOnTime] = useState('');
//     const [selectedEmployee, setSelectedEmployee] = useState('');
//     const [selectedClient, setSelectedClient] = useState('');
//     const [host, setHost] = useState('');
//     const [status, setStatus] = useState('');
//     const [repeatEvery, setRepeatEvery] = useState(0);
//     const [repeatInterval, setRepeatInterval] = useState('');
//     const [cycles, setCycles] = useState('');
//     const [reminderTime, setReminderTime] = useState('');
//     const [reminderInterval, setReminderInterval] = useState('');
//     const [eventLink, setEventLink] = useState('');
//     const [file, setFile] = useState(null);
//     function visibility(){
//         setVisible(!visible)
//     }
//     function Reminder(){
//         setRemind(!remind)
//     }
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const formData = {
//             eventName,
//             labelColor,
//             location,
//             description,
//             startsOnDate,
//             startsOnTime,
//             endsOnDate,
//             endsOnTime,
//             selectedEmployee,
//             selectedClient,
//             host,
//             status,
//             repeatEvery,
//             repeatInterval,
//             cycles,
//             reminderTime,
//             reminderInterval,
//             eventLink,
//             file,
//         };

//         try {
//             const response = await axios.post('your-api-endpoint', formData);
//             console.log('Event added successfully:', response.data);
//         } catch (error) {
//             console.error('Error adding event:', error);
//         }
//     };
//     const modules = {
//         toolbar: [
//             [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//             [{ size: [] }],
//             ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//             [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//             ['link', 'image', 'video'],
//             ['clean']
//         ],
//     };

//     const formats = [
//         'header', 'font', 'size',
//         'bold', 'italic', 'underline', 'strike', 'blockquote',
//         'list', 'bullet', 'indent',
//         'link', 'image', 'video'
//     ];
//     return (
//         <>
//             <div className="row">
//                 <div className="col">
//                     <div className="card">
//                         <div className="row">
//                             <div className="col">
//                                 <h3>Add Event</h3>
//                             </div>
//                         </div><hr />
//                         <form action="">
//                             <div className="row">
//                                 <div className="col">
//                                     <label htmlFor="">Event Name</label>
//                                     <input type="text" name="" id="" className="form-control"  value={eventName}
//                                         onChange={(e) => setEventName(e.target.value)} />
//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor="">Label Color </label>
//                                     <label for="exampleColorInput" class="form-label">Color picker</label>
//                                     <input type="color" class="form-control form-control-color" id="exampleColorInput" title="Choose your color" />
//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor="">location </label>
//                                     <input type="text" name="" id="" className="form-control" />
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col" >
//                                     <label htmlFor="">Description</label>
//                                     <ReactQuill
//                                         theme="snow"
//                                         modules={modules}
//                                         formats={formats}
//                                         className="form-control quill-editor"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col">
//                                     <label htmlFor="">Starts On Date</label>
//                                     <input type="date" name="" id="" className="form-control" />

//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor="">Starts On Time</label>
//                                     <input type="time" name="" id="" className="form-control" />

//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor="">Ends On Date</label>
//                                     <input type="date" name="" id="" className="form-control" />

//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor="">Ends On Time</label>
//                                     <input type="time" name="" id="" className="form-control" />

//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col">
//                                     <label htmlFor="">Select Employee </label>
//                                     <select name="" id="" className="form-select">
//                                         <option value="">--</option>
//                                     </select>
//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor="">Select Client </label>
//                                     <select name="" id="" className="form-select">
//                                         <option value="">--</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col">
//                                     <label htmlFor="">Host</label>
//                                     <select name="" id="" className="form-select">
//                                         <option value="">--</option>
//                                     </select>
//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor="">Status</label>
//                                     <select name="" id="" className="form-select">
//                                         <option value="">--</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col p-4">
//                                     <div className="form-check form-check-inline">
//                                         <input type="checkbox" name="" id="" className="form-check-input" onClick={visibility}/>
//                                         <label htmlFor="" className="input-form-lab">Repeat</label>
//                                     </div>
//                                 </div>
//                                 <div className="col p-4">
//                                     <div className="form-check form-check-inline">
//                                         <input type="checkbox" name="" id="" className="form-check-input" onClick={Reminder}/>
//                                         <label htmlFor="" className="input-form-lab">Send Reminder</label>
//                                     </div>
//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor="">Event Link</label>
//                                     <input type="text" name="" id="" className="form-control" />
//                                 </div>
//                             </div>
                
//                             {visible &&(
//                                 <div className="row mt-3">
//                                 <div className="col">
//                                     <label htmlFor="">Repeat every</label>
//                                     <input type="number" className='form-control' min={0} />

//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor=""></label>
//                                     <select name="" id="" className="form-select">
//                                         <option value="">--</option>
//                                         <option value="">Day(s)</option>
//                                         <option value="">Week(s)</option>
//                                         <option value="">Month</option>
//                                         <option value="">Monthly on third Wednesday</option>
//                                         <option value="">Year</option>
//                                     </select>
//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor="">Cycles</label>
//                                     <input type="text" className='form-control' />
//                                 </div>
//                             </div>
//                             )}
//                             {/* SHow on check Reminder */}
//                             {remind && (
//                                 <div className="row mt-3">
//                                 <div className="col">
//                                     <label htmlFor="">Remind before </label>
//                                     <input type="text" name="" id="" className="form-control" />
//                                 </div>
//                                 <div className="col">
//                                     <label htmlFor=""></label>
//                                     <select name="" id="" className="form-select">
//                                         <option value="">--</option>
//                                         <option value="">Day(s)</option>
//                                         <option value="">Hour(s)</option>
//                                         <option value="">Minute(s)</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             )}
//                             <div className="row mt-3">
//                                 <div className="col">
//                                     <label htmlFor="">Add File</label>
//                                     <input type="file" name="" id="" className="form-control" />
//                                 </div>
//                             </div>
//                             <div className="row mt-3 mb-3">
//                                 <div className="col">
//                                     <button type="submit" className="btn btn-white">Save</button> &nbsp;
//                                     <button type="button" className="btn btn-white" data-bs-dismiss="offcanvas">Cancel</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AdminAddEvent

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const AdminAddEvent = () => {
    const [visible, setVisible] = useState(false);
    const [remind, setRemind] = useState(false);
    const [eventName, setEventName] = useState('');
    const [labelColor, setLabelColor] = useState('#000000'); // Default color
    const [location, setlocation] = useState('');
    const [description, setDescription] = useState('');
    const [startsOnDate, setStartsOnDate] = useState('');
    const [startsOnTime, setStartsOnTime] = useState('');
    const [endsOnDate, setEndsOnDate] = useState('');
    const [endsOnTime, setEndsOnTime] = useState('');
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [selectedClient, setSelectedClient] = useState('');
    const [host, setHost] = useState('');
    const [status, setStatus] = useState('');
    const [repeatEvery, setRepeatEvery] = useState(0);
    const [repeatInterval, setRepeatInterval] = useState('');
    const [cycles, setCycles] = useState('');
    const [reminderTime, setReminderTime] = useState('');
    const [reminderInterval, setReminderInterval] = useState('');
    const [eventLink, setEventLink] = useState('');
    const [file, setFile] = useState(null);

    const handleColorChange = (e) => {
        setLabelColor(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            eventName,
            labelColor,
            location,
            description,
            startsOnDate,
            startsOnTime,
            endsOnDate,
            endsOnTime,
            selectedEmployee,
            selectedClient,
            host,
            status,
            repeatEvery,
            repeatInterval,
            cycles,
            reminderTime,
            reminderInterval,
            eventLink,
            file,
        };

        try {
            const response = await axios.post('http://localhost:8080/events', formData);
            console.log('Event added successfully:', response.data);
        } catch (error) {
            console.error('Error adding event:', error);
        }
    };
     function visibility(){
         setVisible(!visible)
     }
     function Reminder(){
         setRemind(!remind)
     }
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <h3>Add Event</h3>
                        </div>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="">Event Name</label>
                                <input type="text" className="form-control" value={eventName}
                                    onChange={(e) => setEventName(e.target.value)} />
                            </div>
                            <div className="col">
                                <label htmlFor="">Label Color</label>
                                <input type="color" className="form-control form-control-color"
                                    value={labelColor} onChange={handleColorChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="">location</label>
                                <input type="text" className="form-control" value={location}
                                    onChange={(e) => setlocation(e.target.value)} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="">Description</label>
                                <ReactQuill
                                    theme="snow"
                                    modules={modules}
                                    formats={formats}
                                    value={description}
                                    onChange={setDescription}
                                    className="form-control quill-editor"
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="">Starts On Date</label>
                                <input type="date" className="form-control" value={startsOnDate}
                                    onChange={(e) => setStartsOnDate(e.target.value)} />
                            </div>
                            <div className="col">
                                <label htmlFor="">Starts On Time</label>
                                <input type="time" className="form-control" value={startsOnTime}
                                    onChange={(e) => setStartsOnTime(e.target.value)} />
                            </div>
                            <div className="col">
                                <label htmlFor="">Ends On Date</label>
                                <input type="date" className="form-control" value={endsOnDate}
                                    onChange={(e) => setEndsOnDate(e.target.value)} />
                            </div>
                            <div className="col">
                                <label htmlFor="">Ends On Time</label>
                                <input type="time" className="form-control" value={endsOnTime}
                                    onChange={(e) => setEndsOnTime(e.target.value)} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="">Select Employee</label>
                                <select className="form-select" value={selectedEmployee}
                                    onChange={(e) => setSelectedEmployee(e.target.value)}>
                                    <option value="">--</option>
                                    {/* Add options dynamically */}
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="">Select Client</label>
                                <select className="form-select" value={selectedClient}
                                    onChange={(e) => setSelectedClient(e.target.value)}>
                                    <option value="">--</option>
                                    {/* Add options dynamically */}
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="">Host</label>
                                <select className="form-select" value={host}
                                    onChange={(e) => setHost(e.target.value)}>
                                    <option value="">--</option>
                                    {/* Add options dynamically */}
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="">Status</label>
                                <select className="form-select" value={status}
                                    onChange={(e) => setStatus(e.target.value)}>
                                    <option value="">--</option>
                                    {/* Add options dynamically */}
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col p-4">
                                <div className="form-check form-check-inline">
                                    <input type="checkbox" className="form-check-input" onClick={visibility} />
                                    <label className="input-form-lab">Repeat</label>
                                </div>
                            </div>
                            <div className="col p-4">
                                <div className="form-check form-check-inline">
                                    <input type="checkbox" className="form-check-input" onClick={Reminder} />
                                    <label className="input-form-lab">Send Reminder</label>
                                </div>
                            </div>
                            <div className="col">
                                <label htmlFor="">Event Link</label>
                                <input type="text" className="form-control" value={eventLink}
                                    onChange={(e) => setEventLink(e.target.value)} />
                            </div>
                        </div>
                        {visible && (
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Repeat every</label>
                                    <input type="number" className='form-control' min={0}
                                        value={repeatEvery} onChange={(e) => setRepeatEvery(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Repeat Interval</label>
                                    <select className="form-select" value={repeatInterval}
                                        onChange={(e) => setRepeatInterval(e.target.value)}>
                                        <option value="">--</option>
                                        {/* Add interval options */}
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="">Cycles</label>
                                    <input type="text" className='form-control' value={cycles}
                                        onChange={(e) => setCycles(e.target.value)} />
                                </div>
                            </div>
                        )}
                        {/* Show on check Reminder */}
                        {remind && (
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Remind before</label>
                                    <input type="text" className="form-control" value={reminderTime}
                                        onChange={(e) => setReminderTime(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Reminder Interval</label>
                                    <select className="form-select" value={reminderInterval}
                                        onChange={(e) => setReminderInterval(e.target.value)}>
                                        <option value="">--</option>
                                        {/* Add reminder interval options */}
                                    </select>
                                </div>
                            </div>
                        )}
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="">Add File</label>
                                <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} />
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <button type="submit" className="btn btn-white">Save</button> &nbsp;
                                <button type="button" className="btn btn-white" data-bs-dismiss="offcanvas">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminAddEvent;
