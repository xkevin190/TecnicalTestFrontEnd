import { Reducer } from 'redux';
import { SessionState, SessionActionTypes } from './type';

const initialState: SessionState = {
  currentUser: null,
};

export const sessionReducer: Reducer<SessionState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SessionActionTypes.SESSION_UPDATE: {
      return { ...state, currentUser: action.payload };
    }
    default: {
      return state;
    }
  }
};
