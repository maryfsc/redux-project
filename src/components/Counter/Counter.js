import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clickCount: 0
    }
  }

  addCount = () => {
    this.setState({
      clickCount: this.state.clickCount + 1 
    })
  }

  render() {
    return (
      <>
        <h1>Counter!</h1>
        <div>Clicked {this.state.clickCount} times~</div>
        <button onClick={() => this.addCount()}>Click me!</button>
      </>
    )
  }
}

export { Counter }
