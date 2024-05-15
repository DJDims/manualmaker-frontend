import Menu from "../components/Menu";
import PinnedManual from "../components/PinnedManual";
import { useCookies } from "react-cookie";
import Profile from "../components/Profile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL } from "../config";
import axios from "axios";
import { IUser } from "../interfaces";

export default function UserProfile() {
	const [cookies] = useCookies();
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
	const { userId } = useParams();

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
			<div className='content content_profile'>
				<Profile user={user} />
				<div className='data'>
					<div className='about'>
						<h3>About me</h3>
						<p>{user.about ? user.about : ''}</p>
					</div>
					<div className='line'>
						<h3>Manuals library</h3>
						<a>5</a>
					</div>
					<div className='line'>
						<h3>Favorites</h3>
						<a>5</a>
					</div>
					<div className='pinned'>
						<h3>Pinned manuals</h3>
						<div className='manuals'>
							{user.pinned.map((value) => {
								return <PinnedManual id={value} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
