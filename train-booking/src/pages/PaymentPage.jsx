import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentPage() {
const { state } = useLocation();
const { train, passengers, passengerInfo } = state || {};

const handleStripeCheckout = async () => {
try {
const response = await fetch('http://localhost:4242/create-checkout-session', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ train, passengers, passengerInfo }),
});//calls backend endpoint with all payment data

const data = await response.json();

if (data.url) {
 //✅ Save booking data before redirect
 sessionStorage.setItem('bookingData', JSON.stringify({//saving booking data to session storage right before redirecting to stripe
 train,
 passengers,
 passengerInfo,
 total: passengers * 49
 }));

// ✅ Redirect to Stripe Checkout
window.location.href = data.url;
} else {
alert('Error: No Checkout URL received');
}
} catch (err) {
alert(`Checkout error: ${err.message}`);
}
};

return (
<div className="payment-container">
<h2>Stripe Checkout</h2>
{train && passengerInfo ? (
<>
<p><strong>Passenger:</strong> {passengerInfo.name}</p>
<p><strong>Train:</strong> {train.origin} → {train.destination}</p>
<p><strong>Total:</strong> €{passengers * 49}</p>
<button className="pay-now-btn" onClick={handleStripeCheckout}>
Pay with Stripe
</button>
</>
) : (
<p>Missing booking data.</p>
)}
</div>
);
}

export default PaymentPage;
 
