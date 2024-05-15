import Menu from "../components/Menu";
import InputText from "../components/InputText";
import Button from "../components/Button";
import axios from "axios";
import { baseURL } from "../config";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";


export default function Login() {
	const navigate = useNavigate();
	const [user, setUser] = useState({ username: "", password: "" });
	const [cookies, setCookies] = useCookies();

	const formHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const response = await axios.post(baseURL + "/auth/login", 
			{
				"username": user.username,
				"password": user.password
			}
		);
		setCookies('token', response.data.access_token);
		
		const result = await axios.get(baseURL + "/users/profile", {
			headers: {
				"Content-Type": "application/json",
				token: response.data.access_token
			}
		});
		setCookies('user', result.data);

		navigate('/profile');
	};

	return (
		<>
			<Menu />
			<div className='content'>
				<form action='' className='login' onSubmit={formHandler}>
					<h2>Signin</h2>
					<InputText
						label='Username'
						name='username'
						inputType="text"
						value={user.username}
						onInputChange={(newVal) => {
							setUser({ ...user, username: newVal });
						}}
						/>
					<InputText
						label='Password'
						name='password'
						inputType="password"
						value={user.password}
						onInputChange={(newVal) => {
							setUser({ ...user, password: newVal });
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center"
						}}
					>
						<Button label='Login' type='submit' color='default' />
						<p style={{ fontSize: "14px" }}>
							Don't have an account?{" "}
							<a href='/register' style={{ fontSize: "14px" }}>
								Register here
							</a>
						</p>
					</div>
				</form>
			</div>
		</>
	);
}