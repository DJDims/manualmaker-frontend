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

interface ITag {
	name: string;
	bgColor: string;
	txColor: boolean;
}

export default function TagControl() {
	const [cookies] = useCookies();
	const [tags, setTags] = useState<ITag[]>([]);
	const [newTag, setNewTag] = useState<ITag>({
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
	};

	const getTags = async () => {
		const response = await axios.get(baseURL + "/tags");
		setTags(response.data);
	};

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
					{/* <RadioContainer variant="inline">
						<Radio label="white" name="txColor" value="true" check={true} onRadioChange={()=>{setNewTag({...newTag, txColor:true})}}/>
						<Radio label="black" name="txColor" value="false" onRadioChange={()=>{setNewTag({...newTag, txColor:false})}}/>
					</RadioContainer> */}
					<Button label='Add' type='submit' color='default' />
				</form>
				<div className='tag_pool'>
					{tags.map((tag, i) => {
						return <Tag key={i} bgColor={tag.bgColor} name={tag.name} txColor={tag.txColor} />;
					})}
				</div>
			</div>
		</>
	);
}
