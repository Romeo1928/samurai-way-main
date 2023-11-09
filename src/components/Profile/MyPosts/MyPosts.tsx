import React, {LegacyRef, KeyboardEvent, ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
	posts: PostType[]
	addPost: (postText: string) => void //может быть любое название (postMessage, p ,message...) главное типизация
	newPostText: string
	changeNewTextCallback: (newText: string) => void
}

export const MyPosts = (props: MyPostsType) => {

	let postsElements = props.posts.map((p) => {
		return (
			<Post key={p.id} message={p.message} likesCount={p.likesCount}/>
		)
	})

	// добавление post
	const addPost = () => {
		props.addPost(props.newPostText)
	}

	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.changeNewTextCallback(e.currentTarget.value)
	}

	// по нажатию на 'Enter' отправляем post
	const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			addPost()
		}
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea value={props.newPostText}
								 // ref={newPostElement}
								 onChange={onChangeHandler}
								 onKeyDown={onKeyDownHandler}
					/>
				</div>
				<div className={s.button}>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
};

