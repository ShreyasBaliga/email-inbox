import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import sample from './reducer/sample';

const rootReducer = combineReducers({
    sample: sample
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
  ));

export default store;