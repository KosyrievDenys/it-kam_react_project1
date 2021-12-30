import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile() {
	// debugger;
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer/>
		</div>);
}

export default Profile;