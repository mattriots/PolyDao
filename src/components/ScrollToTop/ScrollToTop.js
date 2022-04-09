import {useState, useEffect} from 'react'
import {FaAngleDoubleUp} from 'react-icons/fa'
const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
		 window.addEventListener('scroll', () => {
				if (window.scrollY > 300) {
					setShowScrollTopButton(true);
				} else {
					setShowScrollTopButton(false);
				}
			});
		}, []);

         const scrollTop = (elementRef) => {
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						});
					};
    
  return (
		<div>
			{showScrollTopButton && (
				<FaAngleDoubleUp
					className="fixed bottom-5 right-10 text-5xl text-[#ECC76D] hover:text-[#ECC75D]"
					onClick={scrollTop}
				/>
			)}
		</div>
	);
     
}

export default ScrollToTop