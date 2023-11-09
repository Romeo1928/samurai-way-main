export type StoreType = {
	_state: RootStateType
	addPost: (postText: string) => void
	changeNewText: (newText: string) => void
	addMessage: (message: string) => void
	changeNewMessage: (newMessage: string) => void
	_rerenderEntireTree: () => void
	subscribe: (observer: () => void) => void
	getState: () => RootStateType
}

export const store: StoreType = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you', likesCount: 10},
				{id: 2, message: "It's my first post", likesCount: 11},
				{id: 3, message: "Hello", likesCount: 110},
				{id: 4, message: "SIUUUUU", likesCount: 1100},
				{id: 5, message: "Ola", likesCount: 2},
			],
			newPostText: 'Mercedes',
		},
		dialogsPage: {
			dialogs: [
				{id: 1, name: 'Romeo'},
				{id: 2, name: 'Nadin'},
				{id: 3, name: 'Tiko'},
				{id: 4, name: 'Sancho'},
				{id: 5, name: 'Bobby'},
			],
			messages: [
				{id: 1, message: 'Hi'},
				{id: 2, message: 'How are you?'},
				{id: 3, message: 'Hi'},
			],
			newMessageText: 'AMG',
		},
		sidebar: {}
	},
	addPost(postText: string) {
		const newPost: PostType = {
			id: new Date().getTime(),
			message: postText,
			likesCount: 7
		}
		// this._state.profilePage.posts.push(newPost) // добавления поста в конец списка
		this._state.profilePage.posts.unshift(newPost) // добавления поста в начало списка
		this._state.profilePage.newPostText = '' // очистка в textarea
		this._rerenderEntireTree()
	},
	changeNewText(newText: string) {
		this._state.profilePage.newPostText = newText
		this._rerenderEntireTree()
	},
	addMessage(message: string) {
		const newMessage: MessageType = {
			id: new Date().getTime(),
			message: message,
		}
		this._state.dialogsPage.messages.push(newMessage) // добавления поста в конец списка
		// this._state.dialogsPage.messages.unshift(newMessage) // добавления поста в начало списка
		this._state.dialogsPage.newMessageText = '' // очистка в textarea
		this._rerenderEntireTree()
	},
	changeNewMessage(newMessage: string) {
		this._state.dialogsPage.newMessageText = newMessage
		this._rerenderEntireTree()
	},
	_rerenderEntireTree() {
		console.log('state changed')
	},
	subscribe(observer) {
		this._rerenderEntireTree = observer // observer - наблюдатель
	},

	getState() {
		return this._state
	}
}


export type MessageType = {
	id: number
	message: string | undefined
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
	newPostText: string
}

export type DialogPageType = {
	dialogs: DialogType[]
	messages: MessageType[]
	newMessageText: string

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
			{id: 3, message: "Hello", likesCount: 110},
			{id: 4, message: "SIUUUUU", likesCount: 1100},
			{id: 5, message: "Ola", likesCount: 2},
		],
		newPostText: 'Mercedes',
	},
	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Romeo'},
			{id: 2, name: 'Nadin'},
			{id: 3, name: 'Tiko'},
			{id: 4, name: 'Sancho'},
			{id: 5, name: 'Bobby'},
		],
		messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'Hi'},
		],
		newMessageText: 'AMG',
	},
	sidebar: {}
}

// export const addPost = (postText: string) => {
// 	const newPost: PostType = {
// 		id: new Date().getTime(),
// 		message: postText,
// 		likesCount: 7
// 	}
// 	// state.profilePage.posts.push(newPost) // добавления поста в конец списка
// 	state.profilePage.posts.unshift(newPost) // добавления поста в начало списка
// 	state.profilePage.newPostText = '' // очистка в textarea
// 	rerenderEntireTree(state)
// }
// export const updateNewPostText = (newText: string) => {
// 	state.profilePage.newPostText = newText
// 	rerenderEntireTree(state)
// }
// export const addMessage = (message: string) => {
// 	const newMessage: MessageType = {
// 		id: new Date().getTime(),
// 		message: message,
// 	}
// 	state.dialogsPage.messages.push(newMessage) // добавления поста в конец списка
// 	// state.dialogsPage.messages.unshift(newMessage) // добавления поста в начало списка
// 	state.dialogsPage.newMessageText = '' // очистка в textarea
// 	rerenderEntireTree()
// }
// export const updateNewMessageText = (newMessage: string) => {
// 	state.dialogsPage.newMessageText = newMessage
// 	rerenderEntireTree(state)
//
// export const changeNewText = (newText: string) => {
// 	state.profilePage.newPostText = newText
// 	rerenderEntireTree()
// }
// export const changeNewMessage = (newMessage: string) => {
// 	state.dialogsPage.newMessageText = newMessage
// 	rerenderEntireTree()
// }
// export const subscribe = (observer: () => void) => {
// 	rerenderEntireTree = observer // observer - наблюдатель
// }