import { User } from '../store/Session';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: 'AIzaSyCBW2JmfFybWpNSqqENMhApNBihI-JIU7o',
  authDomain: 'redsocial-51e66.firebaseapp.com',
  databaseURL: 'https://redsocial-51e66.firebaseio.com',
  projectId: 'redsocial-51e66',
  storageBucket: '',
  messagingSenderId: '631429391924',
};

firebase.initializeApp(config);
const users = firebase.database().ref('users');
const auth = firebase.auth();

export default class Firebase {
  // loginUser = (value, navigation, message , loaded) =>{
  //     auth.signInWithEmailAndPassword(value.email, value.password)
  //     .then(()=>{
  //         loaded()
  //         navigation.navigate('Sections')
  //     })
  //     .catch(function(error) {

  //         loaded()
  //         var errorMessage = error.message;
  //         message(errorMessage)
  //     });
  // }

  registerUser = (value: User, cb: any) => {
    auth
      .createUserWithEmailAndPassword(value.email, value.password!)
      .then((data: firebase.auth.UserCredential) => {
        const user:User ={
            name: value.name,
            email: data.user!.email!,
            id: data.user!.uid!,
        }
        users.child(data.user!.uid).set({
            user
        });
        return user;
      })
      .then((user: User) => {
        cb(user);
      });
  };
}
