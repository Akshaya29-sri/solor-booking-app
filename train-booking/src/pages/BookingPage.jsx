import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingPage() {
const location = useLocation();//to get data passed from result page
const navigate = useNavigate();// used to go to next page
const { train, passengers } = location.state || {};//extract selected trains and number of passengers from router state

const [formData, setFormData] = useState({//formdata stores all 3 values, setform updates the value
name: '',
email: '',
phone: ''
});

const handleChange = (e) => {
const { name, value } = e.target;
setFormData(prev => ({ ...prev, [name]: value }));//users inputs name to know which field to update
};

const handleSubmit = (e) => {
e.preventDefault();//prevents form from relaoding the page

// Simple validation:all fields must be filled
if (!formData.name || !formData.email || !formData.phone) {
alert('Please fill in all details');
return;
}

navigate('/summary', {//Onsubmit navigates to summary page
state: {
train,
passengers,
passengerInfo: formData
}
});
};

if (!train) return <p>No train selected.</p>;//incase someone lands here directly without slecting a train

return (
<div className="booking-container">
<h2>Passenger Information</h2>
<p>Booking Train {train.flight_id}: {train.origin} ➡️ {train.destination}</p>

<form className="booking-form"onSubmit={handleSubmit}>
<label>Name:<br />
<input type="text" name="name" value={formData.name} onChange={handleChange} required />
</label><br /><br />

<label>Email:<br />
<input type="email" name="email" value={formData.email} onChange={handleChange} required />
</label><br /><br />

<label>Phone:<br />
<input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
</label><br /><br />

<button type="submit" className="submit-btn">Continue to Summary</button>
</form>
</div>
);
}

export default BookingPage;