import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

function mapStateToProps(state) {
	return {
		dialogsPage: state.dialogsPage
	}
}
function mapDispatchToProps(dispatch) {
	return {
		sendMessage() {
			dispatch(sendMessageCreator());
		},
		updateNewMessageBody(body) {
			dispatch(updateNewMessageBodyCreator(body));
		},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;