import React, { useState } from 'react';
import '../css/WelcomePage.css';

const FormContainer = () => {
	const [userName, setUserName] = useState('');
	const [name, setName] = useState('');
	const proceed = (e) => {
		e.preventDefault();
		if (!userName) {
			alert('Please enter user name');
			return
		}
		setName('Hi '+userName);
		console.log(name);
		setUserName('');

	}

	return (
		<div>
			<h1>{name}</h1>
			<label> Username : </label>
			<input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} /><br />
			<button onClick={proceed}> Let's Begin </button>
		</div>
		)

}



export default FormContainer;