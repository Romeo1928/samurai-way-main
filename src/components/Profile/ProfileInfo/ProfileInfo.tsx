import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img className={s.image}
					  // src="https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Tbilisi-3.jpg"/>
						src="https://www.svoiludi.ru/images/tb/494/toscana-16952214507867_w687h357.jpg"/>
			</div>
			<div className={s.descriptionBlock}>
				ava + description
			</div>
		</div>
	);
};

