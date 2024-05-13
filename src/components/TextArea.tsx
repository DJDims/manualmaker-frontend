import React from "react"

interface IProps {
	label: string
	name: string
	placeholder?: string
	variant?: "inline"
	onTextChange: ()=>void
}

const TextArea: React.FC<IProps> = ({ label, name, placeholder, variant, onTextChange }) => {

	return (
		<>
			<div className={`form-control ${variant}`}>
				<label htmlFor={name}>{label}</label>
				<textarea name="" id="" placeholder={placeholder} onChange={onTextChange}></textarea>
			</div>
		</>
	)
}

export default TextArea;