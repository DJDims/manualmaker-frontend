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
	const [manualsCount, setManualsCount] = useState(0);
	const [user, setUser] = useState<IUser>({
		_id: "",
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

	const getManualsCount = async (id: string)=>{
		const resp = await axios.get(baseURL+"/manuals/user/"+id);
		setManualsCount(resp.data.length)
	}

	useEffect(() => {
		if (!userId) {
			setUser(cookies.user);
			getManualsCount(cookies.user._id)
		} else {
			getUser();
			getManualsCount(userId)
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
					<a href='/library' className='line'>
						<span>Manuals library</span>
						<span>{manualsCount}</span>
					</a>
					<a href='/favorites' className='line'>
						<span>Favorites</span>
						<span>{user.marked.length}</span>
					</a>
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
