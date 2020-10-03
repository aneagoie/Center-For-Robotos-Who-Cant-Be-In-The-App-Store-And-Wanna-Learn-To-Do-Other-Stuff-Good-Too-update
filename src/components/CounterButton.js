import React, { PureComponent } from 'react';

class CounterButton extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  //below is not needed if we extend PureComponent
  //like we have above
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true
    }
    return false
  }

  updateCount = () => {
    this.setState(state => {
      return {count: state.count + 1}
    })
  }

  render() {
    console.log('CounterButton')
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;