import React, { useState } from 'react';
import '../css/WelcomePage.css'


const WelcomePage = () => {
	const [userName, setUserName] = useState('');
		return(
		<div className="welcomeForm">
		<label> Username : </label>
		<input type="text" /><br/>
		<button> Let's Begin </button>
		</div>
			) 
}
export default WelcomePage;