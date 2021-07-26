import React, { useEffect, useState, useRef } from 'react';
import { Fragment } from 'react';
import c from './Clock.module.css'

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const interval = useRef(null);

  useEffect(() => {
     interval.current = setInterval(
      tick,
      1000
    );

    console.log(interval.current);

    //willUnmount
    return () => {
      clearInterval(interval.current);
    }
  }, [])

  const tick = () => {
    console.log('tick');
    setTime(new Date().toLocaleString())
  }

  return (
    <Fragment>


      <p className={c.Clock}>
        The time is {time}.
      </p>
      <button onClick={() => {clearInterval(interval.current);}}>
        stop
      </button>
    </Fragment>
  );
}

/* class Clock extends React.Component {
  state = {
    time: new Date().toLocaleString()
  };

  intervalID = null;



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
} */

export default Clock;