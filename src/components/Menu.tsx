import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

interface IProps {}

interface IMenuItem {
	href: string;
	label: string;
}

const Menu: React.FC<IProps> = () => {
	const [cookies, setCookie] = useCookies();

	const [currentPath, setCurrentPath] = useState(window.location.pathname);
	const [menu, setMenu] = useState<IMenuItem[]>([]);

	const guest_menu_items = [
		{ href: "/", label: "Home" },
		{ href: "/search", label: "Search" }
	];

	const user_menu_items = [
		{ href: "/library", label: "My library" },
		{ href: "/favorites", label: "Favorites" }
	];

	const admin_menu_items = [{ href: "/tags", label: "Tags" }];

	useEffect(() => {
		setCurrentPath(window.location.pathname);
		if (cookies.user) {
			switch (cookies.user.role) {
				case "admin":
					setMenu([
						...menu,
						...guest_menu_items,
						...user_menu_items,
						...admin_menu_items
					]);
					break;
				case "user":
					setMenu([...menu, ...guest_menu_items, ...user_menu_items]);
					break;
			}
		} else {
			setMenu([...menu, ...guest_menu_items]);
		}
	}, []);

	const isActive = (path: string) => {
		return currentPath === path ? "active" : "";
	};

	return (
		<>
			<div className='menu'>
				<h1 className='collapsed'>mm</h1>
				<h1>manualmaker</h1>
				<ul className='menu_list'>
					{menu.map((item, index) => {
						return (
							<li
								className={`menu_item ${isActive(item.href)}`}
								key={index}
							>
								<Link to={item.href} className='menu_link'>
									{item.label}
								</Link>
							</li>
						);
					})}
				</ul>
				<ul className='menu_list menu_list_end'>
					{cookies.user ? (
						<>
							<li className={`menu_item ${isActive('/profile')}`}>
								<Link to='/profile' className='menu_link'>
									{cookies.user.username}
								</Link>
								<img src={cookies.user.avatar} alt='avatar' />
							</li>
							<li className='menu_item'>
								<Link to='/logout' className='menu_link'>
									Logout
								</Link>
							</li>
						</>
					) : (
						<>
							<li className={`menu_item ${isActive("/login")}`}>
								<Link to='/login' className='menu_link'>
									Login
								</Link>
							</li>
							<li
								className={`menu_item ${isActive("/register")}`}
							>
								<Link to='/register' className='menu_link'>
									Register
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</>
	);
};

export default Menu;
