import { useCookies } from "react-cookie";

// import avatar1 from '../assets/avatar1.png';
import thumb from '../assets/thumb.png';

import Tag from '../components/Tag';
import Menu from '../components/Menu';
import Select, { Option } from '../components/Select';
import Radio, { RadioContainer } from '../components/Radio';
import InputText from '../components/InputText';
import ButtonLink from '../components/ButtonLink';
import Profile from "../components/Profile";
import { useEffect, useState } from "react";
import { baseURL } from "../config";
import axios from "axios";
import {parseISO, formatISO} from "date-fns"

import { IManual } from "../interfaces";
import TagById from "../components/TagById";

export default function Library() {
	const [cookies, setCookie] = useCookies();
	const [manuals, setManuals] = useState<IManual[]>([]);
	const [keyword, setKeyword] = useState("");

	const getManuals = async ()=>{
		const response = await axios.get(baseURL+"/manuals/user/"+cookies.user._id);
		setManuals(response.data);
	}

	useEffect(()=>{
		getManuals();
	}, [])

	const regex = new RegExp(keyword, 'i');

	return (
		<>
			<Menu />
			<div className="content content_profile">
				<Profile user={cookies.user}/>
				<div className="library">
					<div className="search">
						<Select label='Sort by:' name='' variant='inline'>
							<Option value="Date created"></Option>
							<Option value="Date modified"></Option>
						</Select>
						{/* <RadioContainer variant="inline">
							<Radio label="Ascending" name="sort" value="asc" check={true}/>
							<Radio label="Descending" name="sort" value="desc"/>
						</RadioContainer> */}
						<InputText label='Keyword' name='keyword' variant='inline' onInputChange={(newVal => {
							setKeyword(newVal)
						})} value={keyword}/>
						<ButtonLink label="New" color="green" path='new_manual'></ButtonLink>
					</div>
					<div className="manuals">
						{manuals.filter(manual => {
							if(regex.test(manual.title) || regex.test(manual.description)) return true
						}).map((manual, index) =>{
							return (
								<div className="manual" key={index}>
									{/* <img src={thumb} alt="" /> */}
									<div className='info'>
										<a className="title" href={'/view_manual/'+manual._id}>{manual.title}</a>
										<div className="dates">
											<a href={`/manual_editor/${manual._id}`}>Edit</a>
											{/* <p className="date">Created: {}</p> */}
											{/* <p className="date">Created: {formatISO(manual.createdAt, {format:'basic'})}</p> */}
											{/* <p className="date">Modified: {manual.updatedAt}</p> */}
										</div>
										<p className='description'>{manual.description}</p>
										<div className="tags">
											{manual.tags.map((item, index)=>{
												return <TagById id={item} key={index}/>
											})}
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}