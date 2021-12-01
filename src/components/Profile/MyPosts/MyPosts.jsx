import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={s.posts}>
				<Post message='Hi, how are you?' likesCount='15' />
				<Post message="It is my first post" likesCount='20' />
			</div>
		</div>
	)
}
export default MyPosts;