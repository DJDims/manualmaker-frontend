import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./scss/style.scss";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import UserProfile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Library from "./pages/Library";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import MyLibrary from "./pages/MyLibrary";
import Search from "./pages/Search";
import ManualEditor from "./pages/ManualEditor";
import NewManualEditor from "./pages/NewManualEditor";
import StepsEditor from "./pages/StepsEditor";
import TagControl from "./pages/TagControl";
import ViewManual from "./pages/ViewManual";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' 						element={<Main />				}></Route>
					<Route path='/login' 					element={<Login />				}></Route>
					<Route path='/logout' 					element={<Logout />				}></Route>
					<Route path='/register' 				element={<Register />			}></Route>
					<Route path='/profile' 					element={<UserProfile />		}></Route>
					<Route path='/profile/:userId' 			element={<UserProfile />		}></Route>
					<Route path='/profile_edit' 			element={<EditProfile />		}></Route>
					<Route path='/library' 					element={<Library />			}></Route>
					<Route path='/followers' 				element={<Followers />			}></Route>
					<Route path='/followers/:userId' 		element={<Followers />			}></Route>
					<Route path='/following' 				element={<Following />			}></Route>
					<Route path='/following/:userId' 		element={<Following />			}></Route>
					<Route path='/mylibrary' 				element={<MyLibrary />			}></Route>
					<Route path='/search' 					element={<Search />				}></Route>
					<Route path='/new_manual/' 				element={<NewManualEditor />	}></Route>
					<Route path='/manual_editor/:manualId' 	element={<ManualEditor />		}></Route>
					<Route path='/steps_editor/:manualId' 	element={<StepsEditor />		}></Route>
					<Route path='/view_manual/:manualId' 	element={<ViewManual />			}></Route>
					<Route path='/tag_control/' 			element={<TagControl />			}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
