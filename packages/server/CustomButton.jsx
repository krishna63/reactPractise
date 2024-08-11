"use client";
import React, { useState, useEffect } from "react";

export const CustomButton = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count++);
  };

  const handleDecrement = () => {
    setCount(count);
  };
  return (
    <>
      <p>Value of Count is :: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
};
