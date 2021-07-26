import React, { Component } from "react";
import classes from "./Counter.module.css";
import { connect } from 'react-redux';
import * as actions from "../../redux/actions/counter";

class Counter extends Component {
  state = {
    step: 5,
  }

  handleStepChange = (e) => {
    this.setState({
      step: +e.target.value
    });
  }

  render() {
    const { counterValue, minusCounter, plusCounter, reset } = this.props;

    return (
      <div className={classes.Container} >
        <h1>Counter</h1>
        <div className={classes.Count}>{counterValue}</div>

        <div>
          <button onClick={() => {
            minusCounter(this.state.step)
          }}>-</button>
          <button onClick={reset}>0</button>
          <button onClick={() => { plusCounter(this.state.step); }}>+</button>
        </div>
        <div className={classes.StepContainer}>
          <label htmlFor='stepInput'>Step: </label>
          <input type='text' name='stepInput' maxLength={3} value={this.state.step} onChange={this.handleStepChange} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterValue: state.counter,
  }
}

const mapDispatchToProps = {
  minusCounter: actions.minusCounter,
  plusCounter: actions.plusCounter,
  reset: actions.reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
