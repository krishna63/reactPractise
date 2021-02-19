import {
    BUTTON_CLICK_ACTION_SUCCESS,
    DECREMENT_COUNT_ASYNC
} from "../actions";

const initialCountState = {
  clickCount: 0
}
function ButtonCountReducer (state=initialCountState, action) {
  switch (action.type) {
    case BUTTON_CLICK_ACTION_SUCCESS:
      console.log('incremented count  by 1', action, state);
      return {
        clickCount: state.clickCount++
      };
    case DECREMENT_COUNT_ASYNC:
      console.log('decrement count  by 1', state);
      return {
        clickCount: --state.clickCount
      };
    default:
      return initialCountState;
  }
};

export default ButtonCountReducer;
