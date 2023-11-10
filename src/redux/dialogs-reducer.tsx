import {ActionsTypes, DialogPageType, MessageType} from "./state";



export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type ChangeNewMessageActionType = ReturnType<typeof changeNewMessageAC>


export const dialogsReducer = (state: DialogPageType, action: ActionsTypes): DialogPageType => {
	switch (action.type) {
		case "ADD-MESSAGE": {
			const newMessage: MessageType = {
				id: new Date().getTime(),
				message: action.newMessageText,
			}

			state.messages.push(newMessage) // добавления поста в конец списка
			// state.messages.unshift(newMessage) // добавления поста в начало списка
			state.newMessageText = '' // очистка в textarea
			return state
		}
		case "CHANGE-NEW-MESSAGE": {
			state.newMessageText = action.newMessage
			return state
		}
		default:
			return state
	}
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