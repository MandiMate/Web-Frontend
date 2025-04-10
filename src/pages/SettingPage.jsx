import React from 'react'
import Sidebar from '../components/SideBar'

const SettingPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "220px", padding: "40px", width: "100%" }}>
        <h1 style={{ color: "#1a3f2f", fontSize: "32px", marginBottom: "20px" }}>
          Welcome to Setting Page
        </h1>
        <p style={{ fontSize: "18px" }}>You are logged in successfully!</p>
      </div>
    </div>
  )
}

export default SettingPage