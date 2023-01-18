import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type MyPostsType ={
	posts: PostType[]
}

export const MyPosts = (props: MyPostsType) => {

	// let posts = [
	// 	{id: 1, message: 'Hi, how are you', likesCount: 10 },
	// 	{id: 2, message: "It's my first post", likesCount: 11},
	// ]

	let postsElements = props.posts.map((p)=>{
		return(
			<Post message={p.message} likesCount={p.likesCount}/>
		)
	})

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
				{/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>*/}
				{/*<Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>*/}
			</div>
		</div>
	);
};

