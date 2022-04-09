import React from 'react'
import { InitSwAuth } from '@skill-wallet/auth';
import { useEffect } from 'react';
import logo from '../assets/cp-logo.png'
  

function Navbar() {

    useEffect(() => {
    InitSwAuth();
}, []);
  return (
		<>
			<div className="flex flex-row justify-between items-center bg-[#172231] h-20">
				<div className="flex flex-row text-white">
					<img src={logo} className='h-20' alt="this is a cal poly logo" />
					<ul className="flex flex-row items-center justify-center text-white">
						<li>one</li>
						<li>two</li>
						<li>three</li>
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

export default Navbar