import Menu from '../components/Menu';
import InputText from '../components/InputText';

export default function Login() {

	return (
		<>
			<Menu/>
			<div className="content">
				<form action="" className='login'>
					<h2>Signin</h2>
					<InputText label="Username"/>
					<InputText label="Password"/>
					<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
						<button type='submit'>Login</button>
						<p style={{fontSize: "14px"}}>Don't have an account? <a href="/register" style={{fontSize: "14px"}}>Register here</a></p>
					</div>
				</form>
			</div>
		</>
	)
}