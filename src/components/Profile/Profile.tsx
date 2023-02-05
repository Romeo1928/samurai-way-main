import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type StateProfileType = {
	state: ProfilePageType
	addPost: (postMessage: string) => void //может быть любое название (postMessage, p , message....) главное типизация
}

export const Profile = (props: StateProfileType) => {
	return (
		<div>
			<ProfileInfo/>
			<MyPosts posts={props.state.posts} addPost={props.addPost}/>
		</div>
	);
};

