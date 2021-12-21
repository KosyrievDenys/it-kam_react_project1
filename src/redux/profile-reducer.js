const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
			{ id: 2, message: 'It is my first post', likesCount: 20 },
			{ id: 3, message: 'Blabla', likesCount: 20 },
			{ id: 4, message: 'Lala', likesCount: 20 }
		],
		newPostText: 'ten'
	};

function profileReducer(state = initialState, action) {
// debugger;
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;