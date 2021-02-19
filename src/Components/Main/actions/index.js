export const INCREMENT_COUNT_ASYNC = 'INCREMENT_COUNT_ASYNC';
export const DECREMENT_COUNT_ASYNC = 'DECREMENT_COUNT_ASYNC';
export const BUTTON_CLICK_ACTION_SUCCESS = 'BUTTON_CLICK_ACTION_SUCCESS';

export function incrementCountByAsync(currntCount) {
  return {
    type: INCREMENT_COUNT_ASYNC,
    payload: currntCount,
  };
}

export function decrementCountByAsync(currntCount) {
  console.log('incrementCountByAsync', INCREMENT_COUNT_ASYNC, currntCount);
  return {
    type: DECREMENT_COUNT_ASYNC,
    payload: currntCount,
  };
}
