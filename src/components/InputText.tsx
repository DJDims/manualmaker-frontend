import React from "react"

interface IProps {
	label: string
	name: string
	placeholder?: string
	variant?: "inline"
}

const InputText: React.FC<IProps> = ({ label, name, placeholder, variant }) => {

	return (
		<>
			<div className={`form-control ${variant}`}>
				<label htmlFor={name}>{label}</label>
				<input 
					type="text" 
					id={name} 
					name={name} 
					placeholder={placeholder ? placeholder : label} 
				/>
			</div>
		</>
	)
}

export default InputText;