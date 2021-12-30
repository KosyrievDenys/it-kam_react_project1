import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

function Dialogs(props) {

	let state = props.dialogsPage;

	let dialogsElements =
		state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
	let messagesElements =
		state.messages.map(m => <Message message={m.message} key={m.id} />)
	let newMessageBody = state.newMessageBody;

	function onSendMessageClick() {
		props.sendMessage();
	}
	function onNewMessageChange(e) {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
					<div><textarea value={newMessageBody}
						onChange={onNewMessageChange}
						placeholder='Enter your message'></textarea></div>
					<div><button onClick={onSendMessageClick}>Send</button></div>
				</div>
			</div>
		</div >
	)
}

export default Dialogs;