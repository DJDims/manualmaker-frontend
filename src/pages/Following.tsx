import Menu from '../components/Menu';
import Button from '../components/Button';
import { useCookies } from 'react-cookie';
import Follower from '../components/Follower';
import Profile from '../components/Profile';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../config';
import { IUser } from '../interfaces';
import { useParams } from 'react-router-dom';

export default function Following() {
	const [cookies, setCookie] = useCookies();
	const { userId } = useParams();
	const [user, setUser] = useState<IUser>({
		username: "",
		avatar: "",
		role: "",
		about: "",
		followers: [],
		following: [],
		marked: [],
		pinned: []
	});
	const getUser = async () => {
		const response = await axios.get(baseURL + "/users/" + userId);
		setUser(response.data);
	};

	useEffect(() => {
		if (!userId) {
			setUser(cookies.user);
		} else {
			getUser();
		}
	}, []);

	return (
		<>
			<Menu />
			<div className="content content_profile">
				<Profile user={user}/>
				<div className="friends">
					<h3>You following</h3>
					<ul>
						{user.following.map((element, index) => {
							return <Follower id={element} key={index}/>
						})}
					</ul>
				</div>
			</div>
		</>
	)
}