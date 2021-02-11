import { INC, DEC } from '../actions/actions';

const initialState = {
  counter: 0,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DEC:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
