import * as React from 'react'
import {Card, Typography }  from '@material-ui/core';
import styled from 'styled-components'
import { Chat } from '../../store/chat';

type Props ={
    chats: Chat[]
}
export default class ChatForms extends React.Component<Props> {
  render() {
    return (
        <>
        {this.props.chats.map( (chat , key)=>{
          return  <Contenedor  key={key} >
            <Header>
              <Typography style={{paddingLeft:20}}>  {chat.name}</Typography>
               </Header>
               <Contend>
                   <Typography >
                      {chat.message}
                   </Typography>
               </Contend>
           </Contenedor>
        })
        }
       </> 
    );
  }
}

const Header = styled.div`
    height: 40px;
    background: #FCFCFC;
    align-items: center;
    display: flex;
    border-bottom: 1px solid;
    border-color: #0000002e;
    border-radius: 2px;
`
const Contend = styled.div`
    min-height: 80px;
    padding: 20px;

`

const Contenedor = styled(Card)`
    box-shadow: 0px -1px 12px -2px rgba(0, 0, 0, 0.17) !important;
    margin: 0 40px;
    border: 0.5px solid ;
    border-color: antiquewhite;
    margin-bottom: 10px;
`