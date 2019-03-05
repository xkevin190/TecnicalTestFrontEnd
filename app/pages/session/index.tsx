import * as React from 'react'

import Login from './Login'
import Register from './Register'
import {connect} from 'react-redux'
import {Registro, User} from '../../store/Session'
import { RouteComponentProps } from 'react-router-dom';

 interface Props extends RouteComponentProps {
    register: (user: User)=> void 
    user:string 
 }

enum SessionType {
   login = 'login', 
   register = 'register'
}

type State ={
    type: string
}

// RouteComponentProps<Props> 
class Session extends React.Component <Props , State> {

    state={
        type:'login' 
     }
    
     changeType =(value :string) => {
        this.setState({type: value })
     } 

    render(){
        console.log(this.props)
         const { type } = this.state
         const {register} = this.props
        return(
            <>
             { SessionType.login === type && <Login history={this.props.history}   changeType={this.changeType }/>}
             {SessionType.register === type && <Register changeType={this.changeType } actionRegistro={register}/>}     
            </>
        )
    }
}
const mapStateToProps =(state:any)=>({
    user: 'hi'
})

const mapDispatchToProps=(dispatch:any)=>({
    register: (user: User)=> dispatch(Registro(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(Session)