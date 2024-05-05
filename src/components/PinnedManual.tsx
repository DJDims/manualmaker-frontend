import React, { useState, useEffect } from "react";
import Tag from "./Tag";
import axios from "axios";
import { baseURL } from "../config";

interface IProps {
	id: string
}

interface IManual {
	title: string
	author: string
	thumbnail: string
	tags: string[]
}

const PinnedManual: React.FC<IProps> = ({ id }) => {
	const [manual, setManual] = useState<IManual>({
		title: "",
		author: "",
		thumbnail: "",
		tags: []
	});

	const getManual = async () => {
		const response = await axios.get(baseURL + '/manual/' + id);
		setManual(response.data)
	}

	useEffect(() =>{
		getManual()
	}, [])
	return (
		<>
			<div className="manual">
				<div className="header">
					<div className="title">
						<h4>{manual.title}</h4>
						<div className="badge public">public</div>
					</div>
					<div className="buttons">
						<a href="">
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2094_867)"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.875 5.46875L13.2812 14.0625L10.9375 11.7188L19.5312 3.125H15.625V0H25V9.375H21.875V5.46875ZM9.375 0V3.125H3.125V21.875H21.875V15.625H25V25H0V0H9.375Z" fill="white"/></g><defs><clipPath id="clip0_2094_867"><rect width="25" height="25" fill="white"/></clipPath></defs></svg>
						</a>
						<a href="">
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2094_869)"><path fill-rule="evenodd" clip-rule="evenodd" d="M25 12.7506V24.4048H0V1.09636H12.5V3.42721H2.50001V22.0739H22.5V12.7506H25ZM8.75001 13.1118L18.7775 3.7442L20.72 6.12282L10.5738 16.2468H8.75001V13.1118ZM6.25 18.5777H11.645L24.0287 6.12515L18.845 0.595238L6.25 12.1282V18.5777Z" fill="white" /></g><defs><clipPath id="clip0_2094_869"><rect width="25" height="23.8125" fill="white" transform="translate(0 0.59375)" /></clipPath></defs></svg>
						</a>
					</div>
				</div>
				<div className="tags">
					{/* {manual.tags.map(val => {
						return (

						)
					})} */}
				</div>
			</div>
		</>
	)
}

export default PinnedManual;