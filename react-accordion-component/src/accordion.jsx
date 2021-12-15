import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: null };
    this.topics = [];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.matches('.topic-button')) {
      if (this.state.current === event.target.topicId) {
        this.setState({ current: null });
      } else {
        this.setState({ current: event.target.topicId });
      }
    }
  }

  render() {
    this.topics = this.props.topics.map(topic => {
      return (
        <li className='topic' key={topic.id}>
          <button topicId={topic.id} className='topic-button'>{topic.name}</button>
          <p className={`detail ${Number.parseInt(this.state.current) === topic.id ? '' : 'inactive'}`}>{topic.detail}</p>
        </li>
      );
    });
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
