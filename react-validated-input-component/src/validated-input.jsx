import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { password } = this.state;
    let errorMsg = '';
    if (!password.length) {
      errorMsg = 'A password is required.';
    } else if (password.length < 8) {
      errorMsg = 'Your password is too short.';
    }
    return (
      <div className="container">
        <form action="">
          <label htmlFor="password">Password</label>
          <div className='input-div'>
            <input className='input' onChange={this.handleChange} type="password" name="password" id="password" />
            <i className={errorMsg.length ? 'fas fa-times red' : 'fas fa-check green'}></i>
          </div>
          <p className="red">{errorMsg}</p>
        </form>
      </div>
    );
  }
}

export default ValidatedInput;
