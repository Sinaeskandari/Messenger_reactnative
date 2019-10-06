import ConversationList from '../messenger/conversation_list';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
});

const mapStateToProps = state => ({
  conversation_list: state.contacts,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConversationList);
