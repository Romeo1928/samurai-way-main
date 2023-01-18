import React from 'react';
import s from './Post.module.css'

type MessageType = {
	message: string
	likesCount: number
}

export const Post = (props: MessageType) => {
	return (
		<div className={s.item}>
			<img src="https://uznayvse.ru/images/catalog/2022/2/cristiano-ronaldo_56.jpg"/>
			{props.message}
			<div>
				<span>like</span>
				<span>{props.likesCount}</span>
			</div>
		</div>
	);
};

