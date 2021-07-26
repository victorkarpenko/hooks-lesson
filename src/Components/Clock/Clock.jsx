import React from 'react';
import c from './Clock.module.css'

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleString()
  };

  intervalID = null;

  tick = () => {
    this.setState({
      time: new Date().toLocaleString()
    })
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <p className={c.Clock}>
        The time is {this.state.time}.
      </p>
    );
  }
}

export default Clock;