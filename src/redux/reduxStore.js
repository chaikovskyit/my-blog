import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import counterReducer from './reducers/counterReducer';
import customerReducer from './reducers/customerReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  customers: customerReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
