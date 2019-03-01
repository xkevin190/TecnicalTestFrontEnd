import React from 'react'
import styled from 'styled-components'
import { FormControl, Button } from '@material-ui/core';
import Input from '../../components/Input'


type Props = {
    changeType: (register : string )=>void
}

type State = {
    Type: string
}

class Login extends React.Component<Props, State> {
    render() {
        const { changeType } = this.props
        return (
            <SessionContainer>
                <Title>Login</Title>
                <Form>
                    <Input
                        placeholder="Email"
                        style={{paddingTop:10 ,paddingBottom: 10,}}
                        width='60%'
                    />

                    <Input
                        placeholder="Contraseña"
                        style={{paddingTop:10 ,paddingBottom: 10,}}
                        width='60%'

                    />
                    <div style={{display:'flex', flexDirection: 'row' }}>
                        <Button color='primary' variant='outlined' style={{margin:5}} >
                            Ingresar
                        </Button>
                        <Button color='primary' variant='outlined' style={{margin:5}}  onClick={()=>changeType('register')} >
                            Registro
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
    border: 1px solid;
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