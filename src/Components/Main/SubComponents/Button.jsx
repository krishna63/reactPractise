import React, {useState} from "react";
import {
  incrementCountByAsync,
  decrementCountByAsync
} from "../actions";
import {
  connect
} from "react-redux";

const MyButton = (props) => {
  const {clickCount} = props;

  const handleIncrement = () => {
    props.incrementCountByAsync(clickCount);
  }

  const handleDecrement = () => {
    props.decrementCountByAsync(clickCount);
  }

  return (<>
      <h5>{`Current click count is ${clickCount}`}</h5>
        <button onClick={handleIncrement}>
          Increment
        </button>
        <button onClick={handleDecrement}>
          Decrement
        </button>
    </>
  )
};

const mapState = ({ButtonCountReducer}) => {
  return {...ButtonCountReducer};
}

const mapDispatch = (dispatch, props) => {
  return {
    incrementCountByAsync: (clickCount) => dispatch(incrementCountByAsync(clickCount)),
    decrementCountByAsync: (clickCount) => dispatch(decrementCountByAsync(clickCount))
  }
}

export default connect(mapState, mapDispatch)(MyButton);
