/* eslint-disable eqeqeq */
import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import ConversationContainer from '../container/conversation_container';
import axios from 'axios';
import {saveDataFromServer} from '../action/action';

class ConversationList extends React.Component {
  constructor() {
    super();
    this.state = {
      new_conv: '',
      suggestion_users: [],
      token: '',
      myId: '',
    };
  }
  async handle_search(text) {
    let token = await AsyncStorage.getItem('token');
    this.setState({token: token});
    let fdata = new FormData();
    fdata.append('token', token);
    fdata.append('query', text);
    fdata.append('size', 4);
    axios
      .post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then(response => {
        this.setState({suggestion_users: response.data.data.users});
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  handle_conversation_request(user) {
    let formdata = new FormData();
    formdata.append('token', this.state.token);
    formdata.append('user_id', user);
    axios
      .post('https://api.paywith.click/conversation/', formdata)
      .then(response => {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  async componentDidMount() {
    let token = await AsyncStorage.getItem('token');
    let myId = await AsyncStorage.getItem('id');
    this.myId = myId;
    axios
      .get('https://api.paywith.click/conversation/', {
        params: {
          token: token,
        },
      })
      .then(response => {
        this.props.dispatch(
          saveDataFromServer(response.data.data.conversation_details),
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <ImageBackground
        source={require('../images/bgi3.jpg')}
        style={styles.bgi}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TextInput
              placeholder="Search"
              onChangeText={text => this.handle_search(text)}
            />
            {this.state.suggestion_users.map((user, index) => {
              let id = user.id;
              return (
                <Text
                  key={index}
                  onPress={() => this.handle_conversation_request(id)}>
                  {user.email}
                </Text>
              );
            })}
          </View>
          <View style={styles.ConversationList}>
            {this.props.conversation_list.map((conversation, index) => {
              return conversation.users.map((user, idx) => {
                if (user.id != this.myId) {
                  return (
                    <ConversationContainer
                      key={index}
                      name={user.email}
                      navigation={this.props.navigation}
                      convid={conversation.id}
                    />
                  );
                }
              });
            })}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bgi: {
    width: '100%',
    height: '100%',
  },
  header: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  ConversationList: {
    flex: 9,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default ConversationList;
