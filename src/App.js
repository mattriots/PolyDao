import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import Navbar
 from './components/Navbar';
function App() {
 
  return (
		<div>
      <Navbar />
			<Routes>
				{/* <Route path="/" element={<Home />} />
				<Route path="about" element={<About />} /> */}
			</Routes>
		</div>
	);
}

export default App;


