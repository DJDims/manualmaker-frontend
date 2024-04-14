import React from "react"

interface IProps {
	name: string,
	bgColor: string,
	txColor: boolean
}

const Tag: React.FC<IProps> = ({name, bgColor, txColor}) => {

	return (
		<>
			<div className="tag" style={{backgroundColor: bgColor, color: txColor ? '#fff' : '#000'}}>{name}</div>
		</>
	)
}

export default Tag;