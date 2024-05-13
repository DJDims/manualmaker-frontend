import React from "react";

interface IProps {
	value: string;
	onChange: () => void;
	onDragOver: () => void;
	onDragLeave: () => void;
	onDragEnd: () => void;
}

const Command: React.FC<IProps> = ({value, onDragOver, onDragLeave, onDragEnd, onChange }) => {
	return (
		<>
			<div
				className='steps_editor_command'
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				onDragEnd={onDragEnd}
				onChange={onChange}
			>
				<p>Command element</p>
				<input type="text" value={value}/>
			</div>
		</>
	);
};

export default Command;
