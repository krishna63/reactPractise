import { combineReducers } from 'redux';
import sideNavigatorReducer from '../../Components/SideNavigator/reducer';
import ButtonCountReducer from '../../Components/Main/reducer';

const rootReducer = combineReducers({
  sideNavigatorReducer,
  ButtonCountReducer,
});

export default rootReducer;
