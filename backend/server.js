const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);//loades stripe secret key from .env
const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {//receives train and passenger data from frontend
const { passengers, train, passengerInfo } = req.body;
console.log('incoming request:',{passengers,train,passengerInfo});

const session = await stripe.checkout.sessions.create({
payment_method_types: ['card'],
mode: 'payment',
line_items: [{
price_data: {
currency: 'eur',
unit_amount: 4900, // stripe will charge 49euros 
product_data: {
name: `Train ${train.origin} ➡️ ${train.destination}`,// shows train route ad passenger name
description: `Passenger: ${passengerInfo.name}`,
},
},
quantity: passengers,
}],
success_url: 'http://localhost:5173/confirmation',//after payment stripe redirects to confirmation or payment(cancel)
cancel_url: 'http://localhost:5173/payment',
});

res.json({ url: session.url });
});

app.listen(4242, () => {
console.log('✅ Backend server running on http://localhost:4242');
});