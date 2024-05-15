export interface IUser {
	username: string;
	avatar: string;
	role: string;
	about: string;
	followers: string[];
	following: string[];
	marked: string[];
	pinned: string[];
}

export interface IManual {
	_id: string;
	title: string;
	description: string;
	tags: string[];
	author: string;
	createdAt: string;
	updatedAt: string;
}