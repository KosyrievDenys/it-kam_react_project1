import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

	let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: 'It is my first post', likesCount: 20},
		{id: 3, message: 'Blabla', likesCount: 20},
		{id: 4, message: 'Lala', likesCount: 20}
	]

	let postsElements = posts
	.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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
			</div>
		</div>
	)
}
export default MyPosts;