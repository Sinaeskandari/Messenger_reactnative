import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';
import {getUserName, getConvId, getMessageFromServer} from '../action/action';
import axios from 'axios';

class Conversation extends React.Component {
  constructor() {
    super();
  }
  async handle_touch() {
    const {navigate} = this.props.navigation;
    let token = await AsyncStorage.getItem('token');
    let fdata = new FormData();
    fdata.append('token', token);
    fdata.append('conversation_id', this.props.convid);
    fdata.append('size', 10);
    fdata.append('date', (new Date().getTime() / 1000).toFixed(0));
    axios
      .post('https://api.paywith.click/conversation/details/', fdata)
      .then(response => {
        this.props.dispatch(getMessageFromServer(response.data.data.messages));
        this.props.dispatch(getConvId(this.props.convid));
        this.props.dispatch(getUserName(this.props.name));
      })
      .catch(error => {
        console.log(error);
      });
    navigate('ChatPage');
  }
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.handle_touch()}
        style={styles.conversation}>
        <View style={styles.user}>
          <Image source={require('../images/picdi.png')} style={styles.image} />
          <Text style={styles.text}>{this.props.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  conversation: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 10,
    width: '100%',
    height: '10%',
    justifyContent: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  image: {
    marginLeft: 8,
    width: '8%',
    height: '100%',
    borderRadius: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginLeft: '4%',
  },
});

export default Conversation;
