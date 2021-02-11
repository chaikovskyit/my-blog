export const INC = 'INC';
export const DEC = 'DEC';
export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const ADD_JSON_CUSTOMERS = 'ADD_JSON_CUSTOMERS';

// export const inc = () => ({ type: 'INC' });
// export const dec = () => ({ type: 'DEC' });

export const addJSC = (payload) => ({ type: 'ADD_JSON_CUSTOMERS', payload });
