import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import InputFile from "../components/InputFile";
import InputText from "../components/InputText";
import Menu from "../components/Menu";
import Tag from "../components/Tag";
import TextArea from "../components/TextArea";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../config";
import { IManual, ITag } from "../interfaces";
import { useCookies } from "react-cookie";
import TagById from "../components/TagById";

export default function ManualEditor() {
	const { manualId } = useParams<{ manualId: string }>();
	const [cookies] = useCookies();
	const _id = manualId !== undefined ? manualId : "";
	const navigate = useNavigate();
	const [tags, setTags] = useState<ITag[]>([]);
	const [currentTags, setCurrentTags] = useState<string[]>([]);
	const [currentTag, setCurrentTag] = useState<string>("");
	const [manual, setManual] = useState<IManual>({
		_id: _id,
		title: "",
		description: "",
		tags: [],
		steps: [],
		author: "",
		// createdAt: new Date(),
		// updatedAt: new Date()
	});

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
		const getManual = async () => {
			const response = await axios.get(baseURL + "/manuals/" + manualId);
			setManual(response.data);
		};
		getManual();
		getTags();
	}, []);

	useEffect(()=>{
		setCurrentTags(manual.tags)
	}, [manual])

	const goForward = async () => {
		axios.patch(baseURL + "/manuals/" + manualId, manual, {headers: {token: cookies.token}})
		navigate('/steps_editor/'+manual._id)
	};
	return (
		<>
			<Menu />
			<div className='content'>
				<div className='manual-settings'>
					<InputText
						label='Title'
						name='title'
						value={manual.title}
						onInputChange={(newVal) => {
							setManual({ ...manual, title: newVal });
						}}
					/>
					<TextArea
						label='Description'
						name='title'
						value={manual.description}
						onTextChange={(newVal) => {
							setManual({ ...manual, description: newVal });
						}}
					/>
					{/* <InputFile label='Tags' name='tags' variant='inline' /> */}
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
						<Button label='Go back' color='default' onButtonClick={() => {
								navigate("/library");
							}} />
						<Button
							label='Next'
							color='default'
							onButtonClick={goForward}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
