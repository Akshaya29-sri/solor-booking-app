import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from '../components/SearchForm';



function HomePage() {
const navigate = useNavigate();

const handleStart = () => {
navigate('/search');
};

return (
<div className="home-hero">
    < div className="overlay">
    <div className="hero-content">
<h1>Welcome to Solar Express</h1>
<p>The first solar-powered train service connecting Paris ⇄ London</p>
<button onClick={handleStart}>Start Your Journey</button>
</div>
</div>
</div>
);
}

export default HomePage;
 