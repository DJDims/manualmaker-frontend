import React, { useState } from "react"

interface IProps {
	label: string
	name: string
	placeholder?: string
	variant?: "inline"
	inputType?: "text" | "password" | "email"
	onInputChange : (value: string) => void
}

const InputText: React.FC<IProps> = ({ label, name, placeholder, variant, inputType, onInputChange }) => {
	const [value, setValue] = useState('');
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue(newValue);
		onInputChange(newValue);
	}
	return (
		<>
			<div className={`form-control ${variant}`}>
				<label htmlFor={name}>{label}</label>
				<input 
					type={inputType} 
					id={name} 
					name={name} 
					placeholder={placeholder ? placeholder : label}
					onChange={handleInput}
				/>
			</div>
		</>
	)
}

export default InputText;