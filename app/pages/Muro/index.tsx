import * as React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {ApplicationState} from '../../store/root'
import {updateUser , Chat} from '../../store/chat'
import ChatForms from './ChatForms'
import Content from './Content'


 class ChatComponent extends React.Component<any> {
  render() {
    return (
       <Main>
         <Content chats={this.props.chat}/>
         <ChatForms action={this.props.action}/>
       </Main>
    );
  }
}

const mapStateToProps=(state:ApplicationState)=>({
  chat: state.chat.currentChat
})

const mapDispatchToPropss=(dispatch: any)=>({
   action: (data: Chat )=> dispatch(updateUser(data))
})

export default connect(mapStateToProps , mapDispatchToPropss)(ChatComponent)

const Main = styled.div`
  flex:1
`