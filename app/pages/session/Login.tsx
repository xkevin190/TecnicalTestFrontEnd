import * as React from 'react'
import styled from 'styled-components'
import { FormControl, Button } from '@material-ui/core';
import {History} from 'history'
import {Errors, validator, validateRequire} from '../../utils/validator'
import Input from '../../components/Input'
import { User } from '../../store/Session';
 
type Props = {
    changeType: (register : string )=>void
    history: History
    actionLogin: (user: User) => void
}

type State = {
    errorEmail: string | boolean;
    errorPassword: string | boolean;
    password: string;
    email: string;
}

class Login extends React.Component<Props, State> {

    state = {
        errorEmail: false,
        errorPassword: false,
        password: '',
        email: '',  
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
            return result
          }
        ).then((result: Errors) => {
          if (
            !result.errorEmail &&
            !result.errorPassword
          ) {
            this.props.actionLogin({
              email: values.email,
              password: values.password,
            })
          }
        });
      };

    render() {
        const { changeType } = this.props
        const values = this.state
        return (
            <SessionContainer>
                <Title>Login</Title>
                <Form>
                    <Input
                        placeholder="Email"
                        style={{paddingTop:10 ,paddingBottom: 10,}}
                        ContentWidth='60%'
                        value={values.email}
                        error={values.errorEmail}
                        onChange={event =>
                            validator('email', event.target.value!, result => {
                              this.setState({ errorEmail: result, email: event.target.value });
                            })
                          }
                    />

                    <Input
                        placeholder="Contraseña"
                        style={{paddingTop:10 ,paddingBottom: 10,}}
                        error={values.errorPassword}
                        type='password'
                        value={values.password}
                        onChange={event =>
                            validator('contraseña', event.target.value!, result => {
                              this.setState({ errorPassword: result, password: event.target.value });
                            })
                          }
                          ContentWidth='60%'

                    />
                    <div style={{display:'flex', flexDirection: 'row' }}>
                        <Button color='primary' variant='outlined' style={{margin:5}}  onClick={()=>changeType('register')} >
                            Registro
                        </Button>
                      
                        <Button color='primary' variant='outlined' style={{margin:5}}
                            onClick={() => this.handleChange(values)}
                         >
                            Ingresar
                        </Button>
    
                    </div>
                </Form>

            </SessionContainer>
        )
    }
}

export default Login


 export const SessionContainer = styled.div`
    width: 60%;
    min-height: 400px;
    border: 2px solid;
    display: flex;
    flex-direction: column;
    border-color: #00C663;
   

`

export const Title = styled.div`
    margin-top: -13px;
    margin-left: 10px;
    margin-right: 5px;
    background: white;
    text-align: center;
    width: 8%;
    font-size: 16px;
    font-family:'Roboto';
    font-weight: 500;
    color:#6C738A;


`

export const Form = styled(FormControl)`
    flex:1;
    justify-content: center;
    align-items: center;
`