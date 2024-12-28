import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale, // Required scale
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";  // Import default styles
import "../App.css"; // Import custom CSS for styling

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// The rest of your component code...


const WeightTrackerApp = () => {
    // States and effects remain unchanged
    const [weight, setWeight] = useState('');
    const [date, setDate] = useState(new Date());
    const [weightsData, setWeightsData] = useState([]);
    const [lastDeletedEntry, setLastDeletedEntry] = useState(null);
    const [undoVisible, setUndoVisible] = useState(false);
  
    useEffect(() => {
      const savedWeights = JSON.parse(localStorage.getItem('weights')) || [];
      setWeightsData(savedWeights);
    }, []);
  
    const saveWeightsData = (newWeights) => {
      localStorage.setItem('weights', JSON.stringify(newWeights));
      setWeightsData(newWeights);
    };
  
    const undoOverride = () => {
      if (lastDeletedEntry) {
        const updatedWeights = [...weightsData, lastDeletedEntry];
        saveWeightsData(updatedWeights);
        setLastDeletedEntry(null);
        setUndoVisible(false);
      }
    };
  
    const handleSubmit = () => {
      if (date && weight) {
        const entryDate = new Date(date);
        entryDate.setUTCFullYear(entryDate.getFullYear(), entryDate.getMonth(), entryDate.getDate());
        entryDate.setUTCHours(0, 0, 0, 0);
        const isoDate = entryDate.toISOString().split('T')[0];
  
        const existingEntryIndex = weightsData.findIndex(entry => entry.date === isoDate);
  
        if (existingEntryIndex !== -1) {
          const oldEntry = weightsData[existingEntryIndex];
          const updatedWeights = [...weightsData];
          updatedWeights[existingEntryIndex] = { date: isoDate, weight: parseFloat(weight) };
  
          saveWeightsData(updatedWeights);
          setLastDeletedEntry(oldEntry);
          setUndoVisible(true);
          setTimeout(() => setUndoVisible(false), 5000);
        } else {
          const newEntry = { date: isoDate, weight: parseFloat(weight) };
          const updatedWeights = [...weightsData, newEntry];
          saveWeightsData(updatedWeights);
        }
  
        setWeight('');
        setDate(null);
      } else {
        alert('Please provide both weight and date.');
      }
    };
  
    // New function: Delete weight entry
    const handleDelete = (date) => {
      const updatedWeights = weightsData.filter(entry => entry.date !== date);
      saveWeightsData(updatedWeights);
    };
  
    const sortedWeightsData = [...weightsData].sort((a, b) => new Date(a.date) - new Date(b.date));
  
    const chartData = {
      labels: sortedWeightsData.map(entry => new Date(entry.date).toLocaleDateString()),
      datasets: [
        {
          label: 'Weight',
          data: sortedWeightsData.map(entry => entry.weight),
          borderColor: '#4bc0c0',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#4bc0c0',
        },
      ],
    };
  
    return (
      <div className="app-container">
        <h1 className="app-header">Weight Tracker</h1>
  
        <div className="form-container">
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="PP"
            placeholderText="Select Date"
            maxDate={new Date()}
            minDate={new Date('1900-01-01')}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            calendarClassName="custom-datepicker"
          />
          <div>
          <input
            type="number"
            placeholder="Enter Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="input-field"
          />
          </div>
          <button onClick={handleSubmit} className="submit-btn">Submit</button>
        </div>
  
        {undoVisible && (
          <div className="undo-container">
            <button onClick={undoOverride} className="undo-btn">Undo changes</button>
          </div>
        )}
  
        <div className="chart-container">
          <Line data={chartData} height={400} width={600} />
        </div>
  
        <div className="history-container">
          <h2 className="history-header">Weight History</h2>
          <ul className="history-list">
            {sortedWeightsData.map((entry, index) => (
              <li key={index} className="history-item">
                {`${entry.date}: ${entry.weight} kg`}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(entry.date)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default WeightTrackerApp;
  