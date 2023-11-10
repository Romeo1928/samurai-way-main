import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogPageType} from "../../redux/state";
import {addMessageAC, changeNewMessageAC} from "../../redux/dialogs-reducer";


type StateDialogsType = {
	dialogsPage: DialogPageType
	// addMessage: (postText: string) => void //может быть любое название (postMessage, p ,message...) главное типизация
	newMessageText: string
	// changeNewMessageCallBack: (newMessage: string) => void
	dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: StateDialogsType) => {

	let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
	let messagesElements = props.dialogsPage.messages.map((m) => <Message key={m.id} message={m.message}/>)

	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		// props.changeNewMessageCallBack(e.currentTarget.value)
		const newMessage = e.currentTarget.value
		props.dispatch(changeNewMessageAC(newMessage))
	}

	// по нажатию на 'Enter' отправляем message
	const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			addMessage()
		}
	}

	// добавление message
	const addMessage = () => {
		// props.addMessage(props.newMessageText)
		props.dispatch(addMessageAC(props.newMessageText))
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div>
					<div>
						<textarea value={props.newMessageText}
									 placeholder={"Enter your message"}
									 onChange={onChangeHandler}
									 onKeyDown={onKeyDownHandler}
						/>
					</div>
					<div>
						<button onClick={addMessage}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

