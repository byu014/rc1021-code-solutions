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

  validation() {
    const { password } = this.state;
    if (!password.length) {
      return 'A password is required.';
    }
    if (password.length < 8) {
      return 'Your password is too short.';
    }

    let hasDigit = false;
    let hasCapital = false;
    let hasSpecial = false;
    for (let char of password) {
      if (typeof Number.parseInt(char) === 'number') {
        hasDigit = true;
      }
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        hasCapital = true;
      }
      if (this.props.specialChars.has(char)) {
        hasSpecial = true;
      }
    }
    if (!(hasDigit && hasCapital && hasSpecial)) {
      return 'Your password needs to have a digit, a capital letter, and a special letter ( !, @, #, $, %, ^, &, *, (, or ) )';
    }
    return '';
  }

  render() {
    const errorMsg = this.validation();
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
