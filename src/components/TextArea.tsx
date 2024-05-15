import React from "react"

interface IProps {
	label: string
	name: string
	placeholder?: string
	variant?: "inline"
	value: string
	onTextChange: (newValue: string) => void
}

const TextArea: React.FC<IProps> = ({ label, name, placeholder, variant, value, onTextChange }) => {
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		onTextChange(event.target.value)
	}
	return (
		<>
			<div className={`form-control ${variant}`}>
				<label htmlFor={name}>{label}</label>
				<textarea name="" id="" placeholder={placeholder} onChange={handleChange} value={value}></textarea>
			</div>
		</>
	)
}

export default TextArea;