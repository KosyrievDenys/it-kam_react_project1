import s from './Post.module.css';

function Post(props) {
	return (
		<div className={s.item}>
			{props.message}
			{props.likes}
		</div>
	)
}
export default Post;