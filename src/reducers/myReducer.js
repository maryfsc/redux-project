export const initialState = { value: 0 };

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNTER_VALUE':
      return {...state, value: state.value + 1 }
    default:
      return state
  }
}
