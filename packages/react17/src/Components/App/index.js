import React from 'react';

import SideNavigator from '../SideNavigator';
import Main from '../Main';
import './style/app.css';
import store from '../../redux/store';
import { Provider } from 'react-redux';

const App = (props) => {
  return (
    <Provider store={store}>
      <h1>Practice </h1>
      <div id="wrapper">
        <SideNavigator />
        <Main />
      </div>
    </Provider>
  );
};
export default App;
