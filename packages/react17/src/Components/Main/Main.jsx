import React from 'react';
import './style/main.css';
import { MyButton } from './SubComponents';

const Main = (props) => {
  return (
    <div id="main">
      Main content
      <MyButton />
    </div>
  );
};

export default Main;
