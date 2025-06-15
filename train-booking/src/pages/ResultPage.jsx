import React from 'react';
import { useLocation } from 'react-router-dom';
import trainData from '../data.json';//importing dummy json from local json file
import TrainCard from '../components/TrainCard';// importing traincard component to show individual train results

function ResultsPage() {
const location = useLocation();
const { date, passengers } = location.state || {};//location.state gives access to values passed from search form

const availableTrains = trainData.filter(train =>
train.available_seats >= passengers //filters trains that have enough seats for selected number of passengers, If train.avaialable_seats<passenegers,Its excluded
);

return (
<div className="results-page-container">
<h2>Available Trains on {date}</h2>
{availableTrains.length > 0 ? (//check if any train is available
availableTrains.map(train => (
<TrainCard key={train.flight_id} train={train} passengers={passengers} />//Loops through all the filtered train and renders on traincard per item
))
) : (
<p>No trains found with enough available seats.</p>//if no trains available shows a fallback message
)}
</div>
);
}

export default ResultsPage;