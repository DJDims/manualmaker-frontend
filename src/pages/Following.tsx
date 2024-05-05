import Menu from '../components/Menu';
import Button from '../components/Button';
import { useCookies } from 'react-cookie';
import Follower from '../components/Follower';
import Profile from '../components/Profile';

export default function Following() {
	const [cookies, setCookie] = useCookies();

	return (
		<>
			<Menu />
			<div className="content content_profile">
				<Profile />
				<div className="friends">
					<h3>You following</h3>
					<ul>
						{cookies.user.following.map((element, index) => {
							return <Follower id={element} key={index}/>
						})}
					</ul>
				</div>
			</div>
		</>
	)
}