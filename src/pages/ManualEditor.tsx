import { useParams } from "react-router-dom";
import Button from "../components/Button";
import InputFile from "../components/InputFile";
import InputText from "../components/InputText";
import Menu from "../components/Menu";
import Tag from "../components/Tag";
import TextArea from "../components/TextArea";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../config";
import { IManual } from "../interfaces";

export default function ManualEditor() {
	const { manualId } = useParams<{manualId: string}>();
	const _id = manualId !== undefined ? manualId : '';
	const [manual, setManual] = useState<IManual>({
		_id: _id,
		title: "",
		description: "",
		tags: [],
		author: "",
		createdAt: "",
		updatedAt: ""
	});

	useEffect(() => {
		const getManual = async () => {
			const response = await axios.get(baseURL + "/manual/" + manualId);
			setManual(response.data);
		};
		getManual();
	}, []);
	return (
		<>
			<Menu />
			<div className='content'>
				<form className='manual-settings'>
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
					<InputFile label='Tags' name='tags' variant='inline' />
					{/* <div className="manualTags">
						<InputText label='Tags' name='tags' variant='inline' />
						<div className="tags">
							<Tag name="javascript" bgColor="#efd81d" txColor={false} />
							<Tag name="typescript" bgColor="#2F74C0" txColor={true} />
							<Tag name="nest.js" bgColor="#D9224C" txColor={true} />
						</div>
					</div> */}
					<div className='buttons'>
						<Button label='Go back' color='default' />
						<Button label='Next' color='default' />
					</div>
				</form>
			</div>
		</>
	);
}
