import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Settings from './store/index'
import {getTheme} from './consts/theme'
import Test from './Test'
import { ConnectedRouter } from 'connected-react-router';

const store = Settings.configureStore()
const history = Settings.history

ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider theme={()=>getTheme()}>
        <Provider store={store}> 
        <ConnectedRouter history={history}>
            <Test />
        </ConnectedRouter>    
        </Provider>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('app')
  );

  
if ((module as any).hot) {
  (module as any).hot.accept('./Test', () => {
    const NextRoot = require('./Test').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
    