import * as React from 'react';
import { Card, Typography, Divider } from '@material-ui/core';
import styled from 'styled-components';
import { Chat } from '../../store/chat';
import { ThumbUpAltOutlined, ThumbUp } from '@material-ui/icons';
import { User } from '../../store/Session';

type Props = {
  chats: Chat[];
  user:User
  getData:()=>void
};
export default class ChatForms extends React.Component<Props> {

  state = {
    like: 0,
    liked: true,
  };

  componentDidMount=()=>{
    this.props.getData()
  }

  render() {
    const Icon = this.state.liked ? IconUp : IconOFF;
    return (
      <>
        {this.props.chats.map((chat, key) => {
          return (
            <Contenedor key={key}>
              {key === 0 && <Divider />}
              <Contend>
                <Typography style={{ fontSize: 15, marginBottom: 10 }}>{chat.message}</Typography>

                <div
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                >
                  <Typography style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Autor: {chat.autor}
                  </Typography>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon onClick={() => this.setState({ liked: !this.state.liked })} />
                    {this.state.like}
                  </div>
                </div>
              </Contend>
            </Contenedor>
          );
        })}
      </>
    );
  }
}

// const Header = styled.div`
//     height: 40px;
//     background: #FCFCFC;
//     align-items: center;
//     display: flex;
//     border-bottom: 1px solid;
//     border-color: #0000002e;
//     border-radius: 2px;
// `
const Contend = styled.div`
  min-height: 80px;
  padding: 20px;
`;

const Contenedor = styled(Card)`
  margin: 0 60px;
  border-bottom: 1px solid;
  margin-bottom: 10px;
  border-color: rgba(228, 232, 239, 0.47);
`;

const IconOFF = styled(ThumbUpAltOutlined)`
  color: #01579b;
  cursor: pointer;
  &:hover {
    width: 27px;
    height: 22px;
  }
`;
const IconUp = styled(ThumbUp)`
  color: #01579b;
  cursor: pointer;
  &:hover {
    width: 27px;
    height: 22px;
  }
`;
