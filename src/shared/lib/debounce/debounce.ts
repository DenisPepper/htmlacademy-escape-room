import React from 'react';

const DEBOUNCE_DELAY = 1000;

type V = React.ChangeEvent<HTMLInputElement>;
type C = (value: V) => void;
type T = ReturnType<typeof setTimeout>;

export const debounce = (callback: C, delay = DEBOUNCE_DELAY) => {
  let timeoutId: T;
  return (value: V) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(value), delay);
  };
};
