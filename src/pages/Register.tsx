import Menu from '../components/Menu';
import InputText from '../components/InputText';
import Button from '../components/Button';
import { baseURL } from "../config";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Register() {
	const navigate = useNavigate();
	const [user, setUser] = useState({ username: "", password: "", confirmPassword: "", email: ""});

	const formHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const response = await axios.post(baseURL + "/auth/register", 
			{
				"username": user.username,
				"email": user.email,
				"password": user.password,
				"confirmPassword": user.confirmPassword
			}
		);
		
		// document.cookie = "token=" + response.data.access_token + ";";
		navigate('/login');
	};

	const handleUsernameChange = (value: string) => {
		setUser({ ...user, username: value });
	};
	const handleEmailChange = (value: string) => {
		setUser({ ...user, email: value });
	};
	const handlePasswordChange = (value: string) => {
		setUser({ ...user, password: value });
	};
	const handleConfirmPasswordChange = (value: string) => {
		setUser({ ...user, confirmPassword: value });
	};

	return (
		<>
			<Menu/>
			<div className="content">
				<form action="" className="register" onSubmit={formHandler}>
					<h2>Signup</h2>
					<InputText 
						label="Username" 
						name="username"
						inputType="text"
						value={user.username}
						onInputChange={(value: string) => {
							setUser({ ...user, username: value });
						}}
					/>
					<InputText 
						label="Email" 
						name="email"
						inputType="email"
						value={user.email}
						onInputChange={(value: string) => {
							setUser({ ...user, email: value });
						}}
					/>
					<InputText 
						label="Password" 
						name="password"
						inputType="password"
						value={user.password}
						onInputChange={(value: string) => {
							setUser({ ...user, password: value });
						}}
					/>
					<InputText 
						label="Confirm password" 
						name="password2"
						inputType="password"
						value={user.confirmPassword}
						onInputChange={(value: string) => {
							setUser({ ...user, confirmPassword: value });
						}}
					/>
					<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
						<Button label='Register' type='submit' color="default"/>
						<p style={{fontSize: "14px"}}>Alredy registered? <a href="/login" style={{fontSize: "14px"}}>Login to account</a></p>
					</div>
				</form>
			</div>
		</>
	)
}