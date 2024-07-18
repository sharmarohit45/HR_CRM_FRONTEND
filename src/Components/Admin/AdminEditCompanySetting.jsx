
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AdminEditCompanySetting = ({ companyData,companyId }) => {
  const [formData, setFormData] = useState({
    companyId: companyData.companyId,
    companyName: companyData.companyName,
    companyEmail: companyData.companyEmail,
    companyPhone: companyData.companyPhone,
    companyWebsite: companyData.companyWebsite,
    companyLogo: companyData.companyLogo,
    fileData: companyData.fileData
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
        data.append(key, formData[key]);
    }
    try {
        const response = await axios.put(`http://localhost:8080/employee/${companyId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        toast.success('Employee Data Updated Successfully');
    } catch (error) {
        console.error('There was an error', error);
        // Handle error
    }
}

  // Convert base64 image data to displayable image
  const logoUrl = `data:image/png;base64,${formData.fileData}`;

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Company Name:
        <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} />
      </label><br />
      <label>
        Company Email:
        <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleInputChange} />
      </label><br />
      <label>
        Company Phone:
        <input type="tel" name="companyPhone" value={formData.companyPhone} onChange={handleInputChange} />
      </label><br />
      <label>
        Company Website:
        <input type="url" name="companyWebsite" value={formData.companyWebsite} onChange={handleInputChange} />
      </label><br />
      <label>
        Company Logo:
        <img src={logoUrl} alt="Company Logo" style={{ maxWidth: '200px' }} />
      </label><br />
      <button type="submit">Save Changes</button>
    </form>
    <ToastContainer />
    </>
    
  );
};

export default AdminEditCompanySetting;
