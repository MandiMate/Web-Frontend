import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSave, FaPrint } from 'react-icons/fa';
import '../style/PurchaseForm.css';

const predefinedProducts = [
    "Wheat", "Barley", "Spinach", "Strawberry", "Loquat",
    "Carrot", "Peas", "Mulberry", "Cauliflower", "Cabbage", "Melon"
];

const NewPurchaseForm = ({ onSave }) => {
    const { register, handleSubmit } = useForm();
    const [selectedProduct, setSelectedProduct] = useState("");

    const onSubmit = (data) => {
        if (!selectedProduct) {
            alert("Please select a product");
            return;
        }

        const purchase = {
            ...data,
            product: selectedProduct
        };
        onSave(purchase); // call parent handler to switch view
    };

    return (
        <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group full">
                <label>Products Name</label>
                <div className="product-tags">
                    {predefinedProducts.map((product) => (
                        <span
                            key={product}
                            className={`tag ${selectedProduct === product ? 'selected' : ''}`}
                            onClick={() => setSelectedProduct(product)}
                        >
                            {product}
                        </span>
                    ))}
                </div>
            </div>

            <div className="row">
                <div className="input-group">
                    <label>Landlord Name</label>
                    <input type="text" placeholder='Enter Landlord Name' {...register('landlordName', { required: true })} />
                </div>
                <div className="input-group">
                    <label>Farmer Name</label>
                    <input type="text" placeholder='Enter Farmer Name' {...register('farmerName', { required: true })} />
                </div>
            </div>

            <div className="row">
                <div className="input-group">
                    <label>Date</label>
                    <input type="date" {...register('date', { required: true })} />
                </div>
                <div className="input-group">
                    <label>Quantity</label>
                    <input type="text" placeholder="Enter Quantity" {...register('quantity')} />
                </div>
            </div>

            <div className="row">
                <div className="input-group">
                    <label>Rate</label>
                    <input type="text" placeholder="Enter Rate" {...register('rate')} />
                </div>
                <div className="input-group">
                    <label>Advance Payment</label>
                    <input type="text" placeholder="Enter Advance Payment" {...register('advance')} />
                </div>
            </div>

            {/* Expense Breakdown and Total Cost in one row */}
            <div className="expense-total-row">
                <div className="input-group">
                    <label>Expense Breakdown (Transport, Labor, Misc)</label>
                    <input type="text" placeholder="Enter Expense" {...register('expenseBreakdown')} />
                </div>
                <div className="input-group">
                    <label>Total Cost</label>
                    <input type="text" placeholder="Enter Total Cost" {...register('totalCost')} />
                </div>
            </div>

            <div className="action-row">
                <button type="button" className="icon-btn" onClick={() => window.print()}>
                    <FaPrint />
                </button>
                <button type="submit" className="save-btn">
                    <FaSave className="btn-icon" />
                    Save
                </button>
            </div>
        </form>
    );
};

export default NewPurchaseForm;
