import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const AdminStickyNotesSection = () => {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [noteDetails, setNoteDetails] = useState({
        stickyNoteId: '',
        noteColor: '',
        subject: '',
        note: '',
        createdAt: ''
    });
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNoteDetails({
            ...noteDetails,
            [name]: value
        });
    };

    const handleSaveNote = async (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString();
        const newNote = { ...noteDetails, createdAt: currentDate };

        if (editMode) {
            await updateNote();
        } else {
            await saveNote(newNote);
        }
        getData();
        clearForm();
    };

    const saveNote = async (newNote) => {
        try {
            const response = await axios.post("http://localhost:8080/stickynote", newNote);
            console.log('Note saved successfully:', response.data);
        } catch (error) {
            console.error('Error saving note:', error);
            // Handle error if needed
        }
    };

    const updateNote = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/stickynote/${noteDetails.stickyNoteId}`, noteDetails);
            console.log('Note updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating note:', error);
            // Handle error if needed
        }
    };

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/stickynote");
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error if needed
        }
    };

    const handleDeleteNote = async (stickyNoteId) => {
        try {
            await axios.delete(`http://localhost:8080/stickynote/${stickyNoteId}`);
            console.log('Note deleted successfully');
            getData(); // Refresh notes after deletion
        } catch (error) {
            console.error('Error deleting note:', error);
            // Handle error if needed
        }
    };

    const handleEditNote = (note) => {
        setNoteDetails({
            stickyNoteId: note.stickyNoteId,
            noteColor: note.noteColor,
            subject: note.subject,
            note: note.note,
            createdAt: note.createdAt
        });
        setEditMode(true);
        setShowForm(true);
    };

    const clearForm = () => {
        setNoteDetails({
            stickyNoteId: '',
            noteColor: '',
            subject: '',
            note: '',
            createdAt: ''
        });
        setEditMode(false);
        setShowForm(false);
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-white" onClick={() => { clearForm(); setShowForm(true); }}>Add Note</button>
                </div>
            </div>

            {showForm && (
                <div className="row mt-2">
                    <div className="col">
                        <div className="card">
                            <div className="row">
                                <div className="col">
                                    <h3>{editMode ? 'Edit Note' : 'Add Note'}</h3>
                                </div>
                            </div>
                            <hr />
                            <form onSubmit={handleSaveNote}>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="noteColor">Note Color Code</label>
                                        <br />
                                        <input type="color" name="noteColor" id="noteColor" value={noteDetails.noteColor} onChange={handleInputChange} />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" name="subject" id="subject" className="form-control" value={noteDetails.subject} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <label htmlFor="note">Note</label>
                                        <textarea name="note" id="note" className="form-control" value={noteDetails.note} onChange={handleInputChange}></textarea>
                                    </div>
                                </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col">
                                        <button type="submit" className="btn btn-white">{editMode ? 'Update' : 'Save'}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <div className="row mt-5">
                {data && data.map((note, index) => (
                    <div key={index} className="col-sm-4">
                        <div className="card" style={{ borderLeft: `5px solid ${note.noteColor}` }}>
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title">{note.subject}</h5>
                                </div>
                                <div className="col-sm-2">
                                    <div className="dropdown">
                                        <MoreHorizIcon data-bs-toggle="dropdown" aria-expanded="false" />
                                        <ul className="dropdown-menu">
                                            <li onClick={() => handleEditNote(note)}><a className="dropdown-item" href="#"><i className='fa fa-edit'></i> Edit</a></li>
                                            <li onClick={() => handleDeleteNote(note.stickyNoteId)}><a className="dropdown-item" href="#"><i className='fa fa-trash'></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="card-text">
                                        {note.note}
                                    </p>
                                    <p>{new Date(note.createdAt).toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AdminStickyNotesSection;
