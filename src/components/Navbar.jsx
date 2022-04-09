import { InitSwAuth } from '@skill-wallet/auth';
import { useEffect } from 'react';
import logo from '../components/assets/cp-logo.png';

function Navbar({
	scrollToSection,
	section0,
	section1,
	seection2,
	section3,
	section4,
	section5,
}) {
	useEffect(() => {
		InitSwAuth();
	}, []);
	return (
		<>
			<div className="flex flex-row justify-between items-center bg-[#172231] h-20 pl-10 pt-2 pr-10 font-poppins text-sm">
				<div className="flex flex-row text-white">
					<img src={logo} className="h-16" alt="this is a cal poly logo " />
					<ul className="flex flex-row items-center justify-center text-white">
						<li
							onClick={() => scrollToSection(section1)}
							className="pl-5 hover:text-[#ECC76D] cursor-pointer "
						>
							About
						</li>
						<li
							onClick={() => scrollToSection(section3)}
							className="pl-5 hover:text-[#ECC76D] cursor-pointer"
						>
							Community
						</li>
						<li
							onClick={() => scrollToSection(section5)}
							className="pl-5 hover:text-[#ECC76D] cursor-pointer"
						>
							Participate
						</li>
					</ul>
				</div>
				<sw-auth
					partner-key="d598a1d4a3688ef091006511966dfae96961b60f"
					use-dev="true"
				></sw-auth>
			</div>
		</>
	);
}

export default Navbar;
