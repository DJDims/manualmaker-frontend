import { useCookies } from "react-cookie";

// import thumb from '../assets/thumb.png';

import Tag from "../components/Tag";
import Menu from "../components/Menu";
// import Radio, { RadioContainer } from "../components/Radio";
import InputText from "../components/InputText";
import InputColor from "../components/InputColor";
import Button from "../components/Button";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../config";
import Radio, { RadioContainer } from "../components/Radio";

interface ITag {
	_id: string;
	name: string;
	bgColor: string;
	txColor: boolean;
}

export default function TagControl() {
	const [cookies] = useCookies();
	const [tags, setTags] = useState<ITag[]>([]);
	const [dropStatus, setDropStatus] = useState<boolean>(false);
	const [newTag, setNewTag] = useState<ITag>({
		_id: "",
		name: "",
		txColor: false,
		bgColor: ""
	});

	const formHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (newTag.name.trim() === "" || newTag.txColor === undefined) return;
		const response = await axios.post(baseURL + "/tags", newTag, {
			headers: {
				"Content-Type": "application/json",
				token: cookies.token
			}
		});
		setTags([...tags, response.data]);
		setNewTag({_id: "", name: "", bgColor:"#000", txColor: false});
	};

	const getTags = async () => {
		const response = await axios.get(baseURL + "/tags");
		setTags(response.data);
	};
	
	const deleteTag = async (tagId: string) => {
		const response = await axios.delete(baseURL + "/tags/" + tagId);
		getTags();
	}

	useEffect(() => {
		getTags();
	}, []);

	return (
		<>
			<Menu />
			<div className='content tag_control'>
				<form
					className='tag_panel'
					onSubmit={(e) => {
						formHandler(e);
					}}
				>
					<InputText
						label='Tag name'
						name='tagname'
						value={newTag.name}
						onInputChange={(newValue) => {
							setNewTag({ ...newTag, name: newValue });
						}}
					/>
					<InputColor
						label='Tag color'
						name='tagcolor'
						onInputChange={(e) => {
							setNewTag({ ...newTag, bgColor: e });
						}}
					/>
					<div className={`form-control inline`}>
						<div className='radio'>
							<input
								type='radio'
								id="true"
								value="true"
								name="txColor"
								onChange={()=>{
									console.log("switch to white");
									setNewTag({...newTag, txColor:true})}}
							/>
							<label htmlFor="true">white</label>
						</div>
						<div className='radio'>
							<input
								type='radio'
								id="false"
								value="false"
								name="txColor"
								onChange={()=>{
									console.log("switch to black");
									
									setNewTag({...newTag, txColor:false})}}
							/>
							<label htmlFor="false">black</label>
						</div>
					</div>
					<Button label='Add' type='submit' color='default' />
				</form>
				<div className='tag_pool'>
					{tags.map((tag, i) => {
						return <div 
							className="tag"
							key={i}
							style={{backgroundColor: tag.bgColor, color: tag.txColor ? '#fff' : '#000'}}
							draggable={true}
							onDragEnd={()=>{
								if (dropStatus) {
									deleteTag(tag._id);
								}
							}}
							>{tag.name}</div>
					})}
				</div>
			</div>
			<div 
				className="deleteZone"
				onDragOver={(e: any) => {
					e.currentTarget.style.backgroundColor = "red";
					setDropStatus(true)
				}}
				onDragLeave={(e: any) => {
					e.currentTarget.style.backgroundColor = "transparent";
					setDropStatus(false)
				}}
			>Drag here to delete</div>
		</>
	);
}
