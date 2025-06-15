import React, { useEffect, useState } from 'react';

function ConfirmationPage() {
const [booking, setBooking] = useState(null);
const [bookingRef, setBookingRef] = useState('');

useEffect(() => {
const data = sessionStorage.getItem('bookingData');
if (data) {
const parsed = JSON.parse(data);
setBooking(parsed);
const ref = 'REF' + Math.floor(Math.random() * 1000000);
setBookingRef(ref);
}
}, []);

if (!booking) return <p>Booking failed.</p>;

const { train, passengers, passengerInfo, total } = booking;

return (
<div className="confirmation-container">
<h2>🎉 Booking Confirmed!</h2>
<div className="ticket-box">
<p><strong>Reference:</strong> {bookingRef}</p>
<p><strong>Passenger:</strong> {passengerInfo.name}</p>
<p><strong>Email:</strong> {passengerInfo.email}</p>
<p><strong>Train:</strong> {train.origin} ➡️ {train.destination}</p>
<p><strong>Date:</strong> {train.date}</p>
<p><strong>Time:</strong> {train.time_depart}</p>
<p><strong>Seats:</strong> {passengers}</p>
<p><strong>Total Paid:</strong> €{total.toFixed(2)}</p>
</div>
</div>
);
}

export default ConfirmationPage;
 