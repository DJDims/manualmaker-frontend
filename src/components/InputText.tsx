import React from "react"

interface IProps {
	label: string,
	placeholder?: string
}

const InputText: React.FC<IProps> = ({ label, placeholder }) => {

	return (
		<>
			<div className="form-control">
				<label htmlFor="">{ label }</label>
				<input type="text" placeholder={placeholder ? placeholder : label} />
			</div>
		</>
	)
}

export default InputText;