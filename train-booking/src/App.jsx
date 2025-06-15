import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import './pages/NavBar.css';

import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import BookingPage from "./pages/BookingPage";
import SummaryPage from "./pages/SummaryPage";
import SearchPage from "./pages/SearchPage";
import NavBar from "./components/NavBar";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import AllTrainsPage from "./pages/AllTrainPage";

function App() {


  return (
<Router>
  <NavBar/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/alltrains" element={<AllTrainsPage />}/>
      <Route path="/results" element={<ResultPage/>}/>
      <Route path="/booking" element={<BookingPage/>}/>
      <Route path="/summary" element={<SummaryPage/>}/>
      <Route path="/payment" element={<PaymentPage/>}/>
      <Route path="/confirmation" element={<ConfirmationPage/>}/>

    </Routes>
   </Router>
  )
}

export default App
