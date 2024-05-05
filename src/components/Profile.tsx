import React from "react";
import { useCookies } from "react-cookie";

interface IProps {}

const Profile: React.FC<IProps> = () => {
	const [cookies, setCookie] = useCookies();

	return (
		<>
			<div className='user'>
				<img src={cookies.user.avatar} alt='user avatar' />
				<h3>{cookies.user.username}</h3>
				<div className='followers'>
					<a href='/followers'>
						{cookies.user.followers.length} followers
					</a>
					<a href='/following'>
						{cookies.user.following.length} following
					</a>
				</div>
			</div>
		</>
	);
};

export default Profile;
