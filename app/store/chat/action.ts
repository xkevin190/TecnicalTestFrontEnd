import { action } from 'typesafe-actions';
import { SessionActionTypes, Chat } from './type';

export const updateUser = (chat: Chat) =>
  action(SessionActionTypes.CHAT_USER_UPDATE, chat);
