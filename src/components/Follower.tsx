import React, { useState, useEffect } from "react";
import Button from "./Button";
import { baseURL } from "../config";
import axios from "axios";
import { IUser } from "../interfaces";
import { useCookies } from "react-cookie";

interface IProps {
	id: string;
}

const Follower: React.FC<IProps> = ({ id }) => {
	const [cookies, setCookies] = useCookies();
	const [profile, setProfile] = useState<IUser>(
		{
			_id: "",
			username: "",
			avatar: "",
			role: "",
			about: "",
			followers: [],
			following: [],
			marked: [],
			pinned: [],
		}
	);

	const followUser = async (userId: string) => {
		await axios.post(baseURL + '/users/follow/' + userId, {}, {
			headers: {
				"Content-Type": "application/json",
				token: cookies.token
			}
		});
		kickUser();
	}

	const unfollowUser = async (userId: string) => {
		await axios.delete(baseURL + '/users/follow/' + userId, {
			headers: {
				"Content-Type": "application/json",
				token: cookies.token
			}
		});
		kickUser();
	}

	const kickUser = async () => {
		const result = await axios.get(baseURL + "/users/profile", {
			headers: {
				"Content-Type": "application/json",
				token: cookies.token
			}
		});
		setCookies('user', result.data);
	}

	useEffect(() =>{
		const getProfile = async () => {
			const result = await axios.get(baseURL + "/users/" + id);
			const data: IUser = result.data;
			setProfile(data);
		}
		getProfile();
	}, [])
	return (
		<>
			<li>
				<div>
					<img src={profile.avatar} alt='' />
					<a href={'/profile/'+id}>{profile.username}</a>
				</div>
				{cookies.user.following.includes(id) ? (
					<Button label='Unfollow' color='red' onButtonClick={() => {unfollowUser(id)}}/>
				) : (
					<Button label='Follow' color='green' onButtonClick={() => {followUser(id)}}/>
				)}
			</li>
		</>
	);
};

export default Follower;