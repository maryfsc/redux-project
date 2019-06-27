export const ADD_COUNTER_VALUE = 'ADD_COUNTER_VALUE';
export const DECREMENT_COUNTER_VALUE = 'DECREMENT_COUNTER_VALUE';

export const addCounterValue = value => {
  return {
    type: ADD_COUNTER_VALUE,
    value
  }
}

export const decrementCounterValue = value => {
  return {
    type: DECREMENT_COUNTER_VALUE,
    value
  }
}
