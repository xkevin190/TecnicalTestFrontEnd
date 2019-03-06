import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/root';
import { newPost, Chat , getDataPost } from '../../store/chat';
import ChatForms from './ChatForms';
import Content from './Content';
import { User,  } from '../../store/Session';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {
  user: User;
  action: (chat: Chat) => void;
  coments: Chat[];
  getPost:()=> void
}

class ChatComponent extends React.Component<Props> {
  render() {
    const { user, action, coments , getPost } = this.props;
    return (
      <Main>
        <ChatForms action={action} name={user.name} />
        <Content getData={getPost} chats={coments} user={user} />
      </Main>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  user: state.session.currentUser,
  coments: state.chat.currentChat,
});

const mapDispatchToProps = (dispatch: any) => ({
  action: (data: Chat) => dispatch(newPost(data)),
  getPost: ()=>dispatch(getDataPost())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatComponent);

const Main = styled.div`
  flex: 1;
  width: 100%;
`;
