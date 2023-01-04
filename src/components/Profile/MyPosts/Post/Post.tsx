import React from 'react';
import s from './Post.module.css'

type PropsType = {
	message: string
}

export const Post = (props: PropsType) => {
	return (
		<div className={s.item}>
			<img src="https://uznayvse.ru/images/catalog/2022/2/cristiano-ronaldo_56.jpg"/>
			{props.message}
			<div>
				<span>like</span>
			</div>
		</div>
	);
};

