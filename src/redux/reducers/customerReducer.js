import { ADD_CUSTOMER, ADD_JSON_CUSTOMERS } from '../actions/actions';

const initialState = {
  customers: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case ADD_JSON_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, ...action.payload],
      };
    default:
      return state;
  }
};

export default customerReducer;
