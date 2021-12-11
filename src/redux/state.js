import { rerenderEntireTree } from "../render";

let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'Hi, how are you?', likesCount: 12},
			{id: 2, message: 'It is my first post', likesCount: 20},
			{id: 3, message: 'Blabla', likesCount: 20},
			{id: 4, message: 'Lala', likesCount: 20}
		],
	},
	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Dimych' },
			{ id: 2, name: 'Andrey' },
			{ id: 3, name: 'Sveta' },
			{ id: 4, name: 'Sasha' },
			{ id: 5, name: 'Viktor' },
			{ id: 6, name: 'Valera' },
		],
		messages: [
			{ id: 1, message: 'Hi' },
			{ id: 2, message: 'How is your it-kamasutra?' },
			{ id: 3, message: 'Yo' },
			{ id: 4, message: 'Yo' },
			{ id: 5, message: 'Yo' },
			{ id: 6, message: 'YO' },
		]
	},
	sidebar: {}
}

export function addPost(postMessage) {
	// debugger;
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0
	}
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
}
// export let addPost = (postMessage) => {
// 	debugger;
// 	let newPost = {
// 		id: 5,
// 		message: postMessage,
// 		likesCount: 0,
// 	};
// 	state.profilePage.posts.push(newPost);
// }

export default state;