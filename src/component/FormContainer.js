import React, { useState } from 'react';
import '../css/WelcomePage.css'

const FormContainer = (props) => {
	const [userName, setUserName] = useState('');
	const proceed = (e) => {
		e.preventDefault();
		if (!userName) {
			alert('Please enter user name');
			return
		}
		props.userName({ userName });
		setUserName('');
	}

	return (
		<div>
			<label> Username : </label>
			<input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} /><br />
			<button onClick={proceed}> Let's Begin </button>
		</div>
		)

}

export default FormContainer;