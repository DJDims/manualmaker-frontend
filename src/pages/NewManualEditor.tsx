import Button from "../components/Button";
import InputFile from "../components/InputFile";
import InputText from "../components/InputText";
import Menu from "../components/Menu";
import Tag from "../components/Tag";
import TextArea from "../components/TextArea";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../config";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { IManual, ITag } from "../interfaces";
import TagById from "../components/TagById";

export default function NewManualEditor() {
	const [cookies, setCookies] = useCookies();
	const [manual, setManual] = useState<IManual>({
		_id: "",
		title: "",
		description: "",
		tags: [],
		steps: [],
		author: "",
		// createdAt: new Date(),
		// updatedAt: new Date()
	});
	const [tags, setTags] = useState<ITag[]>([]);
	const [currentTags, setCurrentTags] = useState<string[]>([]);
	const [currentTag, setCurrentTag] = useState<string>("");
	const navigate = useNavigate();

	const nextHandler = async () => {
		const response = await axios.post(baseURL + "/manuals/", manual, {
			headers: {
				token: cookies.token
			}
		});
		console.log(response);

		navigate("/steps_editor/" + response.data._id);
	};

	const getTags = async () => {
		const response = await axios.get(baseURL + "/tags");
		setTags(response.data);
	};
	const addTagHandler = () => {
		tags.filter(tag => {
			if (tag.name === currentTag) {
				setCurrentTags([...currentTags, tag._id])
				return false;
			}
			return true;
		})
		setManual({...manual, tags:[...currentTags]})
		setCurrentTag('')
	};
	useEffect(() => {
		getTags();
	}, []);

	return (
		<>
			<Menu />
			<div className='content'>
				<div className='manual-settings'>
					<InputText
						label='Title'
						name='title'
						value={manual.title}
						onInputChange={(newval) => {
							setManual({ ...manual, title: newval });
						}}
					/>
					<TextArea
						label='Description'
						name='title'
						value={manual.description}
						onTextChange={(newval) => {
							setManual({ ...manual, description: newval });
						}}
					/>
					{/* <div>
						<img src="" alt="" />
						<InputFile label='Thumbnail' name='thumbnail' variant='inline' />
					</div> */}
					<div className='manualTags'>
						<div>
							<InputText
								label='Tags'
								name='tags'
								variant='inline'
								value={currentTag}
								list='tagslist'
								onInputChange={(newVal) => {
									setCurrentTag(newVal);
								}}
							/>
							<datalist id='tagslist'>
								{tags.filter(tag => {
									if(currentTags.includes(tag._id)) {
										return false
									}
									return true
								}).map((tag, index) => {
									return <option key={index}>{tag.name}</option>;
								})}
							</datalist>
							<Button color='green' label='Add' onButtonClick={addTagHandler} />
						</div>

						<div className='tags'>
							{currentTags.map((tag, index) => {
								return <TagById key={index} id={tag} />
							})}
						</div>
					</div>
					<div className='buttons'>
						<Button
							label='Go back'
							color='default'
							onButtonClick={() => {
								navigate("/myLibrary");
							}}
						/>
						<Button label='Next' color='default' onButtonClick={nextHandler} />
					</div>
				</div>
			</div>
		</>
	);
}
