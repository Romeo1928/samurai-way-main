import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type StateProfileType = {
	profilePage: ProfilePageType
	addPost: (postText: string) => void //может быть любое название (postMessage, p ,message...) главное типизация
	changeNewTextCallback: (newText: string) => void
}

export const Profile = (props: StateProfileType) => {
	return (
		<div>
			<ProfileInfo/>
			<MyPosts posts={props.profilePage.posts}
						newPostText={props.profilePage.newPostText}
						addPost={props.addPost}
						changeNewTextCallback={props.changeNewTextCallback}
			/>
		</div>
	);
};

