import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCamera, FaCalendarAlt } from 'react-icons/fa';
import '../style/CreateSeasonPage.css';

const predefinedProducts = [
    "Wheat", "Barley", "Spinach", "Strawberry", "Loquat",
    "Carrot", "Peas", "Mulberry", "Cauliflower", "Cabbage", "Melon"
];

const StartNewSeasonForm = ({ onNext }) => {
    const { register, handleSubmit } = useForm();
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const toggleProduct = (product) => {
        setSelectedProducts((prev) =>
            prev.includes(product) ? prev.filter(p => p !== product) : [...prev, product]
        );
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) setCoverPhoto(URL.createObjectURL(file));
    };

    const onSubmit = (data) => {
        onNext({
            ...data,
            products: selectedProducts,
            coverPhoto,
        });
    };

    return (
        <form className="create-season-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="upload-section">
                <label htmlFor="coverInput" className="upload-label">
                    {coverPhoto ? (
                        <img src={coverPhoto} alt="Cover Preview" className="cover-preview" />
                    ) : (
                        <div className="icon-circle">
                            <FaCamera className="upload-icon" />
                        </div>
                    )}
                    <p className="upload-text">Upload Cover Photo</p>
                </label>
                <input
                    type="file"
                    id="coverInput"
                    accept="image/*"
                    onChange={handleImageChange}
                    hidden
                />
            </div>

            <div className="form-section">
                <div className="horizontal-inputs">
                    <div className="input-group">
                        <label>Season Name</label>
                        <input
                            type="text"
                            placeholder="Spring"
                            {...register("seasonName", { required: true })}
                        />
                    </div>

                    <div className="input-group">
                        <label>Start Date</label>
                        <input
                            type="date"
                            {...register("startDate", { required: true })}
                        />
                    </div>
                </div>

                <div className="input-groups">
                    <label>Products</label>
                    <div className="product-tags">
                        {predefinedProducts.map((product) => (
                            <span
                                key={product}
                                className={`tag ${selectedProducts.includes(product) ? 'selected' : ''}`}
                                onClick={() => toggleProduct(product)}
                            >
                                {product}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="seasonStart">
                    <button type="submit" className="start-button">
                        <FaCalendarAlt className="btn-icon" />
                        Start New Season
                    </button>
                </div>
            </div>
        </form>
    );
};

export default StartNewSeasonForm;
