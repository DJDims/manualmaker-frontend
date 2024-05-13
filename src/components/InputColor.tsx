import React, { useState } from "react"

interface IProps {
	label: string
	name: string
	variant?: "inline"
	onInputChange : (value: string) => void
}

const InputColor: React.FC<IProps> = ({ label, name, variant, onInputChange }) => {
	const [value, setValue] = useState('#ffffff');
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setValue(newValue);
		onInputChange(newValue);
	}
	return (
		<>
			<div className={`form-control ${variant}`}>
				<label htmlFor={name}>{label}</label>
				<div>
					<input
						type="color" 
						id={name} 
						name={name} 
						onChange={handleInput}
					/>
					<p>{value}</p>
				</div>
			</div>
		</>
	)
}

export default InputColor;