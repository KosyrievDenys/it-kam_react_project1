import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

function MyPostsContainer(props) {
// debugger;
let state = props.store.getState();

	function addPost() {
		props.store.dispatch(addPostActionCreator());
	}

	function onPostChange(text) {
		let action = updateNewPostTextActionCreator(text);
		props.store.dispatch(action);
	}

	return (
		<MyPosts
			updateNewPostText={onPostChange}
			addPost={addPost}
			posts={state.profilePage.posts}
			newPostText={state.profilePage.newPostText}/>
	)
}
export default MyPostsContainer;