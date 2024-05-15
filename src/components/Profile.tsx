import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { IUser } from "../interfaces";
import { useParams } from "react-router-dom";
import ButtonLink from "./ButtonLink";

interface IProps {
	user: IUser;
}

const Profile: React.FC<IProps> = ({user}) => {
	const {userId} = useParams();
	const [id, setId] = useState("");
	const [cookies] = useCookies();
	useEffect(()=>{
		if (!userId) {
			setId(cookies.user._id)
		} else {
			setId(userId)
		}
	}, [])
	return (
		<>
			<div className='user'>
				<img src={user.avatar} alt='user avatar' />
				<h3>{user.username}</h3>
				<div className='followers'>
					<a href={'/followers/'+id}>
						{user.followers.length} followers
					</a>
					<a href={'/following/'+id}>
						{user.following.length} following
					</a>
				</div>
				<ButtonLink label='Edit profile' color="default" path="/profile_edit"/>
			</div>
		</>
	);
};

export default Profile;
