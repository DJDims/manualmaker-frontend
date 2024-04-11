import Menu from '../components/Menu';
import InputText from '../components/InputText';

export default function Register() {

	return (
		<>
			<Menu/>
			<div className="content">
				<form action="">
					<h2>Signup</h2>
					<InputText label="Username"/>
					<InputText label="Email"/>
					<InputText label="Password"/>
					<InputText label="Confirm password"/>
					<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
						<button type='submit'>Register</button>
						<p style={{fontSize: "14px"}}>Alredy registered? <a href="/login" style={{fontSize: "14px"}}>Login to account</a></p>
					</div>
				</form>
			</div>
		</>
	)
}