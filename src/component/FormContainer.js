import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';
import '../css/WelcomePage.css'

const FormContainer = () => {
	const [userName, setUserName] = useState('');
	const [name, setName] = useState('');
	const [error, setError] = useState('');
	const [test, setTest] = useState(false);
	const [showModal, setModal] = useState(false);




	useEffect(() => {
		if (name !== '') {
			document.title = name;
			setTest(true);
		}
	}, [name])

	
	const proceed = (e) => {
		e.preventDefault();
		if (!userName) {
			setError('Please enter user name!');
			setTimeout(()=>{
			setError('');
			},2000)
			setModal(true);
			return
		}
		setName('Hi ' + userName);
		setUserName('');

	}

	


	if (test) {
		return (
			<Test name={name}/>
		)
	}
	return (
		<div className='form-style'>
			<span className="enterName"> Name : </span>
			<input type="text" placeholder=" eg John" value={userName} onChange={(e) => setUserName(e.target.value)} />
			<button onClick={proceed}> Let's Begin </button>
			<article className="error"> {error} </article>
			{showModal && <Prompt toggle={(value)=> setModal(value) }/>}
		</div>
	)
}

const Prompt = ({toggle}) => {
	return ReactDOM.createPortal(<div className="modal">
	<div className="modal-content">
	<span className="close" onClick={()=>toggle(false)}>&times;</span>
	<p className="modal-message">Please enter username to proceed!</p>
	</div>
	</div>,document.getElementById('portal'));
}

export default FormContainer;