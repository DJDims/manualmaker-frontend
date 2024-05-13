import React, { useEffect, useState } from "react"

interface IProps {
	label: string
	name: string
	value: string
	check?: boolean
	onRadioChange : () => void
}

const Radio: React.FC<IProps> = ({ label, name, value, check, onRadioChange }) => {
	const [isChecked, setIsChecked] = useState();

	const handleRadiobutton = () => {
		onRadioChange();
	}
	return (
		<>
			<div className='radio'>
				<input 
					type="radio" 
					id={value} 
					value={value} 
					name={name} 
					// checked={isChecked} 
					onChange={handleRadiobutton}
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