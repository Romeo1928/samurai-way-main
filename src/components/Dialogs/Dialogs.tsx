import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItem = {
	id: number
	name: string
}

type MessageType = {
	message: string
}


export const Message = (props: MessageType) => {
	return (
		<div className={s.message}>{props.message}</div>
	);
};

export const DialogItem = (props: DialogsItem) => {
	let path = "/dialogs/" + props.id

	return (
		<div className={`${s.dialog} ${s.active}`}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};


export const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				<DialogItem name="Romeo" id={1}/>
				<DialogItem name="Nadin" id={2}/>
				<DialogItem name="Ticko" id={3}/>
				<DialogItem name="Sancho" id={4}/>
				<DialogItem name="Bobby" id={5}/>
			</div>
			<div className={s.messages}>
				<Message message="Hi"/>
				<Message message="How are you?"/>
				<Message message="Hi"/>
			</div>
		</div>
	);
};

