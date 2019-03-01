import { Reducer } from 'redux';
import { ChatState, SessionActionTypes } from './type';

const initialState: ChatState = {
  currentChat: [],
};

export const chatReducer: Reducer<ChatState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SessionActionTypes.CHAT_USER_UPDATE: {
      return { ...state, currentChat: state.currentChat.concat(action.payload) };
    }
    default: {
      return state;
    }
  }
};
