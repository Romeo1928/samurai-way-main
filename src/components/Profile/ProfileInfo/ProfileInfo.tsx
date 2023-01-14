import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img className={s.image}
					  src="https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Tbilisi-3.jpg"/>
			</div>
			<div className={s.discriptionBlock}>
				ava + description
			</div>
		</div>
	);
};

