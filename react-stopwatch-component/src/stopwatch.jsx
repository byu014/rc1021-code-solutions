import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curTime: 0, isPlay: false };
    this.isPlayIcon = {
      true: 'pause',
      false: 'play'
    };
    this.handlePlay = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.stopwatchInterval = null;
  }

  handleReset() {
    if (!this.state.isPlay) {
      this.setState({ curTime: 0 });
    }
  }

  handleClick() {
    if (this.state.isPlay) {
      clearInterval(this.stopwatchInterval);
    } else {
      this.stopwatchInterval = this.timer();
    }
    this.setState({ isPlay: !this.state.isPlay });
  }

  timer() {
    return setInterval(() => {
      this.setState({ curTime: this.state.curTime + 0.1 });
    }
    , 100);
  }

  render() {
    const { curTime, isPlay } = this.state;
    return (
      <div className="stopwatch">
        <div onClick={this.handleReset} className="timer">
          <p className="time">{ Math.floor(curTime)}</p>
        </div>
        <button onClick={this.handlePlay} className="play-button"><i className={`fas fa-${this.isPlayIcon[isPlay]}`}></i></button>
      </div>
    );
  }
}

export default Stopwatch;
