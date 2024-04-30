import React from "react"

interface IProps {
	label: string
	name: string
	placeholder?: string
	variant?: "inline"
}

const TextArea: React.FC<IProps> = ({ label, name, placeholder, variant }) => {

	return (
		<>
			<div className={`form-control ${variant}`}>
				<label htmlFor={name}>{label}</label>
				<textarea name="" id="" placeholder={placeholder}></textarea>
			</div>
		</>
	)
}

export default TextArea;