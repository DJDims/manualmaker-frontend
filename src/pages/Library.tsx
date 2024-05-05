import { useCookies } from "react-cookie";

import avatar1 from '../assets/avatar1.png';
import thumb from '../assets/thumb.png';

import Tag from '../components/Tag';
import Menu from '../components/Menu';
import Select, { Option } from '../components/Select';
import Radio, { RadioContainer } from '../components/Radio';
import InputText from '../components/InputText';
import ButtonLink from '../components/ButtonLink';
import Profile from "../components/Profile";

export default function Library() {
	const [cookies, setCookie] = useCookies();

	return (
		<>
			<Menu />
			<div className="content content_profile">
				<Profile />
				<div className="library">
					<div className="search">
						<Select label='Sort by:' name='' variant='inline'>
							<Option value="Date created"></Option>
							<Option value="Date modified"></Option>
						</Select>
						<RadioContainer variant="inline">
							<Radio label="Ascending" name="sort" value="asc" check={true}/>
							<Radio label="Descending" name="sort" value="desc"/>
						</RadioContainer>
						<InputText label='Keyword' name='keyword' variant='inline' />
						<ButtonLink label="New" color="green" path='manual_editor'></ButtonLink>
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
									<Tag name="typescript" bgColor="#2F74C0" txColor={true} />
									<Tag name="nest.js" bgColor="#D9224C" txColor={true} />
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
									<Tag name="typescript" bgColor="#2F74C0" txColor={true} />
									<Tag name="nest.js" bgColor="#D9224C" txColor={true} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}