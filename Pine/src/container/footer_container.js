import {connect} from 'react-redux';
import Footer from '../messenger/footer';

const mapStateToProps = state => ({
  convid: state.convid,
});

export default connect(mapStateToProps)(Footer);
