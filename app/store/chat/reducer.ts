import { Reducer } from 'redux';
import { ChatState, PostActionTypes } from './type';

const initialState: ChatState = {
  currentChat: [],
};

export const chatReducer: Reducer<ChatState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PostActionTypes.POST_USER_GET: {
      return { ...state, currentChat: action.payload };
    }
    default: {
      return state;
    }
  }
};
