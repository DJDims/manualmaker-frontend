import React from "react"

interface IProps {
	children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ children }) => {

	return (
		<>
			<div className="modal-bg">
				<div className="modal">
					{children}
				</div>
			</div>
		</>
	)
}

const ModalHeader: React.FC<IProps> = ({ children }) => {

	return (
		<>
			<div className="modal-header">
				<h3>{children}</h3>
				<button>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>
				</button>
			</div>
		</>
	)
}

const ModalBody: React.FC<IProps> = ({ children }) => {

	return (
		<>
			<div className="modal-body">
				{children}
			</div>
		</>
	)
}

const ModalFooter: React.FC<IProps> = ({ children }) => {

	return (
		<>
			<div className="modal-footer">
				{children}
			</div>
		</>
	)
}

export default Modal;
export { ModalHeader, ModalBody, ModalFooter };
