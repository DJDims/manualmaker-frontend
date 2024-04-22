import Menu from '../components/Menu';
import InputText from '../components/InputText';
import Button from '../components/Button';

export default function Register() {

	return (
		<>
			<Menu/>
			<div className="content">
				<form action="" className="register">
					<h2>Signup</h2>
					<InputText label="Username" name="username"/>
					<InputText label="Email" name="email"/>
					<InputText label="Password" name="password"/>
					<InputText label="Confirm password" name="password2"/>
					<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
						<Button label='Register' type='submit' color="default"/>
						<p style={{fontSize: "14px"}}>Alredy registered? <a href="/login" style={{fontSize: "14px"}}>Login to account</a></p>
					</div>
				</form>
			</div>
		</>
	)
}