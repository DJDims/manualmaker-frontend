import Menu from "../components/Menu";
import PinnedManual from "../components/PinnedManual";
import { useCookies } from "react-cookie";
import Profile from "../components/Profile";

export default function UserProfile() {
	const [cookies, setCookie] = useCookies();
	return (
		<>
			<Menu />
			<div className='content content_profile'>
				<Profile />
				<div className='data'>
					<div className='about'>
						<h3>About me</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Phasellus blandit condimentum ipsum. Nam
							tortor risus, volutpat eget eleifend in, laoreet sed
							justo. Pellentesque habitant morbi tristique
							senectus et netus et malesuada fames ac turpis
							egestas. Etiam lobortis scelerisque nisi feugiat
							tempus. Suspendisse efficitur vel orci imperdiet
							cursus. Donec dictum mi ac erat sodales, quis
							accumsan diam eleifend. Fusce lacinia sodales nisi
							quis sollicitudin. Nam tincidunt placerat velit sit
							amet ultricies. Class aptent taciti sociosqu ad
							litora torquent per conubia nostra, per inceptos
							himenaeos.
						</p>
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
							{cookies.user.pinned.map((value) => {
								return <PinnedManual id={value} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}