import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IUser } from '../interfaces';

interface IUserState {
	userData: IUser;
}

const initialState: IUserState = {
	userData: {
		username: '',
		avatar: '',
		role: '',
		followers: [],
		following: [],
		marked: [],
		pinned: []
	}
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {

		setData: (state, action: PayloadAction<IUser>) => {
			state.userData = action.payload
		}
	}
})

export const {setData} = userSlice.actions;
export default userSlice.reducer;