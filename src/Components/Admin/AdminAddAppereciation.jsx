import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill.css';
import AdminAwardForm from './AdminAwardForm';

const AdminAddAppreciation = () => {
    const [award, setAward] = useState('');
    const [givenTo, setGivenTo] = useState('');
    const [date, setDate] = useState('');
    const [summary, setSummary] = useState('');
    const [photo, setPhoto] = useState(null);
    const [awardsOptions, setAwardsOptions] = useState([]);
    const [recipientsOptions, setRecipientsOptions] = useState([]);

    useEffect(() => {
        // Fetch awards options
        axios.get('http://localhost:8080/awards')
            .then(response => setAwardsOptions(response.data))
            .catch(error => console.error('Error fetching awards:', error));

        // Fetch recipients options
        axios.get('http://localhost:8080/recipients')
            .then(response => setRecipientsOptions(response.data))
            .catch(error => console.error('Error fetching recipients:', error));
    }, []);

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

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('award', award);
        formData.append('givenTo', givenTo);
        formData.append('date', date);
        formData.append('summary', summary);
        if (photo) {
            formData.append('photo', photo);
        }

        try {
            const response = await axios.post('http://localhost:8080/appreciations', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Form data sent:', response.data);
            // Reset form
            setAward('');
            setGivenTo('');
            setDate('');
            setSummary('');
            setPhoto(null);
        } catch (error) {
            console.error('Form submission failed:', error);
        }
    };

    return (
        <>
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <h3>Add Appreciation</h3>
                        </div>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="award">Award</label>
                                <div className="input-group">
                                    <select name="award" id="award" className='form-select input-text' value={award} onChange={(e) => setAward(e.target.value)}>
                                        <option value="">Select Award</option>
                                        {awardsOptions.map(option => (
                                            <option key={option.id} value={option.id}>{option.name}</option>
                                        ))}
                                    </select>
                                    <button className="input-text btn btn-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add</button>
                                </div>
                            </div>
                            <div className="col">
                                <label htmlFor="givenTo">Given To</label>
                                <select name="givenTo" id="givenTo" className='form-select' value={givenTo} onChange={(e) => setGivenTo(e.target.value)}>
                                    <option value="">Select Recipient</option>
                                    {recipientsOptions.map(option => (
                                        <option key={option.id} value={option.id}>{option.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="date">Date</label>
                                <input type="date" name="date" id="date" className='form-control' value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="summary">Summary</label>
                                <ReactQuill
                                    value={summary}
                                    onChange={setSummary}
                                    theme="snow"
                                    modules={modules}
                                    formats={formats}
                                    className="form-control quill-editor"
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="photo">Photo</label>
                                <input type="file" className='form-control' onChange={handleFileChange} />
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <div className="col">
                                <button type="submit" className='btn btn-white'><i className='fa fa-check'></i> Save</button> &nbsp;
                                <button type="button" className='btn btn-white'>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h3 class="modal-title" id="staticBackdropLabel"><b>Add Award</b></h3>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <AdminAwardForm />
                  </div>
              </div>
          </div>
      </div>
     </>
    );
}

export default AdminAddAppreciation;
