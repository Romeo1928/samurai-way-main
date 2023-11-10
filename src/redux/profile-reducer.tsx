import {ActionsTypes, PostType, ProfilePageType} from "./state";



export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>




export const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
	switch (action.type) {
		case "ADD-POST": {
			const newPost: PostType = {
				id: new Date().getTime(),
				message: action.postText,
				likesCount: 7
			}

			state.posts.unshift(newPost) // добавления поста в начало списка
			state.newPostText = '' // очистка в textarea
			return state
		}
		case "CHANGE-NEW-TEXT": {
			state.newPostText = action.newText
			return state
		}
		default:
			return state
	}
}


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