import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type StateProfileType = {
	profilePage: ProfilePageType
	// addPost: (postText: string) => void //может быть любое название (postMessage, p ,message...) главное типизация
	// changeNewTextCallback: (newText: string) => void
	dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: StateProfileType) => {
	return (
		<div>
			<ProfileInfo/>
			<MyPosts posts={props.profilePage.posts}
						newPostText={props.profilePage.newPostText}
						dispatch={props.dispatch}
						// addPost={props.addPost}
						// changeNewTextCallback={props.changeNewTextCallback}
			/>
		</div>
	);
};

