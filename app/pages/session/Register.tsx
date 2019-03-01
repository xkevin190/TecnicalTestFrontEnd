import React from 'react';
import { SessionContainer, Title, Form } from './Login';
import Input from '../../components/Input';
import { Button } from '@material-ui/core';
import { validator, validateRequire } from '../../utils/validator';
type Props = {
  changeType: (value: string) => void;
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
    errorEmail:false,
    errorName: false,
    errorPassword: false,
    errorConfirm: false,
    password: '',
    confirm: '',
    email: '',
    name: '',
  };

  handleChange = async (values: State) => {
    console.log('aca')
    const result = await validateRequire({
      ...values
    });
    this.setState({
      ...values,
      ...result
    })
    // if((result.requerido && values.errorEmail ) || (result.requerido && values.errorName )||result.requerido && values.errorPassword ){
    //        this.setState({
    //            errorEmail:true,
    //            errorName:true,
    //            errorPassword:true
    //        }) 
    //}

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
            width="60%"
            error={values.errorName}
            onChange={event => this.setState({ name: event.target.value })}
          />

          <Input
            placeholder="Email"
            style={{ paddingTop: 10, paddingBottom: 10 }}
            width="60%"
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
            width="60%"
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
            width="60%"
            type="password"
            disabled={values.password.length === 0}
            error={values.errorConfirm}
            onChange={event =>
              validator(
                'confirm',
                event.target.value!,
                result => {
                  this.setState({ errorConfirm: result });
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
              onClick={()=> this.handleChange(values)}
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
