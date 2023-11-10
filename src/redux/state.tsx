import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StoreType = {
	_state: RootStateType
	// addPost: (postText: string) => void
	// changeNewText: (newText: string) => void
	// addMessage: (message: string) => void
	// changeNewMessage: (newMessage: string) => void
	_rerenderEntireTree: () => void
	subscribe: (observer: () => void) => void
	getState: () => RootStateType
	dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
	AddPostActionType
	| ChangeNewTextActionType
	| AddMessageActionType
	| ChangeNewMessageActionType

// 1-й способ описания типов
// type AddPostActionType = {
// 	type: "ADD-POST"
// 	postText: string
// }
//
// type ChangeNewTextActionType = {
// 	type: "CHANGE-NEW-TEXT"
// 	newText: string
// }
//
// type AddMessageActionType = {
// 	type: "ADD-MESSAGE"
// 	newMessageText: string
// }
//
// type ChangeNewMessageActionType = {
// 	type: "CHANGE-NEW-MESSAGE"
// 	newMessage: string
// }
// export const addPostAC = (postText: string): AddPostActionType => {
// 	return {
// 		type: "ADD-POST",
// 		postText: postText
// 	} as const
// }
// export const changeNewTextAC = (newText: string): ChangeNewTextActionType => {
// 	return {
// 		type: "CHANGE-NEW-TEXT",
// 		newText: newText
// 	} as const
// }
//
// export const addMessageAC = (newMessageText: string): AddMessageActionType => {
// 	return {
// 		type: "ADD-MESSAGE",
// 		newMessageText: newMessageText
// 	} as const
// }
// export const changeNewMessageAC = (newMessage: string):ChangeNewMessageActionType => {
// 	return {
// 		type: "CHANGE-NEW-MESSAGE",
// 		newMessage: newMessage
// 	} as const
// }

// 2-й способ описания типов
type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
type AddMessageActionType = ReturnType<typeof addMessageAC>
type ChangeNewMessageActionType = ReturnType<typeof changeNewMessageAC>

// Post
export const addPostAC = (postText: string) => {
	return {
		type: "ADD-POST",
		postText: postText
	} as const
}
export const changeNewTextAC = (newText: string) => {
	return {
		type: "CHANGE-NEW-TEXT",
		newText: newText
	} as const
}

// Message
export const addMessageAC = (newMessageText: string) => {
	return {
		type: "ADD-MESSAGE",
		newMessageText: newMessageText
	} as const
}
export const changeNewMessageAC = (newMessage: string) => {
	return {
		type: "CHANGE-NEW-MESSAGE",
		newMessage: newMessage
	} as const
}

// STORE
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
			newPostText: '',
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
			newMessageText: '',
		},
		sidebar: {}
	},
	// addPost(postText: string) {
	// 	const newPost: PostType = {
	// 		id: new Date().getTime(),
	// 		// id: store._state.profilePage.posts.length + 1,
	// 		message: postText,
	// 		likesCount: 7
	// 	}
	// 	// this._state.profilePage.posts.push(newPost) // добавления поста в конец списка
	// 	this._state.profilePage.posts.unshift(newPost) // добавления поста в начало списка
	// 	this._state.profilePage.newPostText = '' // очистка в textarea
	// 	this._rerenderEntireTree()
	// },
	// changeNewText(newText: string) {
	// 	this._state.profilePage.newPostText = newText
	// 	this._rerenderEntireTree()
	// },
	// addMessage(message: string) {
	// 	const newMessage: MessageType = {
	// 		id: new Date().getTime(),
	// 		message: newMessageText,
	// 	}
	// 	this._state.dialogsPage.messages.push(newMessage) // добавления поста в конец списка
	// 	// this._state.dialogsPage.messages.unshift(newMessage) // добавления поста в начало списка
	// 	this._state.dialogsPage.newMessageText = '' // очистка в textarea
	// 	this._rerenderEntireTree()
	// },
	// changeNewMessage(newMessage: string) {
	// 	this._state.dialogsPage.newMessageText = newMessage
	// 	this._rerenderEntireTree()
	// },
	_rerenderEntireTree() {
		console.log('state changed')
	},
	subscribe(observer) {
		this._rerenderEntireTree = observer // observer - наблюдатель
	},
	getState() {
		return this._state
	},
	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._rerenderEntireTree()

		// if (action.type === "ADD-POST") {
		// 	const newPost: PostType = {
		// 		id: new Date().getTime(),
		// 		// id: store._state.profilePage.posts.length + 1,
		// 		message: action.postText,
		// 		likesCount: 7
		// 	}
		// 	// this._state.profilePage.posts.push(newPost) // добавления поста в конец списка
		// 	this._state.profilePage.posts.unshift(newPost) // добавления поста в начало списка
		// 	this._state.profilePage.newPostText = '' // очистка в textarea
		// 	this._rerenderEntireTree()
		// } else if (action.type === "CHANGE-NEW-TEXT") {
		// 	this._state.profilePage.newPostText = action.newText
		// 	this._rerenderEntireTree()
		// } else if (action.type === "ADD-MESSAGE") {
		// 	const newMessage: MessageType = {
		// 		id: new Date().getTime(),
		// 		message: action.newMessageText,
		// 	}
		// 	this._state.dialogsPage.messages.push(newMessage) // добавления поста в конец списка
		// 	// this._state.dialogsPage.messages.unshift(newMessage) // добавления поста в начало списка
		// 	this._state.dialogsPage.newMessageText = '' // очистка в textarea
		// 	this._rerenderEntireTree()
		// } else if (action.type === "CHANGE-NEW-MESSAGE") {
		// 	this._state.dialogsPage.newMessageText = action.newMessage
		// 	this._rerenderEntireTree()
		// }
	}
}

export type RootStateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogPageType
	sidebar: Sidebar
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


// export const state: RootStateType = {
// 	profilePage: {
// 		posts: [
// 			{id: 1, message: 'Hi, how are you', likesCount: 10},
// 			{id: 2, message: "It's my first post", likesCount: 11},
// 			{id: 3, message: "Hello", likesCount: 110},
// 			{id: 4, message: "SIUUUUU", likesCount: 1100},
// 			{id: 5, message: "Ola", likesCount: 2},
// 		],
// 		newPostText: 'Mercedes',
// 	},
// 	dialogsPage: {
// 		dialogs: [
// 			{id: 1, name: 'Romeo'},
// 			{id: 2, name: 'Nadin'},
// 			{id: 3, name: 'Tiko'},
// 			{id: 4, name: 'Sancho'},
// 			{id: 5, name: 'Bobby'},
// 		],
// 		messages: [
// 			{id: 1, message: 'Hi'},
// 			{id: 2, message: 'How are you?'},
// 			{id: 3, message: 'Hi'},
// 		],
// 		newMessageText: '',
// 	},
// 	sidebar: {}
// }

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