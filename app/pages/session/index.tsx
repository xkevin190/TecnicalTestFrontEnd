import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Registro, User, login } from '../../store/Session';
import Login from './Login';
import Register from './Register';

interface Props extends RouteComponentProps {
  register: (user: User) => void;
  login: (user: User) => void;
}

enum SessionType {
  login = 'login',
  register = 'register',
}

type State = {
  type: string;
};

class Session extends React.Component<Props, State> {
  state = {
    type: 'login',
  };

  changeType = (value: string) => {
    this.setState({ type: value });
  };

  render() {
    const { type } = this.state;
    const { register } = this.props;
    return (
      <>
        {SessionType.login === type && (
          <Login
            history={this.props.history}
            actionLogin={this.props.login}
            changeType={this.changeType}
          />
        )}
        {SessionType.register === type && (
          <Register changeType={this.changeType} actionRegistro={register} />
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  register: (user: User) => dispatch(Registro(user)),
  login: (user: User) => dispatch(login(user)),
});

export default connect(
  null,
  mapDispatchToProps
)(Session);
