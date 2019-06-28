import React from 'react';
import { addCounterValue, decrementCounterValue } from '../../actions/actions'
import { connect } from 'react-redux'

const Counter = ({ increment, decrement, value }) => {
  return (
    <>
      <h1>Counter!</h1>
      <div>Clicked {value} times~</div>
      <button onClick={increment}>Click me!</button>
      <button onClick={decrement}>Click me too!</button>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    increment: (value) => dispatch(addCounterValue(value)),
    decrement: (value) => dispatch(decrementCounterValue(value))
  }
}

const mapStateToProps = state => ({
  value: state.value
})

const enhanceCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export { enhanceCounter as Counter }

