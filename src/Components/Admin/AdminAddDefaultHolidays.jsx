// import React, { useState } from 'react';
// import axios from 'axios';

// const AdminAddDefaultHolidays = () => {
//     const [selectedDays, setSelectedDays] = useState([]);
//     const [occasion, setOccasion] = useState('');

//     const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//     const handleCheckboxChange = (day) => {
//         setSelectedDays(prev =>
//             prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
//         );
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const payload = {
//             days: selectedDays,
//             occasion
//         };

//         try {
//             const response = await axios.post('http://localhost:8080/holiday', payload);
//             console.log('Response:', response.data);
//             // Handle success (e.g., show a success message, close the modal, etc.)
//         } catch (error) {
//             console.error('There was an error saving the holidays!', error);
//             // Handle error (e.g., show an error message)
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="row">
//                 <div className="col">
//                     <label htmlFor="">Mark Days For Default Holidays For The Current Year</label>
//                     <div className="row mt-2 form-check">
//                         {daysOfWeek.map((day, index) => (
//                             <div className="col" key={index}>
//                                 <input
//                                     type="checkbox"
//                                     name={day}
//                                     id={day}
//                                     className="form-check-input"
//                                     checked={selectedDays.includes(day)}
//                                     onChange={() => handleCheckboxChange(day)}
//                                 />
//                                 <label className="form-check-label" htmlFor={day}>{day}</label>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="row mt-3">
//                 <div className="col">
//                     <label htmlFor="occasion">Occasion</label>
//                     <input
//                         type="text"
//                         id="occasion"
//                         className="form-control"
//                         value={occasion}
//                         onChange={(e) => setOccasion(e.target.value)}
//                     />
//                 </div>
//                 <div className="col"></div>
//             </div>
//             <div className="row mt-3 mb-3">
//                 <div className="col">
//                     <button type="button" className="btn btn-white" data-bs-dismiss="modal">Close</button> &nbsp;
//                     <button type="submit" className="btn btn-white">Save</button>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default AdminAddDefaultHolidays;
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const AdminAddDefaultHolidays = () => {
    const [selectedDays, setSelectedDays] = useState([]);
    const [occasion, setOccasion] = useState('');

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const handleCheckboxChange = (day) => {
        setSelectedDays(prev =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            holidayDay: selectedDays.join(', '),
            holiDayDateOcassion: [
                {
                    date: new Date().getFullYear() + '-12-25', // Example date
                    occasion
                }
            ]
        };

        try {
            const response = await axios.post('http://localhost:8080/holiday', payload);
            console.log('Response:', response.data);
            toast.success("Default Holiday Set Successfully")
        } catch (error) {
            console.error('There was an error saving the holidays!', error);
            toast.error("Default Holiday Set Failed")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="">Mark Days For Default Holidays For The Current Year</label>
                    <div className="row mt-2 form-check">
                        {daysOfWeek.map((day, index) => (
                            <div className="col" key={index}>
                                <input
                                    type="checkbox"
                                    name={day}
                                    id={day}
                                    className="form-check-input"
                                    checked={selectedDays.includes(day)}
                                    onChange={() => handleCheckboxChange(day)}
                                />
                                <label className="form-check-label" htmlFor={day}>{day}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="occasion">Occasion</label>
                    <input
                        type="text"
                        id="occasion"
                        className="form-control"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col">
                    <button type="button" className="btn btn-white" data-bs-dismiss="modal">Close</button> &nbsp;
                    <button type="submit" className="btn btn-white">Save</button>
                </div>
            </div>
            <ToastContainer />
        </form>
    );
};

export default AdminAddDefaultHolidays;
