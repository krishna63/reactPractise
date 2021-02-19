import { BUTTON_CLICK_ACTION_SUCCESS, DECREMENT_COUNT_ASYNC } from '../actions';

const initialCountState = {
  clickCount: 0,
};
function ButtonCountReducer(state = initialCountState, action) {
  switch (action.type) {
    case BUTTON_CLICK_ACTION_SUCCESS:
      const { decrement } = action;
      return {
        clickCount: decrement ? --state.clickCount : state.clickCount++,
      };
    default:
      return initialCountState;
  }
}

export default ButtonCountReducer;
