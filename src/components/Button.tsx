import React from "react";

interface IProps {
	label: string;
	color: "default" | "green" | "red";
	type?: "submit";
	onButtonClick? : () => void;
}

const Button: React.FC<IProps> = ({ label, color, type, onButtonClick }) => {
	const colors = {
		default: "#d65200",
		green: "#198754",
		red: "#DC3545"
	};
	return (
		<>
			<button
				type={type}
				style={{ backgroundColor: colors[color] }}
				onClick={onButtonClick}
			>
				{label}
			</button>
		</>
	);
};

export default Button;