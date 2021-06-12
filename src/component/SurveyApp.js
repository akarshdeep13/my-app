import React from 'react';
import WelcomePage from './WelcomePage';
import '../css/SurveyApp.css';
import logo from '../images/logo.png';

const SurveyApp = () => {
	return (
		<>
		<img src={logo} className="App-logo" alt="logo" />
		<h2 className="title">Quiz App</h2>
		<p className="introText">This is template developed for Quiz app by Akarsh Deep, The questions are fetched via API. </p>
			<WelcomePage/>
		</>
		)
}


export default SurveyApp;