import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SeasonOverview from '../components/SeasonOverview';
import NewPurchaseForm from '../components/NewPurchaseForm';
import StartNewSeasonForm from '../components/StartNewSeasonForm';

const CreateSeasonPage = () => {
    const [step, setStep] = useState('start');
    const [seasonData, setSeasonData] = useState(null);

    const handleSeasonStart = (data) => {
        setSeasonData(data);
        setStep('overview');
    };

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Navbar />

                {step === 'start' && (
                    <StartNewSeasonForm onNext={handleSeasonStart} />
                )}

                {step === "overview" && (
                    <SeasonOverview onAddNewPurchase={() => setStep("purchase")} />
                )}

                {step === "purchase" && (
                    <NewPurchaseForm
                        onSave={(data) => {
                            const existing = JSON.parse(localStorage.getItem("purchases")) || [];
                            existing.push(data);
                            localStorage.setItem("purchases", JSON.stringify(existing));
                            setStep("overview");
                        }}
                    />
                )}

            </div>
        </div>
    );
};

export default CreateSeasonPage;
