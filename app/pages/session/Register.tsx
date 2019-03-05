import * as React from 'react';
import { Button } from '@material-ui/core';
import Input from '../../components/Input';
import { validator, validateRequire, Errors } from '../../utils/validator';
import { SessionContainer, Title, Form } from './Login';
import { User } from '../../store/Session';

type Props = {
  changeType: (value: string) => void;
  actionRegistro: (user: User) => void;
};

type State = {
  errorEmail: string | boolean;
  errorName: string | boolean;
  errorPassword: string | boolean;
  errorConfirm: string | boolean;
  password: string;
  confirm: string;
  email: string;
  name: string;
};

class Register extends React.Component<Props, State> {
  state = {
    errorEmail: false,
    errorName: false,
    errorPassword: false,
    errorConfirm: false,
    password: '',
    confirm: '',
    email: '',
    name: '',
  };

  handleChange = async (values: State) => {
    validateRequire(
      {
        ...values,
      },
      (result): Errors => {
        this.setState({
          ...values,
          ...result,
        });
        return result;
      }
    ).then((result: Errors) => {
      if (
        !result.errorName &&
        !result.errorConfirm &&
        !result.errorEmail &&
        !result.errorPassword
      ) {
        this.props.actionRegistro({
          name: values.name,
          email: values.email,
          password: values.password,
        });
      }
    });
  };

  render() {
    const { changeType } = this.props;
    const values = this.state;

    return (
      <SessionContainer>
        <Title>Registro</Title>
        <Form
          style={{
            paddingTop: 40,
          }}
        >
          <Input
            placeholder="Nombre"
            style={{ paddingTop: 10, paddingBottom: 10 }}
            ContentWidth="60%"
            error={values.errorName}
            onChange={event =>
              validator('name', event.target.value!, result => {
                this.setState({ errorName: result, name: event.target.value });
              })
            }
          />

          <Input
            placeholder="Email"
            style={{ paddingTop: 10, paddingBottom: 10 }}
            ContentWidth="60%"
            type="email"
            error={values.errorEmail}
            onChange={event =>
              validator('email', event.target.value!, result => {
                this.setState({ errorEmail: result, email: event.target.value });
              })
            }
          />

          <Input
            placeholder="Contraseña"
            style={{ paddingTop: 10, paddingBottom: 10 }}
            ContentWidth="60%"
            type="password"
            error={values.errorPassword}
            onChange={event =>
              validator('contraseña', event.target.value!, result => {
                this.setState({ errorPassword: result, password: event.target.value });
              })
            }
          />

          <Input
            placeholder="confirmar Contraseña"
            style={{ paddingTop: 10, paddingBottom: 10 }}
            ContentWidth="60%"
            type="password"
            disabled={values.password.length === 0}
            error={values.errorConfirm}
            onChange={event =>
              validator(
                'confirm',
                event.target.value!,
                result => {
                  this.setState({ errorConfirm: result, confirm: event.target.value });
                },
                values.password
              )
            }
          />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button
              color="secondary"
              variant="outlined"
              style={{ margin: 5, marginBottom: 40 }}
              onClick={() => changeType('login')}
            >
              Atras
            </Button>
            <Button
              color="primary"
              variant="outlined"
              style={{ margin: 5, marginBottom: 40 }}
              onClick={() => this.handleChange(values)}
            >
              Registro
            </Button>
          </div>
        </Form>
      </SessionContainer>
    );
  }
}

export default Register;
