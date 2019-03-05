import { combineReducers } from 'redux';
import { ChatState, chatReducer as chat } from './chat';
import {SessionState ,sessionReducer as session } from './Session'
import { Omit } from 'utility-types';
import { RouterState } from 'connected-react-router';

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
