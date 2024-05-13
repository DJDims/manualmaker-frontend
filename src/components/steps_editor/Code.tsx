import React, { useEffect, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

interface IProps {
	value: string;
	onChange: () => void;
	onDragOver: () => void;
	onDragLeave: () => void;
	onDragEnd: () => void;
}

const Code: React.FC<IProps> = ({ value, onDragOver, onDragLeave, onDragEnd, onChange }) => {
	const [codeElement, setCodeElement] = useState({
		code: "",
		filename: "",
		language: ""
	});

	// useEffect(()=>{
	// 	console.log(codeElement);
		
	// },[codeElement])

	const languages = ["javascript", "typescript", "java", "html", "css", "scss", "python", "go", "ruby", "C", "C#", "C++", "PHP", "Kotlin"];
	return (
		<>
			<div className='steps_editor_code' onDragOver={onDragOver} onDragLeave={onDragLeave} onDragEnd={onDragEnd}>
				<div className='header'>
					<div className='file'>Code element</div>
					{/* <div className='file'>index.js</div> */}
					{/* <select onChange={(e) => {
						setCodeElement({ ...codeElement, language: e.target.selectedOptions[0].value });
					}}>
						{languages.map((language, index) => {
							return (
								<option value={language} key={index}>
									{language}
								</option>
							);
						})}
					</select> */}
					<div className='copy'>copy</div>
				</div>
				<Editor
					defaultLanguage='javascript'
					height={"200px"}
					defaultValue={value}
					onChange={onChange}
					// onChange={(e) => {
					// 	setCodeElement({ ...codeElement, code: e });
					// }}
				/>
				{/* <textarea className='body'>{value}</textarea> */}
			</div>
		</>
	);
};

export default Code;
