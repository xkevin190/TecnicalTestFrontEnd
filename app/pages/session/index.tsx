import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
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

class Session extends React.Component <RouteComponentProps<Props> , State> {

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
             { SessionType.login === type && <Login history={this.props.history} changeType={this.changeType }/>}
             {SessionType.register === type && <Register changeType={this.changeType }/>}     
            </>
        )
    }
}

export default Session