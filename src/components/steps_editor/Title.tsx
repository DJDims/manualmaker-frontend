import React from "react";

interface IProps {
	value: string;
	onDragOver: () => void;
	onDragLeave: () => void;
	onDragEnd: () => void;
	onChange: ()=>void;
}

const Title: React.FC<IProps> = ({value, onDragOver, onDragLeave, onDragEnd, onChange}) => {
	return (
		<>
			<div 
				className='steps_editor_title'
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				onDragEnd={onDragEnd}
			>
				<p>Step title</p>
				<input 
					value={value} 
					type="text"
					onChange={onChange}
				/>
			</div>
		</>
	);
};

export default Title;
