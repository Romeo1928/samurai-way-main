import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img
					src="https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Tbilisi-3.jpg"/>
			</div>
			<div>
				ava + description
			</div>
			<MyPosts/>
		</div>
	);
};

