import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCustomers from '../../asyncAction/customers';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const customers = useSelector((state) => state.customers.customers);

  const inc = () => dispatch({ type: 'INC', payload: 1 });
  const dec = () => dispatch({ type: 'DEC', payload: 1 });

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: 'ADD_CUSTOMER', payload: customer });
  };

  return (
    <div>
      <div>
        <h1>Hello counter</h1>
        <h2>{counter}</h2>
        <button onClick={() => dec()}>-</button>
        <button onClick={() => inc()}>+</button>
        <hr />
        <button onClick={() => addCustomer(prompt())}>ADD Customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>ADD users from JSONPLACEHOLDER</button>
      </div>
      {customers.length > 0
        ? (
          <div>
            {customers.map((customer) => (
              <div>
                {customer.name}
              </div>
            ))}
          </div>
        )
        : (
          <div>
            <h1>You have not customers</h1>
          </div>
        )}
    </div>
  );
};

export default Counter;
