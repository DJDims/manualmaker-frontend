import React, { useEffect, useState } from "react"
import { baseURL } from "../config";
import axios from "axios";

interface IProps {
	id: string,
}

const TagById: React.FC<IProps> = ({id}) => {
	const [tag, setTag] = useState({
		bgColor: "",
		txColor: false,
		name: ""
	});
	const getTag = async () => {
		const response = await axios.get(baseURL + "/tags/" + id)
		setTag(response.data)
	}

	useEffect(()=>{
		getTag()
	}, [])
	return (
		<>
			<div className="tag" style={{backgroundColor: tag.bgColor, color: tag.txColor ? '#fff' : '#000'}}>{tag.name}</div>
		</>
	)
}

export default TagById;