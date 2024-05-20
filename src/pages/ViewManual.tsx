import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../config";
import axios from "axios";
import Menu from "../components/Menu";
import Editor from "@monaco-editor/react";
import { IUser, IManual } from "../interfaces";

export default function ViewManual() {
	const { manualId } = useParams();
	const [manual, setManual] = useState<IManual>({
		_id: "",
		title: "",
		description: "",
		tags: [],
		steps: [],
		author: "",
		// createdAt: "",
		// updatedAt: "",
	});
	const [user, setUser] = useState<IUser>({
		_id: "",
		username: "",
		avatar: "",
		role: "",
		about: "",
		followers: [],
		following: [],
		marked: [],
		pinned: []
	})
	const getManual = async ()=>{
		const response = await axios.get(baseURL + "/manuals/"+manualId);
		setManual(response.data);
		const res = await axios.get(baseURL + "/users/"+response.data.author);
		setUser(res.data);
	}
	useEffect(()=>{
		getManual();
	}, [])
	return (
		<>
			<Menu/>
			<div className='view_manual'>
				<h1>{manual.title}</h1>
				<h3>by <a href={`/profile/${manual.author}`}>{user.username}</a></h3>
				<div className='viewPort'>
					<div className='sideMenu'>
						<ul className='steps_links'>
							{manual.steps.map((step, index)=>{
								return (
									<li key={index}><a href={`#step${index}`}>{step.elements[0].text}</a></li>
								)
							})}
						</ul>
					</div>
					<div className='steps'>
						{manual.steps.map((step, index)=>{
							return (
								<div className='step' id={`step${index}`} key={index}>
									<h2>{step.title}</h2>
									{step.elements.map((element, index2) => {
										switch(element.type) {
											case "title" :
												return (
													<h2 className="title" key={index2}>{element.text}</h2>
												)
											case "text" :
												return (
													<p className="text" key={index2}>{element.text}</p>
												)
											case "code" :
												return (
													<Editor
														key={index2}
														defaultLanguage='javascript'
														defaultValue={element.code}
														height={"200px"}
														theme="vs-dark"
														
													/>
												)
											case "command" :
												return (
													<div className="command" key={index2}>{element.text}</div>
												)
										}
									})}
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	);
}
