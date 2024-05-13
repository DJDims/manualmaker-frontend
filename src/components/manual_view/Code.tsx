import React from "react";

interface IProps {}

const Code: React.FC<IProps> = ({}) => {
	return (
		<>
			<div className='steps_editor_code'>
				<div className='header'>
					<div className='file'>index.js</div>
					<div className='language'>javascript</div>
					<div className="copy">copy</div>
				</div>
				<div className='body'>
					<div className='line'>
						<span>1</span>var gop = false, lt
					</div>
					<div className='line'>
						<span>2</span>
					</div>
					<div className='line'>
						<span>3</span>void function law()
					</div>
					<div className='line'>
						<span>4</span>if gop == false
					</div>
				</div>
			</div>
		</>
	);
};

export default Code;
