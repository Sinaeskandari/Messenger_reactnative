import Conversation from '../messenger/conversation';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
});

export default connect(mapDispatchToProps)(Conversation);
