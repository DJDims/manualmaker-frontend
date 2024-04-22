import React, { useState } from "react"

interface IProps {
	label: string
	name: string
	value: string
	check?: boolean
}

const Radio: React.FC<IProps> = ({ label, name, value, check }) => {
	const [isChecked, setIsChecked] = useState(check ? check : false);
	const handleCheckbox = () => {
		setIsChecked(!isChecked);
	}
	return (
		<>
			<div className='radio'>
				<input 
					type="radio" 
					id={value} 
					value={value} 
					name={name} 
					checked={isChecked} 
					onChange={handleCheckbox}
				/>
				<label htmlFor={value}>{label}</label>
			</div>
		</>
	)
}

interface IPropsContainer {
	variant?: "inline"
	children: React.ReactNode
}

const RadioContainer: React.FC<IPropsContainer> = ({ variant, children }) => {
	return (
		<>
			<div className={`form-control ${variant}`}>
				{children}
			</div>
		</>
	)
}

export default Radio;
export { RadioContainer };