import Tag from "../components/Tag";
import Menu from "../components/Menu";
import Select, { Option } from "../components/Select";
import Radio, { RadioContainer } from "../components/Radio";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { IManual } from "../interfaces";
import axios from "axios";
import { baseURL } from "../config";
import { format } from "date-fns";
import TagById from "../components/TagById";

export default function Search() {
	const [manuals, setManuals] = useState<IManual[]>([]);
	const [keyword, setKeyword] = useState("");

	const getManuals = async () => {
		const response = await axios.get(baseURL + "/manuals/");
		setManuals(response.data);
	};

	useEffect(() => {
		getManuals();
	}, []);

	const regex = new RegExp(keyword, 'i');

	return (
		<>
			<Menu />
			<div className='content content_profile'>
				<div className='library mylibrary gloablSeacrh'>
					<div className='search'>
						<Select label='Sort by:' name='' variant='inline'>
							<Option value='Date created'></Option>
							<Option value='Date modified'></Option>
						</Select>
						{/* <RadioContainer variant="inline">
							<Radio label="Ascending" name="sort" value="asc" check={true}/>
							<Radio label="Descending" name="sort" value="desc"/>
						</RadioContainer> */}
						<InputText
							label='Keyword'
							name='keyword'
							variant='inline'
							value={keyword}
							onInputChange={(newval) => {
								setKeyword(newval);
							}}
						/>
					</div>
					{/* <div className="searchTags">
						<InputText label='Tags' name='tags' variant='inline' />
						<div className="tags">
							<Tag name="javascript" bgColor="#efd81d" txColor={false} />
							<Tag name="typescript" bgColor="#2F74C0" txColor={true} />
							<Tag name="nest.js" bgColor="#D9224C" txColor={true} />
						</div>
					</div> */}
					<div className='manuals'>
						{manuals.filter(manual => {
							if(regex.test(manual.title) || regex.test(manual.description)) return true
						}).map((manual, index) => {
							return (
								<div className='manual' key={index}>
									{/* <img src={manual.} alt="" /> */}
									<div className='info'>
										<div className='header'>
											<a className='title' href={`/view_manual/${manual._id}`}>
												{manual.title}
											</a>
											{/* <p className='date'>Modified: {format(manual.updatedAt, 'dd-mm-yyyy')}</p> */}
										</div>
										<p className='description'>{manual.description}</p>
										<div className="tags">
											{manual.tags.map((item, index)=>{
												return <TagById id={item} key={index}/>
											})}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
