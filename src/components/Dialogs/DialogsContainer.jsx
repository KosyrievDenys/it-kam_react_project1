
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {

	let state = props.store.getState().dialogsPage;

	function onSendMessageClick() {
		props.store.dispatch(sendMessageCreator());
	}
	function onNewMessageChange(body) {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}

	return ( 
	<Dialogs 
	updateNewMessageBody={onNewMessageChange} 
	sendMessage={onSendMessageClick}
	dialogsPage={state}/>
	)
}

export default DialogsContainer;