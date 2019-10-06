import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import Header from './header';
import MessageBoxContainer from '../container/message_box_container';
import FooterContainer from '../container/footer_container';

class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  static navigationOptions = {
    title: `${this.name}`,
  };
  componentDidMount() {
    this.name = '';
    this.name = this.props.name;
  }
  render() {
    return (
      <ImageBackground
        source={require('../images/bgi3.jpg')}
        style={styles.bgi}>
        <View style={styles.container}>
          <Header name={this.props.name} />
          <MessageBoxContainer />
          <FooterContainer />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: 'column',
  },
  bgi: {
    width: '100%',
    height: '100%',
  },
});

export default ChatPage;
