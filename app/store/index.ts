import {createStore , applyMiddleware} from 'redux';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import {rootReducer} from './root';

declare const window: Window & {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?(): void;
  };

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

// const composedEnhancer = compose( applyMiddleware(logger), ...enhancerList);

const middleWare = applyMiddleware( ReduxThunk, logger)(createStore);

export default middleWare(rootReducer);