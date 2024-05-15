import Menu from '../components/Menu';
import Tag from '../components/Tag';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Modal, { ModalHeader, ModalBody, ModalFooter } from '../components/Modal';

export default function EditProfile() {
	const [cookies] = useCookies();
	const [user, setUser] = useState({});
	const navigate = useNavigate();

	const saveChanges = async () =>{
		navigate('/profile')
	}

	useEffect(()=>{

	}, [])

	return (
		<>
			<Menu />
			<form className="content content_profile content_profile_edit">
				<div className="user">
					<img src={cookies.user.avatar} alt="" />
					<h3>{cookies.user}</h3>
					<button className='save' onClick={saveChanges}>Save changes</button>
					<button className='cancel' onClick={()=>{navigate('/profile')}}>Cancel</button>
				</div>
				<div className="data">
					<div className="about">
						<h3>About me</h3>
						<textarea onChange={(e)=>{setUser({...user, about:e.target.value})}}>{cookies.user.about}</textarea>
					</div>
					<div className="pinned">
						<h3>Pinned manuals</h3>
						<div className="manuals">
							<div className="manual">
								<div className="header">
									<div className="title">
										<h4>Manual title</h4>
										<div className="badge public">public</div>
									</div>
									<div className="buttons">
										<a href="">
											<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2094_867)"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.875 5.46875L13.2812 14.0625L10.9375 11.7188L19.5312 3.125H15.625V0H25V9.375H21.875V5.46875ZM9.375 0V3.125H3.125V21.875H21.875V15.625H25V25H0V0H9.375Z" fill="white" /></g><defs><clipPath id="clip0_2094_867"><rect width="25" height="25" fill="white" /></clipPath></defs></svg>
										</a>
										<a href="">
											<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2094_869)"><path fill-rule="evenodd" clip-rule="evenodd" d="M25 12.7506V24.4048H0V1.09636H12.5V3.42721H2.50001V22.0739H22.5V12.7506H25ZM8.75001 13.1118L18.7775 3.7442L20.72 6.12282L10.5738 16.2468H8.75001V13.1118ZM6.25 18.5777H11.645L24.0287 6.12515L18.845 0.595238L6.25 12.1282V18.5777Z" fill="white" /></g><defs><clipPath id="clip0_2094_869"><rect width="25" height="23.8125" fill="white" transform="translate(0 0.59375)" /></clipPath></defs></svg>
										</a>
									</div>
								</div>
								<div className="tags">
									<Tag name="Javascript" bgColor="#efd81d" txColor={false} />
									<Tag name="Javascript" bgColor="#efd81d" txColor={false} />
									<Tag name="Javascript" bgColor="#efd81d" txColor={false} />
								</div>
							</div>
							<div className="manual stub">+</div>
						</div>
					</div>
				</div>
			</form>
			{/* <Modal>
				<ModalHeader>Modal Header</ModalHeader>
				<ModalBody>Modal Body</ModalBody>
				<ModalFooter>Modal Footer</ModalFooter>
			</Modal> */}
		</>
	);
}