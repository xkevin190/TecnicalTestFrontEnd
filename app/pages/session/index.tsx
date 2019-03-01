import React from 'react'
import Login from './Login'
import Register from './Register'

type Props ={

}

enum SessionType {
   login = 'login', 
   register = 'register'
}

type State ={
    type: string
}

class Session extends React.Component <Props , State> {

    state={
        type:'login' 
     }
    
     changeType =(value :string) => {
        this.setState({type: value })
     } 

    render(){
         const { type } = this.state
        return(
            <>
            {SessionType.login === type && <Login changeType={this.changeType }/>}
            {SessionType.register === type && <Register changeType={this.changeType }/>}    
            </>
        )
    }
}

export default Session