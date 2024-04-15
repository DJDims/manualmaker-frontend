import Menu from '../components/Menu';

export default function Main() {

	return (
		<>
			<Menu/>
			<div className='main content'>
				<p className='title'>Create a user manual</p>
				<p className='sub-title'>Study and learn more efficiently with ManualMaker</p>
				<button>Get started!</button>
			</div>
		</>
	)
}