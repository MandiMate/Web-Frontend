import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SeasonPage from './pages/SeasonPage.jsx'
import PurchaseEntryPage from './pages/PurchaseEntryPage.jsx'
import InventoryPage from './pages/InventoryPage.jsx'
import PaymentPage from './pages/PaymentPage.jsx'
import ReportPage from './pages/ReportPage.jsx'
import NotificationPage from './pages/NotificationPage.jsx'
import SettingPage from './pages/SettingPage.jsx'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/season" element={<SeasonPage />} />
                <Route path="/purchase" element={<PurchaseEntryPage />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/report" element={<ReportPage />} />
                <Route path="/notifications" element={<NotificationPage />} />
                <Route path="/settings" element={<SettingPage />} />
            </Routes>
        </>
    )
}

export default App