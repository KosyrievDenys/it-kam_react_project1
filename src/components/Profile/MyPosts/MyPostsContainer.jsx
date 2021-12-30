import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

// function MyPostsContainer() {
// 	return (
// 		<StoreContext.Consumer> 
// 			{ store => {
// 				let state = store.getState();
// 				function addPost() {
// 					store.dispatch(addPostActionCreator());
// 				}
			
// 				function onPostChange(text) {
// 					let action = updateNewPostTextActionCreator(text);
// 					store.dispatch(action);
// 				}
// 				return <MyPosts
// 					updateNewPostText={onPostChange}
// 					addPost={addPost}
// 					posts={state.profilePage.posts}
// 					newPostText={state.profilePage.newPostText} />
// 			}
// 		}
// 		</StoreContext.Consumer>
// 	)
// }

function mapStateToProps(state) {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}

function MyDispatchToProps(dispatch) {
	return {
		updateNewPostText(text) {
			let action = updateNewPostTextActionCreator(text);
			dispatch(action);
		},
		addPost() {
			dispatch(addPostActionCreator());
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, MyDispatchToProps)(MyPosts);

export default MyPostsContainer;