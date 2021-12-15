import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModal: false };
    this.handleClick = this.handleClick.bind(this);
    this.title = this.props.title;
    this.itemsList = [];
  }

  handleClick(event) {
    if (event.target.matches('.fas.fa-bars')) {
      this.setState({ isModal: true });
    }
    if (event.target.matches('a') || event.target.matches('.modal')) {
      this.setState({ isModal: false });
    }
  }

  render() {
    const { isModal } = this.state;
    const { itemsList, title } = this;
    this.itemsList = this.props.itemsList.map(item => <li key={item.id}><a>{item.name}</a></li>);
    return (
      <div onClick={this.handleClick} className="container">
        <div className={`modal ${isModal ? '' : 'hidden'}`}></div>
        <div className={`drawer ${isModal ? '' : 'inactive'}`}>
          <strong>{title}</strong>
          <ul>
            {itemsList}
          </ul>
        </div>
        <i className="fas fa-bars"></i>
      </div>
    );
  }
}

export default AppDrawer;
