import { combineReducers } from 'redux';
import { ChatState, chatReducer as chat } from './chat';

export interface ApplicationState {
  chat: ChatState;
}

type RootReducer = ApplicationState

export const rootReducer = combineReducers<RootReducer>({
    chat,
});
