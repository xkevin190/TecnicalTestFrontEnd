import Firebase from '../../firebase';
import { User, SessionActionTypes } from './type';

const db = new Firebase();

export const Registro = (user: User) => (dispatch: (data: any) => any) => {
  db.registerUser(user, (user: User) => {
    dispatch({
      type: SessionActionTypes.SESSION_UPDATE,
      payload: user,
    });
  });
};

export const login = (user: User) => (dispatch: (data: any) => any) => {
  db.loginUser(user, (user: User) => {
    dispatch({
      type: SessionActionTypes.SESSION_UPDATE,
      payload: user,
    });
  });
};

