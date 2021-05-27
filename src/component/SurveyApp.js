import React from 'react';
import WelcomePage from './WelcomePage';
import '../css/SurveyApp.css';
import logo from '../images/logo.png';

const SurveyApp = () => {
	return (
		<div>
		<h2>Survey App</h2>
		<img src={logo} className="App-logo" alt="logo" />
		<p>Welcome user to Survey</p>
			<WelcomePage/>
		</div>
		)
}


export default SurveyApp;