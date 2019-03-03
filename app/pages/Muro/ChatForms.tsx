import * as React from 'react'
import Card from '@material-ui/core/Card';
import { TextField, Button } from '@material-ui/core';
import {Chat} from '../../store/chat' 

type Props = {
    action: (data: Chat)=>void
}

type State ={
    name:string,
    message:string
}
export default class ChatForms extends React.Component<Props , State> {
    
    state={
        name:'',
        message:''
    }
    
    dios = () => {
        this.props.action(this.state)
    }
    
    render() {
    return (
      <Card style={{padding: '0 40px 40px', flex:1}}>
        <TextField
          id="outlined-dense"
          margin="dense"
          placeholder="Ingrese Nombre"
          variant="outlined"
          onChange={(event) =>{this.setState({name:event.target.value})}}
        />

        <TextField
          id="outlined-multiline-static"
          placeholder='Comentario'
          multiline
          rows="4"
          margin="normal"
          variant="outlined"
          onChange={(event) =>{this.setState({message:event.target.value})}}
        />
        <div style={{ display:'flex' , flexDirection:'row-reverse' }}   >
            <Button color='primary' variant='contained' onClick={this.dios} >
                Submit
            </Button>  
        </div>
      </Card>
    );
  }
}
