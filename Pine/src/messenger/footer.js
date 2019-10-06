import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      newMessage: '',
    };
  }
  async handleCreateMessage() {
    let token = await AsyncStorage.getItem('token');
    let fdata = new FormData();
    fdata.append('token', token);
    fdata.append('conversation_id', this.props.convid);
    fdata.append('text', this.state.newMessage);
    axios.post('https://api.paywith.click/conversation/create/', fdata);
  }
  render() {
    return (
      <View style={styles.footer}>
        <TextInput
          placeholder="type something ..."
          placeholderTextColor="rgba(255,255,255,0.8)"
          style={styles.input}
          onChangeText={text => this.setState({newMessage: text})}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleCreateMessage()}>
          <Text style={styles.send_button}>send!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    width: '75%',
    backgroundColor: 'rgba(15,133,61,0.8)',
    height: '100%',
    alignSelf: 'flex-start',
    color: 'white',
  },
  send_button: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    width: '25%',
    alignSelf: 'center',
    borderColor: 'green',
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: 'rgba(76,76,76,0.8)',
    color: 'white',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Footer;
