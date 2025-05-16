import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/SignUp.jsx'
import "./index.css"
import AdminDashboard from './pages/AdminDashboard.jsx'
import AgentDashboard from './pages/AgentDashboard.jsx'
import LandlordDashboard from './pages/LandlordDashboard.jsx'
import SplashScreen from './pages/SplashScreen.jsx'
import CreateSeasonPage from './pages/CreateSeasonPage.jsx'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<SplashScreen />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/agent-dashboard" element={<AgentDashboard />} />
                <Route path="/season-overview" element={<CreateSeasonPage />} />
                <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
            </Routes>
        </>
    )
}

export default App