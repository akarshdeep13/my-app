import React from 'react';
import WelcomePage from './WelcomePage';
import '../css/SurveyApp.css';
import logo from '../images/logo.png';

const SurveyApp = () => {
	return (
		<>
		<img src={logo} className="App-logo" alt="logo" />
		<h2 className="title">Survey App</h2>
		<p className="introText">Welcome user to Survey</p>
			<WelcomePage/>
		</>
		)
}


export default SurveyApp;