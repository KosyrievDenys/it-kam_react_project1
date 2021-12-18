import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar() {
	return (
		<nav className={s.nav}>
			<div className={`${s.item} ${s.activeNavLink}`} >
				{/* <div className={s.activeNavLink}> */}
					<NavLink to='/profile'>Profile</NavLink>
				</div>
			<div className={`${s.item} ${s.activeNavLink}`} >
				{/* <div className={s.activeNavLink}> */}
					<NavLink to='/dialogs'>Messages</NavLink>
				</div>
			<div className={`${s.item} ${s.activeNavLink}`} >
				{/* <div className={s.activeNavLink}> */}
					<NavLink to='/news'>News</NavLink>
				</div>
			<div className={`${s.item} ${s.activeNavLink}`} >
				{/* <div className={s.activeNavLink}> */}
					<NavLink to='/music'>Music</NavLink>
			</div>
			<div className={`${s.item} ${s.activeNavLink}`} >
				{/* <div className={s.activeNavLink}> */}
					<NavLink to='/settings'>Settings</NavLink>
				</div>
		</nav>);
}
export default Navbar;