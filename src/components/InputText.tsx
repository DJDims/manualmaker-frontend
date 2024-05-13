import React, { useState } from "react"

interface IProps {
	label: string
	name: string
	placeholder?: string
	variant?: "inline"
	inputType?: "text" | "password" | "email"
	onInputChange : () => void
}

const InputText: React.FC<IProps> = ({ label, name, placeholder, variant, inputType, onInputChange }) => {
	return (
		<>
			<div className={`form-control ${variant}`}>
				<label htmlFor={name}>{label}</label>
				<input 
					type={inputType} 
					id={name} 
					name={name} 
					placeholder={placeholder ? placeholder : label}
					onChange={onInputChange}
				/>
			</div>
		</>
	)
}

export default InputText;