import React from 'React'
import { TextField, FormHelperText } from '@material-ui/core';

type Props = {
    label?: string;
    name?: string;
    // tslint:disable-next-line:no-any
    onBlur?: (event: any) => void;
    // tslint:disable-next-line:no-any
    onChange?: (event: React.ChangeEvent<any>) => void;
    // tslint:disable-next-line:no-any
    value?: any;
    required?: boolean;
    disabled?: boolean
    maxLength?: number;
    placeholder?:string
    style?: React.CSSProperties
    width?: '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%' |'80%'| '90%' | '100%'
    error?: string | boolean
    // tslint:disable-next-line:no-any
    type?: any
  };
  

class Input extends React.Component<Props> {
    
    render(){
        const { width , error, ...rest } = this.props
        return (
            <div style={{width:width}}>
                <TextField
                    id="outlined-dense"
                    margin="dense"
                    variant="outlined"
                    {...rest}
                />
                {error &&
                <FormHelperText style={{
                        position: 'relative',
                        top: -15,
                        left: 5,
                        color: 'red'
                    
                }} 
                >{typeof error === 'boolean'?'Este Campo es requerido': error}</FormHelperText>}
            </div>
        )
    }
}



export default Input