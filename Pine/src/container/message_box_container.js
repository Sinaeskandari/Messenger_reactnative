import {connect} from 'react-redux';
import MessageBox from '../messenger/message_box';

const mapStateToProps = state => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(MessageBox);
