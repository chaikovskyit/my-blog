import React, { useState } from 'react';
import UserInfo from './components/UserInfo';
import s from './App.module.css';

const App = () => {
  const [killerNumber, setKillerNumber] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const inc = () => setKillerNumber(killerNumber + 1);
  const dec = () => setKillerNumber(killerNumber - 1);
  const show = () => setShowAll(true);
  const unshow = () => setShowAll(false);

  if (killerNumber > 10) {
    return setKillerNumber(1);
  }
  if (killerNumber < 1) {
    return setKillerNumber(10);
  }

  return (
    <div className={s.wrapper}>
      <h1>We have 10 killers</h1>
      <h2>
        Change killer number and look info about him :
        {' '}
        {killerNumber}
        {' '}
      </h2>
      <UserInfo
        killerNumber={killerNumber}
        showAll={showAll}
      />
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
      <button onClick={show}>Show All Killers</button>
      <button onClick={unshow}>Show personal card</button>
    </div>
  );
};

export default App;
