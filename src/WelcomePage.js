import React from 'react';
import './css/WelcomePage.css'

const WelcomePage = () => {
	return (
		<div className="welcomeForm">
		<label> Username : </label>
		<input type="text" /><br/>
		<input type="button" value="Let's Begin"/>
		</div>
		)
}
export default WelcomePage;