import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'interface/root';

import Inbox from 'components/Inbox/Inbox';

function App() {
  const dispatch = useDispatch();

  return (
      <Inbox />
  );
}

export default App;
