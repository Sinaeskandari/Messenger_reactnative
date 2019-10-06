const initial = {
  firstName: '',
  lastName: '',
  contacts: [],
  convid: -1,
  messages: [],
};

const conversation = (state = initial, action) => {
  switch (action.type) {
    case 'SAVE_SELECTED_USER_NAME':
      return {
        ...state,
        firstName: action.name,
        lastName: action.family,
      };
    case 'SAVE_DATA_FROM_SERVER':
      return {
        ...state,
        contacts: action.payload,
      };
    case 'GET_CONV_ID':
      return {
        ...state,
        convid: action.payload,
      };
    case 'GET_MESSAGE_FROM_SERVER':
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export default conversation;
