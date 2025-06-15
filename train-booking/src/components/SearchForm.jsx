import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';//useNavigate to go to /results when form is submitted

function SearchForm() {
const navigate = useNavigate();//set up navigate to move to another page

const [formData, setFormData] = useState({//formdata holds all form inputvalues together  ,  Setformdata is the function to update them
origin: 'Paris',
destination: 'London',
date: '',
time: '',
passengers: 1
});//initialises state with default values for each field

function handleChange(e) {//handles input changes
const { name, value } = e.target;
setFormData(prev => ({ ...prev, [name]: value }));//dynamically updates only field being changed using name from <input name="..." />
}

function handleSubmit(e) {
e.preventDefault();//prevents default form submit
// Navigate to results page and pass search data
navigate('/results', { state: formData });
}

return (
<form className="search-form" onSubmit={handleSubmit}>
<div className="form-row">
<label>
    From:
    <input type="text"
    name="origin"
    value={formData.origin}
    onChange={handleChange}
    required />
</label>

<label>
    To:
    <input type="text"
    name="destination"
    value={formData.destination}
    onChange={handleChange}
    required />
</label>
</div>



<div className="form-row">
<label>Date:
<input type="date" name="date" value={formData.date} onChange={handleChange} required />
</label>

<label>Time:
<input type="time" name="time" value={formData.time} onChange={handleChange} required />
</label>

<label>Passengers:
<input type="number" name="passengers" min="1" value={formData.passengers} onChange={handleChange} required />
</label>
</div>

<button type="submit" className="search-btn">Search Trains</button>
</form>
);
}

export default SearchForm;