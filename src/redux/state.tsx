export type MessageType = {
	id: number
	message: string
}

export type DialogType = {
	id: number
	name: string
}

export type PostType = {
	id: number
	message: string
	likesCount: number
}

export type ProfilePageType = {
	posts: PostType[]
}

export type DialogPageType = {
	dialogs: DialogType[]
	messages: MessageType[]
}

export type Sidebar = {}

export type RootStateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogPageType
	sidebar: Sidebar
}

export const state: RootStateType = {
	profilePage: {
		posts: [
			{id: 1, message: 'Hi, how are you', likesCount: 10},
			{id: 2, message: "It's my first post", likesCount: 11},
		]
	},
	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Romeo'},
			{id: 2, name: 'Nadin'},
			{id: 3, name: 'Ticko'},
			{id: 4, name: 'Sancho'},
			{id: 5, name: 'Bobby'},
		],
		messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'Hi'},
		]
	},
	sidebar: {}
}