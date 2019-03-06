import { User } from '../store/Session';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Chat } from '../store/chat';

const config = {
  apiKey: 'AIzaSyCBW2JmfFybWpNSqqENMhApNBihI-JIU7o',
  authDomain: 'redsocial-51e66.firebaseapp.com',
  databaseURL: 'https://redsocial-51e66.firebaseio.com',
  projectId: 'redsocial-51e66',
  storageBucket: '',
  messagingSenderId: '631429391924',
};

firebase.initializeApp(config);
const users = firebase.database().ref('users');
const post = firebase.database().ref('post');
const auth = firebase.auth();

export default class Firebase {
  loginUser = (value: User, cb: (user: User) => void) => {
    auth.signInWithEmailAndPassword(value.email, value.password!).then(data => {
      users
        .child(data.user!.uid)
        .once('value')
        .then(user => {
          cb(user.val());
        });
    });
  };

  registerUser = (value: User, cb: (user: User) => void) => {
    auth
      .createUserWithEmailAndPassword(value.email, value.password!)
      .then((data: firebase.auth.UserCredential) => {
        const user: User = {
          name: value.name,
          email: data.user!.email!,
          id: data.user!.uid!,
        };
        users.child(data.user!.uid).set({
          ...user,
        });
        return user;
      })
      .then((user: User) => {
        cb(user);
      });
  };

  newPost = (data: Chat) => {
    const key = post.push().key;
    
    post.child(key!).set({
      id: key,
      ...data,
    });
  };

  getPost = (callback: (data: Chat[] ) => void) => {
    post.on('value', post => {
      const initalData = post!.val()
       const data:Chat[] | [] = initalData ? Object.values(post!.val()) : [];
       data.sort((a,b)=>{
         return b.createAt - a.createAt 
       })
       callback(data)
    });
  };
}
