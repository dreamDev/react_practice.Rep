import Dialogs from '../Dialogs/Dialogs';
import { textareaMessageChangeAC, sendMessageAC } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMessage: value => dispatch(textareaMessageChangeAC(value)),
    btnSendClick: () => dispatch(sendMessageAC())
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer