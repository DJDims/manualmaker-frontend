import avatar1 from '../assets/avatar1.png';
import thumb from '../assets/thumb.png';
import Tag from '../components/Tag';
import Menu from '../components/Menu';


export default function Library() {

	return (
		<>
			<Menu/>
			<div className="content content_profile">
				<div className="user">
					<img src={avatar1} alt="" />
					<h3>4umba</h3>
					<div className="followers">
						<a href="">12 followers</a>
						<a href="">5 following</a>
					</div>
				</div>
				<div className="library">
					<div className="search">
						<div className='form-control inline'>
							<label>Sort by:</label>
							<select name="" id="">
								<option value="">Date created</option>
								<option value="">Date modified</option>
							</select>
						</div>
						<div className='form-control inline'>
							<div className='radio'>
								<input type="radio" id='asc' value="Ascending" name='sort' checked/>
								<label htmlFor="asc">Ascending</label>
							</div>
							<div className='radio'>
								<input type="radio" id='desc' value="Descending" name='sort'/>
								<label htmlFor="desc">Descending</label>
							</div>
						</div>
						<div className='form-control inline'>
							<label>Keyword</label>
							<input type="text" />
						</div>
					</div>
					<div className="manuals">
						<div className="manual">
							<img src={thumb} alt="" />
							<div className='info'>
								<a className="title" href="">NestJS cheat sheet</a>
								<div className="dates">
									<p className="date">Created: 15.03.24</p>
									<p className="date">Modified: 15.03.24</p>
								</div>
								<p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit nisl augue, vitae fringilla enim porttitor ut. Proin at rhoncus nibh. Integer sit amet dui sit amet purus suscipit dignissim sit amet eleifend nulla. Vivamus porttitor cursus varius...</p>
								<div className="tags">
									<Tag name="javascript" bgColor="#efd81d" txColor={false} />
									<Tag name="typescript" bgColor="#2F74C0" txColor={false} />
									<Tag name="nest.js" bgColor="#D9224C" txColor={false} />
								</div>
							</div>
						</div>
						<div className="manual">
							<div className='info'>
								<a className="title" href="">NestJS cheat sheet</a>
								<div className="dates">
									<p className="date">Created: 15.03.24</p>
									<p className="date">Modified: 15.03.24</p>
								</div>
								<p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit nisl augue, vitae fringilla enim porttitor ut. Proin at rhoncus nibh. Integer sit amet dui sit amet purus suscipit dignissim sit amet eleifend nulla. Vivamus porttitor cursus varius...</p>
								<div className="tags">
									<Tag name="javascript" bgColor="#efd81d" txColor={false} />
									<Tag name="typescript" bgColor="#2F74C0" txColor={false} />
									<Tag name="nest.js" bgColor="#D9224C" txColor={false} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}