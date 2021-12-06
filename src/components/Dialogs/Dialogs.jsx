import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

function DialogsItem(props) {

	let path = '/dialogs/' + props.id;

	return <div className={s.dialog + ' ' + s.active}>
		<NavLink to={path}>{props.name}</NavLink>
	</div>
}

function Message(props) {
	return (
		<div className={s.dialog}>{props.message}</div>
	)
}

function Dialogs(props) {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>

				<DialogsItem name='Dimych' id='Dimych' />
				<DialogsItem name='Andrey' id='Andrey' />
				<DialogsItem name='Sveta' id='Sveta' />
				<DialogsItem name='Sasha' id='Sasha' />
				<DialogsItem name='Viktor' id='Viktor' />
				<DialogsItem name='Valera' id='Valera' />
			</div>
			<div>
			<Message message='Hi'/>
			<Message message='How is your it-kamasutra?'/>
			<Message message='Yo'/>
			</div>
		</div>
	)
}

export default Dialogs;