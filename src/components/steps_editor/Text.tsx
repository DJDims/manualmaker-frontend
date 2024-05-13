import React from "react";

interface IProps {
	value: string;
	onChange: () => void;
	onDragOver: () => void;
	onDragLeave: () => void;
	onDragEnd: () => void;
}

const Text: React.FC<IProps> = ({value, onDragOver, onDragLeave, onDragEnd, onChange }) => {
	return (
		<>
			<div
				className='steps_editor_text'
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				onDragEnd={onDragEnd}
				onChange={onChange}
			>
				<p className='header'>Text element</p>
				<textarea>{value}</textarea>
			</div>
		</>
	);
};

export default Text;
