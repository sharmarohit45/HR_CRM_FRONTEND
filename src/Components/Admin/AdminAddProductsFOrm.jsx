import axios from 'axios';
import React, { useState } from 'react';

const AdminAddProductsForm = () => {
    const [visible, setVisible] = useState(true);
    const [purchaseVisible, setPurchaseVisible] = useState(false);
    const [downloadVisible, setDownloadVisible] = useState(false);
    const [inventoryVisible, setInventoryVisible] = useState(false);
    const [formData, setFormData] = useState({
        type: '',
        name: '',
        sku: '',
        unitType: '',
        productCategory: '',
        productSubCategory: '',
        sellingPrice: '',
        costPrice: '',
        tax: '',
        hsnSac: '',
        clientCanPurchase: false,
        downloadable: false,
        file: '',
        trackInventory: true,
        additionalNotes: '',
        openingStocks:'',
        addImage: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    const visibility = () => {
        setVisible(!visible);
    };

    const PurchaseVisibility = () => {
        setPurchaseVisible(!purchaseVisible);
    };

    const DownloadVisibility = () => {
        setDownloadVisible(!downloadVisible);
    };
    
    const Inventry = () => {
        setInventoryVisible(!inventoryVisible);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            for (let key in formData) {
                formDataToSend.append(key, formData[key]);
            }

            const response = await axios.post('http://localhost:8080/product', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Product saved successfully!', response.data);
            // Optionally reset form state or show success message
        } catch (error) {
            console.error('Error saving product:', error);
            // Handle specific error cases and display appropriate messages to the user
        }
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="row">
                            <div className="col">
                                <h3>Add Products</h3>
                            </div>
                        </div>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="">Type</label><br />
                                    <div className="form-check form-check-inline pt-2">
                                        <input className="form-check-input" type="radio" name="type" id="inlineRadio1" value="Goods" onChange={handleInputChange}/>
                                        <label className="form-check-label" htmlFor="inlineRadio1">Goods</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="type" id="inlineRadio2" value="Services" onClick={visibility} onChange={handleInputChange} />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Services</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" className="form-control" onChange={handleInputChange} />
                                </div>
                                {visible && (
                                    <div className="col">
                                        <label htmlFor="sku">SKU</label>
                                        <input type="text" name="sku" id="sku" className="form-control" onChange={handleInputChange} />
                                    </div>
                                )}
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="unitType">Unit Type</label>
                                    <select name="unitType" id="unitType" className="form-select" onChange={handleInputChange}>
                                        <option value="Pcs">Pcs</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="productCategory">Product Category</label>
                                    <div className="input-group">
                                        <select name="productCategory" id="productCategory" className="form-select" onChange={handleInputChange}>
                                            <option value="">--</option>
                                        </select>
                                        <button type="button" className="input-group-text btn btn-white">Add</button>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="productSubCategory">Product Sub Category</label>
                                    <div className="input-group">
                                        <select name="productSubCategory" id="productSubCategory" className="form-select" onChange={handleInputChange}>
                                            <option value="">--</option>
                                        </select>
                                        <button type="button" className="input-group-text btn btn-white">Add</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col pt-2">
                                    <label>Sales Information</label>
                                </div>
                                <div className="col pt-2">
                                    <div className="form-check">
                                        <input type="checkbox" name="purchaseInfo" id="purchaseInfo" className="form-check-input" onChange={PurchaseVisibility} />
                                        <label htmlFor="purchaseInfo" className="form-check-label">Purchase Information</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="sellingPrice">Selling Price</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">$</span>
                                        <input type="text" name="sellingPrice" id="sellingPrice" className="form-control" onChange={handleInputChange} />
                                    </div>
                                </div>
                                {purchaseVisible && (
                                    <div className="col">
                                        <label htmlFor="costPrice">Cost Price</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">$</span>
                                            <input type="text" name="costPrice" id="costPrice" className="form-control" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="tax">Tax</label>
                                    <div className="input-group">
                                        <input type="text" name="tax" id="tax" className="form-control" onChange={handleInputChange} />
                                        <button type="button" className="input-group-text btn btn-white">Add</button>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="hsnSac">Hsn/Sac</label>
                                    <input type="text" name="hsnSac" id="hsnSac" className="form-control" onChange={handleInputChange} />
                                </div>
                                <div className="col">
                                    <div className="form-check pt-4">
                                        <input type="checkbox" name="clientCanPurchase" id="clientCanPurchase" className="form-check-input" onChange={handleInputChange} />
                                        <label htmlFor="clientCanPurchase" className="form-check-label">Client can purchase</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-check pt-4">
                                        <input type="checkbox" name="downloadable" id="downloadable" className="form-check-input" onChange={handleInputChange} onClick={DownloadVisibility} />
                                        <label htmlFor="downloadable" className="form-check-label">Downloadable</label>
                                    </div>
                                </div>
                            </div>
                            {downloadVisible && (
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="file">Downloadable File</label>
                                        <input type="file" name="file" id="file" className="form-control" onChange={handleInputChange} />
                                    </div>
                                </div>
                            )}
                           <div className="row mt-3">
                                <div className="col">
                                    <div className="form-check">
                                        <input type="checkbox" name="trackInventory" id="trackInventory" onClick={Inventry} className="form-check-input" onChange={handleInputChange} />
                                        <label htmlFor="trackInventory" className="form-check-label" style={{ fontSize: 'smaller' }}>Track Inventory for this Item</label>
                                        <br />
                                        <label htmlFor="trackInventory" className="form-check-label" style={{ fontSize: 'smaller' }}>You can't enable/disable inventory tracking once you've created transactions for this item.</label>
                                    </div>
                                </div>
                            </div>
                            {/* {Inventry && Inventry ( */}
                                <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="">Opening Stocks</label>
                                    <input type="text" name="openingStocks" id="openingStocks" className="form-control" onChange={handleInputChange}/>
                                </div>
                            </div>
                        {/*  )} */}
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="additionalNotes">Description</label>
                                    <textarea name="additionalNotes" id="additionalNotes" className="form-control" onChange={handleInputChange}></textarea>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label htmlFor="addImages">Add Images</label>
                                    <input type="file" name="addImage" id="addImage" className="form-control" onChange={handleInputChange} />
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
        </>
    );
};

export default AdminAddProductsForm;

