import React from "react"

interface IProps {
	label: string
	color: "default" | "green" | "red"
	type?: "submit"
}

const Button: React.FC<IProps> = ({ label, color, type }) => {
	const colors = {
		"default": "#d65200",
		"green": "#198754",
		"red": "#DC3545"
	}
	return (
		<>
			<button type={type} style={{ backgroundColor: colors[color] }}>{label}</button>
		</>
	)
}

export default Button;