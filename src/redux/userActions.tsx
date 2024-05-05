interface IUser {
	username: string;
	avatar: string;
	role: string;
	followers: string[];
	following: string[];
	marked: string[];
	pinned: string[];
}

export const saveUserData = (userData: IUser) => {
    return {
        type: 'SAVE_USER_DATA',
        payload: userData
    };
};