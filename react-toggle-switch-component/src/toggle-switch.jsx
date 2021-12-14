import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    return (
      <div className={`${this.state.isOn ? 'on' : 'off'} background`}>
        <button onClick={this.toggle} className='switch' ></button>
      </div>
    );
  }
}

export default ToggleSwitch;
