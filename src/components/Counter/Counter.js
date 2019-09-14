import React from 'react';
import { addCounterValue, decrementCounterValue } from '../../actions/actions'
import { connect } from 'react-redux'

const Counter = ({ increment, decrement, clicks }) => {
  return (
    <>
      <h1>I'm a cute counter!</h1>
      <div>Clicked {clicks} times~</div>
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
  clicks: state.value
})

const enhanceCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export { enhanceCounter as Counter }

