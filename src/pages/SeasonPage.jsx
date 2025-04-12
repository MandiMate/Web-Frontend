import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  closeSeason,
  fetchActiveSeason,
  fetchAllSeasons,
  startSeason,
} from "../api/axios.js";
import Sidebar from "../components/SideBar";
import "../style/Seasonstyle.css";
import { toast, ToastContainer } from 'react-toastify';

const SeasonPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [activeSeason, setActiveSeason] = useState(null);
  const [allSeasons, setAllSeasons] = useState([]);

  const fetchData = async () => {
    try {
      const active = await fetchActiveSeason("/season/active");
      const all = await fetchAllSeasons("/season");

      setActiveSeason(active?.data?.data || null);
      setAllSeasons(all?.data?.data || []);
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    fetchData();

    // const interval = setInterval(fetchData, 10000);
    // return () => clearInterval(interval);

  }, []);

  const onStartSeason = async (data) => {
    console.log(data);

    try {
      const res = await startSeason("/season/create", data);
      toast.success(res?.data?.message, { position: 'top-center' });
      reset();
      fetchData();
    } catch (error) {
      console.log(error);

    }
  };

  const onCloseSeason = async () => {
    try {
      const res = await closeSeason("/season/close");
      toast.success(res?.data?.message, { position: 'top-center' });
      fetchData();
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <div className="season-wrapper">
      <ToastContainer />
      <Sidebar />
      <div className="season-container">
        <h2 className="season-heading">Season Management</h2>

        {activeSeason ? (
          <div className="season-card">
            <h3 className="section-title">Active Season</h3>
            <p><strong>Name:</strong> {activeSeason.name || "No Name"}</p>
            <p><strong>Start Date:</strong> {new Date(activeSeason.startDate).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(activeSeason.endDate).toLocaleDateString()}</p>
            <button
              onClick={onCloseSeason}
              className="btn btn-danger"
              disabled={!activeSeason}
            >
              Close Season
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onStartSeason)} className="season-form">
            <div className="form-group">
              <label htmlFor="name">Season Name</label>
              <input id="name" placeholder="Enter season name" {...register("name")} className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input id="startDate" type="date" {...register("startDate")} className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input id="endDate" type="date" {...register("endDate")} className="form-input" />
            </div>
            <button type="submit" className="btn btn-primary">Start Season</button>
          </form>
        )}

        <h3 className="section-title" style={{ marginTop: "40px" }}>All Seasons</h3>
        <div className="season-table-wrapper">
          <table className="season-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Start</th>
                <th>End</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allSeasons.map((season) => (
                <tr key={season._id}>
                  <td>{season.name || "No Name"}</td>
                  <td>{new Date(season.startDate).toLocaleDateString()}</td>
                  <td>{new Date(season.endDate).toLocaleDateString()}</td>
                  <td>{season.isActive ? "Active" : "Closed"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SeasonPage;
