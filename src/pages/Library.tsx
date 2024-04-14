import avatar1 from '../assets/avatar1.png';
import thumb from '../assets/thumb.png';
import Tag from '../components/Tag';


export default function Library() {

	return (
		<>
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
						<div>
							<label>Sort by:</label>
							<select name="" id="">
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div>
							<input type="radio" value="Ascending" />
							<input type="radio" value="Descending" />
						</div>
						<div>
							<label>Keyword</label>
							<input type="text" />
						</div>
					</div>
					<div className="manuals">
						<div className="manual">
							<img src={thumb} alt="" />
							<div>
								<div className="title">
									<a href=""><h3>NestJS cheat sheet</h3></a>
									<div className="buttons">
										<a href="">
											<img src="" alt="" />
										</a>
										<a href="">
											<img src="" alt="" />
										</a>
									</div>
								</div>
								<div className="dates">
									<p className="date">Created: 15.03.24</p>
									<p className="date">Modified: 15.03.24</p>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit nisl augue, vitae fringilla enim porttitor ut. Proin at rhoncus nibh. Integer sit amet dui sit amet purus suscipit dignissim sit amet eleifend nulla. Vivamus porttitor cursus varius...</p>
								<div className="tags">
									<Tag name="Javascript" bgColor="#efd81d" txColor={false} />
									<Tag name="Javascript" bgColor="#efd81d" txColor={false} />
									<Tag name="Javascript" bgColor="#efd81d" txColor={false} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}