import React, { useState, useEffect } from 'react';
import s from './UserInfo.module.css';

const UsersInfo = ({ killerNumber, showAll }) => {
  const [user, setUser] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(`https://jsonplaceholder.typicode.com/users/${killerNumber}`)
      .then((res) => res.json())
      .then((userObj) => setUser(userObj));
  }, [killerNumber]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((res) => res.json())
      .then((usersObj) => setUsers(usersObj));
  }, [showAll]);

  return (
    <div>
      {!showAll
        ? (
          <div className={s.usersInfo}>
            <h1>Info</h1>
            <ul>
              <li>
                Nickname :
                {' '}
                {user.username}
              </li>
              <li>
                Name :
                {' '}
                {user.name}
              </li>
              <li>
                Email :
                {' '}
                {user.email}
              </li>
              <li>
                Phone :
                {' '}
                {user.phone}
              </li>
            </ul>
          </div>
        )
        : users.map((u) => (
          <div className={s.usersInfo}>
            <ul>
              <li>
                Nickname :
                {u.username}
              </li>
              <li>
                Name :
                {u.name}
              </li>
              <li>
                Email :
                {u.email}
              </li>
              <li>
                Phone :
                {u.phone}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default UsersInfo;
