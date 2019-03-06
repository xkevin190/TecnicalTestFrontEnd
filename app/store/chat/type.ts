export interface Chat {
    id?:string
    message: string;
    autor: string
    likes?: [{id:string}]
    createAt: number;
  }
  
  export interface ChatState {
    currentChat: Chat[] | []
  }
  
  export  enum PostActionTypes {
    CHAT_USER_UPDATE = '@@post/SET_CHAT',
    POST_USER_GET = '@@post/GET_POST'
  }
