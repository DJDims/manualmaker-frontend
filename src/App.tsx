import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './scss/style.scss';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Library from './pages/Library';

function App() {
  return (
    <>
		<Router>
			<Routes>
				<Route path="/" element={<Main/>}></Route>
				<Route path="/login" element={<Login/>}></Route>
				<Route path="/register" element={<Register/>}></Route>
				<Route path="/profile" element={<Profile/>}></Route>
				<Route path="/profile_edit" element={<EditProfile/>}></Route>
				<Route path="/library" element={<Library/>}></Route>
			</Routes>
		</Router>
    </>
  )
}

export default App
