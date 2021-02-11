import { addJSC } from '../redux/actions/actions';

const fetchCustomers = () => function (dispatch) {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => dispatch(addJSC(json)));
};

export default fetchCustomers;
