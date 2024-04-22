import avatar1 from '../assets/avatar1.png';
import thumb from '../assets/thumb.png';

import Menu from '../components/Menu';
import Button from '../components/Button';

export default function Followers() {

	return (
		<>
			<Menu />
			<div className="content content_profile">
				<div className="user">
					<img src={avatar1} alt="" />
					<h3>4umba</h3>
					<div className="followers">
						<a href="/followers">12 followers</a>
						<a href="/following">5 following</a>
					</div>
				</div>
				<div className="friends">
					<h3>Follow you</h3>
					<ul>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
						<li>
							<div>
								<img src={avatar1} alt="" />
								<p>Portalfoxy</p>
							</div>
							<Button label='Follow' color='green' />
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}