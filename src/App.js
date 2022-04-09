import './App.css';
import React from 'react';
import { useRef } from 'react';

import Navbar from './components/Navbar';

import Section0 from './components/Section0';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
	const section0 = useRef(null);
	const section1 = useRef(null);
	const section2 = useRef(null);
	const section3 = useRef(null);
	const section4 = useRef(null);
	const section5 = useRef(null);

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: 'smooth',
		});
	};

	return (
		<div className="container mx-auto bg-[#121E2A]">
			<ScrollToTop />
			<Navbar
				scrollToSection={scrollToSection}
				section0={section0}
				section1={section1}
				section2={section2}
				section3={section3}
				section4={section4}
				section5={section5}
			/>
			<div>
				<div ref={section0} className="flex justify-center">
					<Section0 />
				</div>
				<div ref={section1} className="flex justify-center">
					<Section1 />
				</div>
				<div ref={section2} className="flex justify-center">
					<Section2 />
				</div>
				<div ref={section3} className="flex justify-center">
					<Section3 />
				</div>
				<div ref={section4} className="flex justify-center">
					<Section4 />
				</div>
				<div ref={section5} className="flex justify-center">
					<Section5 />
				</div>
			</div>

		</div>
	);
}

export default App;
