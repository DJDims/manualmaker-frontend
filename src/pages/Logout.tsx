import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";

export default function Logout() {
	const navigate = useNavigate();
	const [cookies, setCookie, removeCookie] = useCookies();

	useEffect(() => {
		removeCookie('token');
		removeCookie('user');
		navigate('/login');
	}, []);

	return (
		<>
		</>
	);
}