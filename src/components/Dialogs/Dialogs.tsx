import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";


type StateDialogsType = {
	state: DialogPageType
}

export const Dialogs = (props: StateDialogsType) => {
	// let dialogs = [
	// 	{id: 1, name: 'Romeo'},
	// 	{id: 2, name: 'Nadin'},
	// 	{id: 3, name: 'Ticko'},
	// 	{id: 4, name: 'Sancho'},
	// 	{id: 5, name: 'Bobby'},
	// ]
	//
	// let messages = [
	// 	{id: 1, message: 'Hi'},
	// 	{id: 2, message: 'How are you?'},
	// 	{id: 3, message: 'Hi'},
	// ]

	let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
	let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

	// let dialogsElements = dialogs.map((d) => {
	// 	return (
	// 		<DialogItem name={d.name} id={d.id}/>
	// 	)
	// })
	//
	// let messagesElements = messeges.map((m) => {
	// 	return (
	// 		<Message message={m.message}/>
	// 	)
	// })

	const newMessageElement:React.RefObject<HTMLTextAreaElement>= React.createRef();
	const addMessage = () => {
		let text = newMessageElement.current?.value
		alert(text)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div>
					<div>
						<textarea ref={newMessageElement}></textarea>
					</div>
					<div>
						<button onClick={ addMessage }>Add message</button>
					</div>
				</div>

			</div>
		</div>
	);
};

