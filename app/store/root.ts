import { combineReducers } from 'redux';
import { Omit } from 'utility-types';
import { RouterState } from 'connected-react-router';
import { ChatState, chatReducer as chat } from './chat';
import {SessionState ,sessionReducer as session } from './Session'

export interface ApplicationState {
  chat: ChatState;
  session:SessionState;
  router: RouterState;
}

type RootReducer = Omit<ApplicationState, 'router'>;

export const rootReducer = combineReducers<RootReducer>({
    chat,
    session
});
