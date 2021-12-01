import s from './Post.module.css';

function Post(props) {
	return (
		<div className={s.item}>
			{props.message}
			<div>
				<span>Like</span>{props.likesCount}
			</div>
		</div>
	)
}
export default Post;