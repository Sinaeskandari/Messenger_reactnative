export const getUserName = (firstName, lastName) => ({
  type: 'SAVE_SELECTED_USER_NAME',
  name: firstName,
  family: lastName,
});

export const saveDataFromServer = data => ({
  type: 'SAVE_DATA_FROM_SERVER',
  payload: data,
});

export const getConvId = id => ({
  type: 'GET_CONV_ID',
  payload: id,
});

export const getMessageFromServer = messages => ({
  type: 'GET_MESSAGE_FROM_SERVER',
  payload: messages,
});
