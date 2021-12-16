import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
    this.imgs = [];
    this.progressDots = [];
    this.handleClick = this.handleClick.bind(this);
    this.interval = setInterval(() => {
      this.setState({ current: (this.state.current + 1) % this.imgs.length });
    }, 3000);
  }

  handleClick(event) {
    if (event.target.matches('i')) {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.setState({ current: (this.state.current + 1) % this.imgs.length });
      }, 3000);
      if (event.target.matches('.fa-chevron-left')) {
        this.setState({ current: (this.state.current - 1) < 0 ? this.imgs.length - 1 : this.state.current - 1 });
      } else if (event.target.matches('.fa-chevron-right')) {
        this.setState({ current: (this.state.current + 1) % this.imgs.length });
      } else if (event.target.matches('.progress-circle')) {
        this.setState({ current: Number.parseInt(event.target.getAttribute('index')) });
      }
    }
  }

  render() {
    this.imgs = this.props.imgs.map((img, i) => {
      return (
          <img className={`${i === this.state.current ? '' : 'hidden'}`} key={img.id} src={img.url} alt="" />
      );
    });
    this.progressDots = this.props.imgs.map((img, i) => {
      return <i index={i} key={i} className={`${i === this.state.current ? 'fas' : 'far'} fa-circle progress-circle`}></i>;
    });
    return (
      <div onClick={this.handleClick} className="flex column align-items-center">
        <div className="flex align-items-center ">
          <i className="fas fa-chevron-left"></i>
          {this.imgs}
          <i className="fas fa-chevron-right"></i>
        </div>
        <p>
        {this.progressDots}
        </p>
      </div>
    );
  }
}

export default Carousel;
