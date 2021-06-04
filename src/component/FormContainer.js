import React, { useState,useEffect } from 'react';
import Test from './Test';
import '../css/WelcomePage.css'

const FormContainer = () => {
	const [userName, setUserName] = useState('');
	const [name, setName] = useState('');
	const [test, setTest] = useState(false);



	useEffect(() => {
		if (name !== '') {
			document.title = name;
			setTest(true);
		}
	}, [name])

	
	const proceed = (e) => {
		e.preventDefault();
		if (!userName) {
			alert('Please enter user name');
			return
		}
		setName('Hi ' + userName);
		setUserName('');

	}


	if (test) {
		return (<>
			<Test name={name}/>
			</>
		)
	}
	return (
		<div>
			<span className="enterName"> Name : </span>
			<input type="text" placeholder=" eg John" value={userName} onChange={(e) => setUserName(e.target.value)} /><br />
			<button onClick={proceed}> Let's Begin </button>
		</div>
	)
}



export default FormContainer;