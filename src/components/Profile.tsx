import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { IUser } from "../interfaces";
import { useParams } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import Button from "./Button";
import axios from "axios";
import { baseURL } from "../config";

interface IProps {
	user: IUser;
}

const Profile: React.FC<IProps> = ({ user }) => {
	const { userId } = useParams();
	const [id, setId] = useState("");
	const [cookies, setCookies] = useCookies();
	useEffect(() => {
		if (!userId) {
			setId(cookies.user._id);
		} else {
			setId(userId);
		}
	}, []);

	const follow = async () =>{
		const response = await axios.post(baseURL + "/users/follow/" + userId, {}, {
			headers: {
				token: cookies.token
			}
		})
		setCookies('user', response.data);
	}
	const unfollow = async () =>{
		const response = await axios.delete(baseURL + "/users/follow/" + userId, {
			headers: {
				token: cookies.token
			}
		})
		setCookies('user', response.data);
	}

	return (
		<>
			<div className='user'>
				<img src={user.avatar} alt='user avatar' />
				<h3>{user.username}</h3>
				<div className='followers'>
					<a href={"/followers/" + id}>{user.followers.length} followers</a>
					<a href={"/following/" + id}>{user.following.length} following</a>
				</div>
				{userId === cookies.user._id || userId === undefined ? (
					<ButtonLink label='Edit profile' color='default' path='/profile_edit' />
				) : (
					cookies.user.following.includes(userId) ? (
						<Button label='Unfollow' color='red' onButtonClick={unfollow}/>
					) : (
						<Button label='Follow' color='green' onButtonClick={follow}/>
					)
				) }
			</div>
		</>
	);
};

export default Profile;
