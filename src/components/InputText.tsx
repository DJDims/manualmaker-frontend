import React from "react"

interface IProps {
	label: string
	name?: string
	placeholder?: string
	variant?: "inline"
	inputType?: "text" | "password" | "email"
	value: string
	onInputChange : (newValue: string) => void
	list?: string
	onSelect?: ()=>void
}

const InputText: React.FC<IProps> = ({ label, name, placeholder, variant, inputType, value, onInputChange, list, onSelect }) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onInputChange(event.target.value)
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
					value={value}
					onChange={handleChange}
					list={list}
					onSelect={onSelect}
				/>
			</div>
		</>
	)
}

export default InputText;