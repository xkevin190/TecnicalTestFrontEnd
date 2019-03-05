import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { connectRouter, routerMiddleware, push } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { rootReducer } from './root';

declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?(a: any): void;
};

declare const module: NodeModule & {
  hot?: {
    accept(...args: any[]): any;
  };
};

const actionCreators = { push };

const logger = (createLogger)({
  level: 'info',
  collapsed: true,
});

const history = createHashHistory();
const router = routerMiddleware(history);

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators,
    }) as any)
  : compose;
/* eslint-enable no-underscore-dangle */
const enhancer = composeEnhancers(applyMiddleware(thunk, router, logger));

export default {
    history,
     configureStore(initialState: object | void) {
    const reducer = connectRouter(history)(rootReducer);
    const store = createStore(reducer, initialState as any, enhancer);

    if (module.hot) {
      module.hot.accept(
        './root',
        () => store.replaceReducer(require('./root').rootReducer) // eslint-disable-line global-require
      );
    }

    return store;
  },
};
