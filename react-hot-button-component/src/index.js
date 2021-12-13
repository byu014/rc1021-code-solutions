import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0
    };
    this.index = -1;
    this.colorClasses = [
      'black',
      'dark-purple',
      'light-purple',
      'salmon',
      'orange',
      'yellow',
      'white'
    ];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ numClicks: this.state.numClicks + 1 });
  }

  render() {
    if (this.state.numClicks % 3 === 0) {
      this.index++;
    }
    if (this.index >= this.colorClasses.length) {
      this.index = this.colorClasses.length - 1;
    }
    return <button onClick={this.handleClick} className={`border shadows ${this.colorClasses[this.index]}`}>Hot Button</button>;
  }
}

ReactDOM.render(
  <HotButton/>,
  document.querySelector('#root')
);
