export interface User {
    id?: string;
    name: string;
    email: string;
    password?: string
  }
  
  export interface SessionState {
    currentUser: User | null
  }
  
  export  enum SessionActionTypes {
    SESSION_UPDATE = '@@Session/GET_USER',
  }
