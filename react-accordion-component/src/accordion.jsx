import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: null };
    this.topics = this.props.topics.map(topic => {
      return (
        <li className='topic' key={topic.id}>
          <button id={topic.id} className='topic-button'>{topic.name}</button>
          <p className='detail inactive'>{topic.detail}</p>
        </li>
      );
    });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.matches('.topic-button')) {
      if (this.state.current === event.target.id) {
        this.setState({ current: null });
      } else {
        this.setState({ current: event.target.id });
      }
    }
  }

  setInactive() {
    const $topics = document.querySelectorAll('.topic');
    for (let $topic of $topics) {
      if (this.state.current === $topic.querySelector('.topic-button').id) {
        $topic.querySelector('.detail').classList.remove('inactive');
      } else {
        $topic.querySelector('.detail').classList.add('inactive');
      }
    }
  }

  render() {
    this.setInactive();
    return (
      <div onClick={this.handleClick} className="accordion">
        <ul>
          {this.topics}
        </ul>
      </div>
    );
  }
}

export default Accordion;
