import '../css/WelcomePage.css'
import FormContainer from './FormContainer';


const WelcomePage = () => {

		return(
			<div className="welcomeForm">
				
				<FormContainer userName={setUserName} />
		</div>
			) 
}
const setUserName = (text) => {
	console.log(text);
}

export default WelcomePage;