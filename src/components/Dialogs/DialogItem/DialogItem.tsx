import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItem = {
	id: number
	name: string
}

export const DialogItem = (props: DialogsItem) => {
	let path = "/dialogs/" + props.id

	return (
		// <div className={`${s.dialog} ${s.active}`}>
		<div className={s.dialog}>
			<NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
		</div>
	);
};



