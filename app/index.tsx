import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import store from './store/index'
import {getTheme} from './consts/theme'

import Test from './Test'

ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider theme={()=>getTheme()}>
        <Provider store={store}> 
            <Test />
        </Provider>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('app')
  );
    