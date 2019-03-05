import { User, SessionActionTypes } from './type';
import Firebase from '../../firebase';

const db = new Firebase();

export const Registro = (user: User) => (dispatch: (data: any) => any) => {
  db.registerUser(user, (user: User) => {
    dispatch({
      type: SessionActionTypes.SESSION_UPDATE,
      payload: user,
    });
  });
};
