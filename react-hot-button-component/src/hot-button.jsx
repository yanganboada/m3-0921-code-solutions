import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      color: 'black',
      index: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
    const color = ['indigo', 'purple', 'red', 'orange', 'yellow', 'white'];
    if ((this.state.clicks + 1) % 3 === 0 && this.state.clicks <= 18) {
      this.setState({ color: color[this.state.index++] });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className={ this.state.color } >
        Hot Button
      </button>
    );
  }
}

export default HotButton;
