import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  handle_login() {
    axios
      .post('https://api.paywith.click/auth/signin/', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(response => {
        AsyncStorage.setItem('token', response.data.data.token);
        AsyncStorage.setItem('id', String(response.data.data.profile.id));
        const {navigate} = this.props.navigation;
        navigate('ConversationList');
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <ImageBackground
        source={require('../images/bgi3.jpg')}
        style={styles.container}>
        <View style={styles.login}>
          <Image source={require('../images/logo2.png')} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => this.setState({email: text})}
            placeholderTextColor="rgba(255,255,255,0.8)"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => this.setState({password: text})}
            placeholderTextColor="rgba(255,255,255,0.8)"
          />
          <TouchableOpacity
            style={styles.button_login}
            onPress={() => this.handle_login()}>
            <Text>Log in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: '100%',
    height: '100%',
  },
  login: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: '66%',
    borderRadius: 20,
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 50,
    color: 'white',
  },
  input: {
    color: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderStyle: 'solid',
    width: 180,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 5,
  },
  button_login: {
    backgroundColor: 'white',
    fontSize: 45,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 30,
  },
});

export default Login;
