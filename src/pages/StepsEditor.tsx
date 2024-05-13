import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

//components
import ButtonLink from "../components/ButtonLink";
import InputFile from "../components/InputFile";
import InputText from "../components/InputText";
import Menu from "../components/Menu";
import Tag from "../components/Tag";
import TextArea from "../components/TextArea";

//svg
import TextImg from "../assets/editor_elements/text.svg";
import ImageImg from "../assets/editor_elements/image.svg";
import LinkImg from "../assets/editor_elements/link.svg";
import FileImg from "../assets/editor_elements/file.svg";
import CodeImg from "../assets/editor_elements/code.svg";
import TimesImg from "../assets/times.svg";

//editor components
import EditorCode from "../components/steps_editor/Code";
import EditorText from "../components/steps_editor/Text";
import EditorCommand from "../components/steps_editor/Command";
import EditorTitle from "../components/steps_editor/Title";
import { baseURL } from "../config";
import axios from "axios";
import { useCookies } from "react-cookie";
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import Title from "../components/steps_editor/Title";

interface IStep {
	id: number;
	order: number;
	title: string;
	elements: Object[];
}

export default function StepsEditor() {
	const navigate = useNavigate();
	const { manualId } = useParams();
	const [cookies, setCookies, removeCookies] = useCookies();
	const [stepId, setStepId] = useState<number>(-1);
	const [elementId, setElementId] = useState<number>(-1);
	const [currentElement, setCurrentElement] = useState<string>("");
	const [steps, setSteps] = useState<IStep[]>([]);

	useEffect(() => {
		const getSteps = async () => {
			const response = await axios.get(baseURL + "/manuals/" + manualId, {
				headers: {
					token: cookies.token
				}
			});
			setSteps(response.data.steps);
		};
		if (cookies.steps) {
			setSteps(cookies.steps);
		} else {
			getSteps();
		}
	}, []);

	useEffect(() => {
		setCookies("steps", steps);
		console.log(steps);
		
	}, [steps]);

	const elements = [
		{ img: TextImg, type: "text", text: "Text" },
		// {img: ImageImg,	type:"image", 	text:"Image"},
		// {img: LinkImg,	type:"link", 	text:"Link"},
		// {img: FileImg,	type:"file", 	text:"File"},
		{ img: CodeImg, type: "code", text: "Code" },
		{ img: CodeImg, type: "command", text: "Command" }
	];

	const elementsInEditor = {
		title: <Title />,
		text: <EditorText />,
		// "image": <EditorImage/>,
		// link: <EditorLink/>,
		code: <EditorCode />,
		command: <EditorCommand />
	};

	const saveSteps = async () => {
		await axios.patch(
			baseURL + "/manuals/" + manualId,
			{ steps },
			{
				headers: {
					token: cookies.token
				}
			}
		);
		removeCookies("steps");
		navigate("/library");
	};

	const handleInput = (e, stepMemId, elementMemId) => {
		setSteps([
			...steps.filter((item) => {
				if (item.id === stepMemId) {
					item.elements[elementMemId].text = e.target.value;
				}
				return true;
			})
		]);
	};

	const handleCode = (e, stepMemId, elementMemId) => {
		setSteps([
			...steps.filter((item) => {
				if (item.id === stepMemId) {
					item.elements[elementMemId].code = e;
				}
				return true;
			})
		]);
	};

	function addStepHandler() {
		setSteps([...steps, { id: steps.length, order: 0, title: "", elements: [{id: 0, type:"title", text:""}] }]);
	}

	function removeStepHandler(i: number) {
		setSteps([...steps.filter((item) => item.id !== i)]);
	}

	return (
		<>
			<Menu />
			<div className='content content_steps_editor'>
				<div className='elements'>
					{elements.map((element, index) => {
						return (
							<div
								className='element'
								key={index}
								draggable={true}
								onDragStart={(e) => {
									setCurrentElement(element.type);
								}}
								onDragOver={(e) => {
									e.preventDefault();
								}}
								onDragEnd={(e) => {
									setSteps([
										...steps.filter((item) => {
											if (item.id === stepId) {
												item.elements.splice(elementId + 1, 0, { id: item.elements.length, type: currentElement, text: "" });
											}
											return true;
										})
									]);
								}}
							>
								<img src={element.img} alt={element.text} draggable={false} />
								{element.text}
							</div>
						);
					})}
				</div>
				<div className='steps'>
					{steps.map((step, i) => {
						return (
							<div
								className='step'
								key={i}
								onDragOver={(e) => {
									if (stepId !== i) setStepId(i);
								}}
								onDragLeave={(e) => {
									if (!e.currentTarget.contains(e.relatedTarget)) {
										setStepId(-1);
									}
								}}
							>
								<div className='step-header'>
									<img
										src={TimesImg}
										alt=''
										onClick={() => {
											removeStepHandler(step.id);
										}}
									/>
								</div>
								{step.elements.map((element, j) => {
									switch (element.type) {
										case "text":
											return React.cloneElement(elementsInEditor[element.type], {
												key: j,
												value: element.text,
												onDragOver: (e) => {
													e.currentTarget.style.boxShadow = "0px 6px 3px 0px #D65200";
													if (elementId !== j) setElementId(j);
												},
												onDragLeave: (e) => {
													e.currentTarget.style.boxShadow = "none";
												},
												onDragEnd: (e) => {
													e.currentTarget.style.boxShadow = "none";
												},
												onChange: (e) => {
													handleInput(e, i, j);
												}
											});
											break;

										case "code":
											return React.cloneElement(elementsInEditor[element.type], {
												key: j,
												value: element.code,
												onDragOver: (e) => {
													e.currentTarget.style.boxShadow = "0px 6px 3px 0px #D65200";
													if (elementId !== j) setElementId(j);
												},
												onDragLeave: (e) => {
													e.currentTarget.style.boxShadow = "none";
												},
												onDragEnd: (e) => {
													e.currentTarget.style.boxShadow = "none";
												},
												onChange: (e) => {
													handleCode(e, i, j);
												}
											});
											break;

										case "command":
											return React.cloneElement(elementsInEditor[element.type], {
												key: j,
												value: element.text,
												onDragOver: (e) => {
													e.currentTarget.style.boxShadow = "0px 6px 3px 0px #D65200";
													if (elementId !== j) setElementId(j);
												},
												onDragLeave: (e) => {
													e.currentTarget.style.boxShadow = "none";
												},
												onDragEnd: (e) => {
													e.currentTarget.style.boxShadow = "none";
												},
												onChange: (e) => {
													handleInput(e, i, j);
												}
											});
											break;
										case "title":
											return React.cloneElement(elementsInEditor[element.type], {
												key: j,
												value: element.text,
												onDragOver: (e) => {
													e.currentTarget.style.boxShadow = "0px 6px 3px 0px #D65200";
													if (elementId !== j) setElementId(j);
												},
												onDragLeave: (e) => {
													e.currentTarget.style.boxShadow = "none";
												},
												onDragEnd: (e) => {
													e.currentTarget.style.boxShadow = "none";
												},
												onChange: (e) => {
													handleInput(e, i, j);
												}
											});
											break;
									
										default:
											break;
									}
									// return React.cloneElement(elementsInEditor[element.type], {
									// 	key: j,
									// 	value: element.text,
									// 	onDragOver: (e) => {
									// 		e.currentTarget.style.boxShadow = "0px 6px 3px 0px #D65200";
									// 		if (elementId !== j) setElementId(j);
									// 	},
									// 	onDragLeave: (e) => {
									// 		e.currentTarget.style.boxShadow = "none";
									// 	},
									// 	onDragEnd: (e) => {
									// 		e.currentTarget.style.boxShadow = "none";
									// 	},
									// 	onChange: (e) => {
									// 		handleInput(e, i, j);
									// 	}
									// });
								})}
							</div>
						);
					})}
				</div>
			</div>
			<div className='buttons'>
				<Button label='Add new step' color='default' onButtonClick={addStepHandler} />
				<Button label='Save and exit' color='green' onButtonClick={saveSteps} />
				<Button
					label='Exit'
					color='red'
					onButtonClick={() => {
						removeCookies("steps");
						navigate("/library");
					}}
				/>
			</div>
		</>
	);
}
