import React, { useState } from 'react'


const Example = () => {
    const [imageUrl, setImageUrl] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
            console.log(url)
        }
    };
    return (
        <><div className="page-wrapper">
            <div>
                <input type="file" onChange={handleImageUpload} />
                {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
            </div>
            <div>
                <h2>Upload and Display Image</h2>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {imageUrl && (
                    <div>
                        <h3>Image Preview:</h3>
                        <img src={imageUrl} alt="Uploaded" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    </div>
                )}
            </div>
            <div class="dropdown action-label" style={{ fontSize: 'smaller' }}>
                <>
                    <a class="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-circle text-danger"></i> Pending
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#"><i class="fa fa-circle text-danger"></i> Pending</a>
                        <a class="dropdown-item" href="#"><i class="fa fa-circle text-success"></i> Approved</a>
                    </div>
                </>
                                                // </div>

        </div>

        </>
    )
}

export default Example