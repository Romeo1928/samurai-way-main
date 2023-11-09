import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";


type StateDialogsType = {
	dialogsPage: DialogPageType
	addMessage: (postText: string) => void //может быть любое название (postMessage, p ,message...) главное типизация
	newMessageText: string
	changeNewMessageCallBack: (newMessage: string) => void
}

export const Dialogs = (props: StateDialogsType) => {

	let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
	let messagesElements = props.dialogsPage.messages.map((m) => <Message key={m.id} message={m.message}/>)

	// добавление message
	const addMessage = () => {
		props.addMessage(props.newMessageText)
	}

	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.changeNewMessageCallBack(e.currentTarget.value)
	}

	// по нажатию на 'Enter' отправляем message
	const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			addMessage()
		}
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
									 onChange={onChangeHandler}
									 onKeyDown={onKeyDownHandler}
						/>
					</div>
					<div>
						<button onClick={addMessage}>Add message</button>
					</div>
				</div>
			</div>
		</div>
	);
};

