import React from 'react';

interface IPropsSelect {
	children: React.ReactNode
	label: string
	name: string
	variant?: "inline"
}

const Select: React.FC<IPropsSelect> = ({ children, label, name, variant }) => {
	return (
		<>
			<div className={`form-control ${variant}`}>
				<label htmlFor={name}>{label}</label>
				<select name={name} id={name}>
					{children}
				</select>
			</div>
		</>
	)
}

interface IPropsOption {
	value: string
	label?: string
}

const Option: React.FC<IPropsOption> = ({ value, label }) => {
	return (
		<>
			<option value={value}>{label ? label : value}</option>
		</>
	)
}

export default Select;
export { Option }