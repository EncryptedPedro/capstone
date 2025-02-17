import './App.css';
import Header from './components/foundations/Header';
import Nav from './components/foundations/Nav';
import Footer from './components/foundations/Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/BookingPage';
import Order from './components/Order';
import Login from './components/Login';
import ConfirmedBooking from './components/ConfirmedBooking';
import { BookingProvider } from './components/BookingContext';

function App() {
  return (
    <div className="container">
      <BookingProvider>
      <Header />
      <Router>
        <Nav />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<ConfirmedBooking/>}/>
        </Routes>
      </Router>
      <Footer />
      </BookingProvider>
    </div>
  );
}

export default App;
