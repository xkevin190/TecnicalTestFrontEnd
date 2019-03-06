import * as React from 'react';
import Card from '@material-ui/core/Card';
import { Typography, Button } from '@material-ui/core';
import { Chat } from '../../store/chat';
import Input from '../../components/Input';

type Props = {
  action: (data: Chat) => void;
  name?: string;
};

type State = {
  name: string;
  message: string;
};
export default class ChatForms extends React.Component<Props, State> {
  state = {
    name: 'Luck SkyWalker ',
    message: '',
  };

  dios = () => {
    const data:Chat={
      autor:this.props.name!,
      message:this.state.message,
      createAt:Date.now()
    }
    this.props.action({
      ...data
    })
    this.setState({ message: '' });
  };

  render() {
    return (
      <Card style={{ padding: '0 60px 40px', flex: 1 }}>
        <h1>
          <Typography style={{ fontSize: 18 }}>{this.props.name}</Typography>
        </h1>
        <Input
          ContentWidth="100%"
          value={this.state.message}
          multiline
          rows="4"
          onChange={event => {
            this.setState({ message: event.target.value });
          }}
          placeholder="Que pasa hoy ..."
        />
        <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 15 }}>
          <Button
            disabled={this.state.message.length === 0}
            color="primary"
            variant="outlined"
            onClick={this.dios}
          >
            Publicar
          </Button>
        </div>
      </Card>
    );
  }
}
