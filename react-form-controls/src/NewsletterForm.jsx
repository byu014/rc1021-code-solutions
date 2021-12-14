import React from 'react';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    console.log(this.state.input);
    return (
      <form onSubmit={this.handleSubmit} action="">
        <label htmlFor="email">Email</label>
        <input onChange={this.handleChange} type="text" name="email" id="email" value={this.state.input} />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default NewsletterForm;
