import { useState, useEffect } from 'react';
import avatar1 from '../assets/avatar1.png';
// import avatar2 from '../assets/avatar2.png';
// import lines from '../assets/lines.svg';

export default function Menu() {
	const menu_items = [
		{ "href": "/home", 		"label": "Home" },
		{ "href": "/library", 	"label": "My library" },
		{ "href": "/favorites", "label": "Favorites" },
		{ "href": "/tags", 		"label": "Tags" },
		{ "href": "/search", 	"label": "Search" },
	]

	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, [])

	const isActive = (path: string) => {
		return currentPath === path ? 'active' : '';
	}

	return (
		<>
			<div className="menu">
				<h1 className='collapsed'>mm</h1>
				<h1>manualmaker</h1>
				<ul className='menu_list'>
					{menu_items.map((item) => {
						return (
							<li className={`menu_item ${isActive(item.href)}`}>
								<a href={item.href} className="menu_link">{item.label}</a>
							</li>
						)
					})}
				</ul>
				<ul className="menu_list menu_list_end">
					{/* {logined ? (
						<>
							<li className="menu_item">
								<a href="#" className="menu_link">4umba</a>
								<img src={avatar1} alt="avatar" />
							</li>
							<li className="menu_item">
								<a href="#" className="menu_link">Logout</a>
							</li>
						</>
					) : ( */}
						<>
							<li className={`menu_item ${isActive("/login")}`}>
								<a href="/login" className="menu_link">Login</a>
							</li>
							<li className={`menu_item ${isActive("/register")}`}>
								<a href="/register" className="menu_link">Register</a>
							</li>
						</>
					{/* )
					} */}

				</ul>
			</div>
		</>
	)
}