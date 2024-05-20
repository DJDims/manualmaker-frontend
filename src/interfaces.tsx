export interface IUser {
	_id: string;
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
	_id?: string;
	title: string;
	description: string;
	tags: string[];
	steps: {
		title: string;
		elements: {
			type: string;
			text: string;
			code: string;
		}[]
	}[]
	author: string;
	// createdAt: Date;
	// updatedAt: Date;
}

export interface ITag {
	_id: string;
	name: string;
	bgColor: string;
	txColor: boolean;
}