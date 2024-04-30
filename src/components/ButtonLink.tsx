import React from "react";

interface IProps {
	label: string;
	color: "default" | "green" | "red";
	path: string;
}

const ButtonLink: React.FC<IProps> = ({ label, color, path }) => {
	const colors = {
		default: "#d65200",
		green: "#198754",
		red: "#DC3545"
	};
	return (
		<>
			<a
				href={path}
				style={{ backgroundColor: colors[color] }}
				className="buttonLink"
			>
				{label}
			</a>
		</>
	);
};

export default ButtonLink;
