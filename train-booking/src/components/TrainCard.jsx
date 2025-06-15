
// import React from 'react';
import { useNavigate } from 'react-router-dom';

function TrainCard({ train, passengers }) {
const navigate = useNavigate();

const handleBook = () => {
navigate('/booking', {
state: { train, passengers }
});
};

return (
<div className="train-card fancy-card">
<div className="train-header">
<h3>🚆 Train #{train.flight_id}</h3>
<span className="tag running">Runs Daily</span>
</div>

<div className="route-info">
<div>
<p><strong>{train.origin}</strong></p>
<p className="time-box">{train.time_depart}</p>
</div>
<div className="arrow">➡️</div>
<div>
<p><strong>{train.destination}</strong></p>
<p className="time-box">{train.time_arrival}</p>
</div>
</div>

<div className="availability-info">
<span className="tag available">Available Seats: {train.available_seats}</span>
<span className="tag price">Total: €{passengers * 49}</span>
</div>

<button className="book-btn" onClick={handleBook}>Book This Train</button>
</div>
);
}

export default TrainCard;