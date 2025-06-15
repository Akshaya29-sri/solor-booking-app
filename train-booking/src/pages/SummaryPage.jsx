import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SummaryPage() {
const location = useLocation();//o recieve previuos page data
const navigate = useNavigate();//to go to payment page
const { train, passengers, passengerInfo } = location.state || {};//pullsin selctedtrain, no.od passengers and formdata (name,email,phone)

if (!train || !passengerInfo) return <p>Missing booking data.</p>;//protects againts error if someone refreshes the page or jumps directly here

const pricePerSeat = train.price || 49; // fallback price
const subtotal = passengers * pricePerSeat;
const taxes = subtotal * 0.1;
const extras = 5; // flat service fee
const total = subtotal + taxes + extras;

const handlePayment = () => {
navigate('/payment', {//button click send user to result page, passes all the relevant date to page
state: {
passengerInfo,
train,
total,
passengers
}
});
};

return (
<div className="summary-container">
<h2>Order Summary</h2>

<div className="summary-info">
<p><strong>Passenger:</strong> {passengerInfo.name}</p>
<p><strong>Email:</strong> {passengerInfo.email}</p>
<p><strong>PhoneNumber:</strong>{passengerInfo.phone}</p>
<p><strong>Train:</strong> {train.origin} ➡️ {train.destination}</p>
<p><strong>Departure:</strong> {train.date_time_depart}</p>
<hr />
</div>

<div className="fare-breakdown">
<p>Fare: €{pricePerSeat} × {passengers} = €{subtotal.toFixed(2)}</p>
<p>Taxes (10%): €{taxes.toFixed(2)}</p>
<p>Extras: €{extras.toFixed(2)}</p>
<h3>Total: €{total.toFixed(2)}</h3>
</div>
<button onClick={handlePayment} className="pay-btn">Proceed to Payment</button>
</div>
);
}
export default SummaryPage;