import ChatPage from '../messenger/chat_page';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  name: state.firstName,
});

export default connect(mapStateToProps)(ChatPage);
