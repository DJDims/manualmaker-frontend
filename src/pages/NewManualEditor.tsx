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

export default function NewManualEditor() {
	const [cookies, setCookies] = useCookies();
	const [manual, setManual] = useState({
		title: "",
		description:"",
		author: cookies.user._id
	});
	const navigate = useNavigate();

	const nextHandler = async () => {
		const response = await axios.post(baseURL + "/manuals/", manual, {
			headers: {
				token: cookies.token
			}
		})
		navigate("/steps_editor/"+response.data._id);
	};

	return (
		<>
			<Menu />
			<div className="content">
				<form className="manual-settings">
					<InputText label="Title" name="title" onInputChange={(e)=>{
						setManual({...manual, title: e.target.value})
					}}/>
					<TextArea label="Description" name="title" onTextChange={(e)=>{
						setManual({...manual, description: e.target.value})
					}}></TextArea>
					<InputFile label="Tags" name="tags" variant="inline" />
					<div className="manualTags">
						<InputText label="Tags" name="tags" variant="inline" />
						<div className="tags">
							<Tag name="javascript" bgColor="#efd81d" txColor={false} />
							<Tag name="typescript" bgColor="#2F74C0" txColor={true} />
							<Tag name="nest.js" bgColor="#D9224C" txColor={true} />
						</div>
					</div>
					<div className="buttons">
						<Button
							label="Go back"
							color="default"
							onButtonClick={() => {
								navigate("/myLibrary");
							}}
						/>
						<Button label="Next" color="default" onButtonClick={nextHandler} />
					</div>
				</form>
			</div>
		</>
	);
}
