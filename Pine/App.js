import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import conversation from './src/reducer/reducer';
import ChatPageContainer from './src/container/chat_page_container';
import ConversationListContainer from './src/container/conversation_list_container';
import Login from './src/auth/login';

const store = createStore(conversation);

const MainNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  ConversationList: {
    screen: ConversationListContainer,
  },
  ChatPage: {
    screen: ChatPageContainer,
  },
});

const Nav = createAppContainer(MainNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}

export default App;
