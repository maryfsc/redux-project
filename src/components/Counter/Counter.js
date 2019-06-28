import React, { Component } from 'react';
import { addCounterValue } from '../../actions/actions'
import { connect } from 'react-redux'

class Counter extends Component {

  render() {
    return (
      <>
        <h1>Counter!</h1>
        <div>Clicked {this.props.value} times~</div>
        <button onClick={() => this.props.increment()}>Click me!</button>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: (value) => dispatch(addCounterValue(value)),
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

