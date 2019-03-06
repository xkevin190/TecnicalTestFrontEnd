import { action } from 'typesafe-actions';
import { PostActionTypes, Chat } from './type';
import Firebase from '../../firebase/index'

const db = new Firebase()
export const updateUser = (chat: Chat) =>
  action(PostActionTypes.CHAT_USER_UPDATE, chat);


  export const newPost = (data:Chat) => () =>{
    db.newPost(data)
  }


 export const getDataPost = ()=> (dispatch:any) =>{
    db.getPost( (data)=>{
      dispatch({
         type: PostActionTypes.POST_USER_GET,
         payload: data
      })
    })
  }