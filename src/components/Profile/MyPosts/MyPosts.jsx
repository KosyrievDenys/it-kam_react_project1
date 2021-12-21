import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

// function addPostActionCreator() {
// 	return {
// 		type: 'ADD-POST'
// 	}
// }
// function updateNewPostTextActionCreator() {
// 	return {
// 		type: {type: 'UPDATE-NEW-POST-TEXT', newText: text }
// 	}
// }

function MyPosts(props) {

	let postsElements =
		props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

	let newPostElement = React.createRef();

	function onAddPost() {
		props.addPost();
	}

	function onPostChange() {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);

	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement}
						value={props.newPostText} />
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}
export default MyPosts;