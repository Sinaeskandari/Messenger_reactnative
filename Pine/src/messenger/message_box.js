/* eslint-disable eqeqeq */
import React from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';

class MessageBox extends React.Component {
  constructor() {
    super();
    this.state = {
      message_list: [
        {
          message: 'salam',
          sender: '1',
          receiver: '2',
        },
        {
          message: 'Ma injaiim to kojayi dada?',
          sender: '2',
          receiver: '1',
        },
      ],
    };
  }
  async componentDidMount() {
    let myId = await AsyncStorage.getItem('id');
    this.myId = myId;
  }
  render() {
    return (
      <View style={styles.main}>
        {this.props.messages.map((item, index) => {
          if (item.sender.id == this.myId) {
            return (
              <View key={index} style={styles.sender}>
                <Text>{item.text}</Text>
              </View>
            );
          } else {
            return (
              <View key={index} style={styles.receiver}>
                <Text>{item.text}</Text>
              </View>
            );
          }
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 8,
    flexDirection: 'column',
  },
  sender: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(154,199,47,0.7)',
    marginRight: 5,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  receiver: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(154,199,47,0.7)',
    marginLeft: 5,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});
export default MessageBox;
