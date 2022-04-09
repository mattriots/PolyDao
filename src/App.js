import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar
 from './components/Navbar';
import Home from './pages/Home'

function App() {
 
  return (
		<div className="container mx-auto bg-[#121E2A]">
			<Navbar />
			<Routes>
				{ <Route path="/" element={<Home />} />
				/*<Route path="about" element={<About />} /> */}
			</Routes>
		</div>
	);
}

export default App;


